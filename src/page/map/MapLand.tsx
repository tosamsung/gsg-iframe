import { useState, useEffect, useRef } from 'react';
import MapPng from '../../assets/image/mapland.png';
import PlotIcon from '../../assets/image/ploticon.png'
import MoneyIcon from '../../assets/image/money.jpg'

import { HasPlayerMovedEvent } from '@workadventure/iframe-api-typings';
import { Coordinate } from '../../entity/Other';
import { Plot } from '../../entity/Plot';
import settings from '../../components/settings.json'
import PlotService from '../../service/PlotService';
const MAP_AREA = {
  width: 132 * 16,
  height: 124 * 16
};
const PLOT = settings.plot
function MapLand() {
  const [playerPosition, setPlayerPosition] = useState({ x: 10, y: 10 });
  const [plotsCoordinate, setPlotsCoordinate] = useState<Coordinate[]>([]);
  const [plotsEmpty, setPlotsEmpty] = useState<Coordinate[]>([]);
  const [plots, setPlots] = useState<Plot[]>([]);

  const plotService = new PlotService()
  const playerRef = useRef(null);
  const convertCoordinateToPercent = (coordinate: Coordinate): Coordinate => {
    return {
      x: (coordinate.x / MAP_AREA.width) * 100,
      y: (coordinate.y / MAP_AREA.height) * 100
    }
  }
  useEffect(() => {
    console.log(plots);

    if (plots && plots.length > 0) {

      const owner_id = WA.player.state.id;
      const rows = 3;
      const bigColumns = 2;
      const columns = 2;
      let arrayIndex = 0;
      let startX = PLOT.start_coordinate.x;
      const startY = PLOT.start_coordinate.y;

      const calculateCoordinates = (col: number, row: number) => ({
        x: (startX + (PLOT.margin_right + PLOT.width) * col) * PLOT.tile_size,
        y: (startY + (PLOT.margin_bottom + PLOT.height) * row) * PLOT.tile_size,
      });

      const ownPlotCoordinates: Coordinate[] = [];
      const emptyPlotCoordinates: Coordinate[] = [];

      for (let bigCol = 0; bigCol < bigColumns; bigCol++) {
        const offsetY = bigCol * rows;

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < columns; col++) {
            const currentRow = row + 1 + offsetY;
            const currentCol = col + 1;

            if (
              plots[arrayIndex]?.row === currentRow &&
              plots[arrayIndex]?.column === currentCol
            ) {
              if (!plots[arrayIndex]?.owner_id) {
                const percentCoordinate = convertCoordinateToPercent(
                  calculateCoordinates(col, row)
                );
                emptyPlotCoordinates.push(percentCoordinate);
              }
              else if (plots[arrayIndex]?.owner_id === owner_id) {
                const percentCoordinate = convertCoordinateToPercent(
                  calculateCoordinates(col, row)
                );
                ownPlotCoordinates.push(percentCoordinate);
              }
              arrayIndex++;
            }
          }
        }
        startX += PLOT.width * 2 + PLOT.margin_right * 2;
      }
      setPlotsCoordinate(ownPlotCoordinates);
      setPlotsEmpty(emptyPlotCoordinates)
    }
  }, [plots]);
  useEffect(() => {
    const fetchPlayerPosition = async () => {
      try {
        const position = await WA.player.getPosition();
        setPlayerPosition(convertCoordinateToPercent(position));
      } catch (error) {
        console.error('Error fetching player position:', error);
      }
    };

    fetchPlayerPosition();

    plotService
      .getPlotsByGroupNumberAndFarmId(WA.player.state.landNumber as number, 1)
      .then((response) => {
        setPlots(response);
      });

    let event: any;

    try {
      const handlePlayerMove = (e: HasPlayerMovedEvent) => {
        setPlayerPosition(convertCoordinateToPercent(e));
      };

      event = WA.player.onPlayerMove(handlePlayerMove);
    } catch (error) {
      console.error('Error setting up player move listener:', error);
    }
    return () => {
      if (event?.unsubscribe) {
        event.unsubscribe();
      }
    };
  }, []);


  return (
    <div className="relative overflow-hidden">
      <img src={MapPng} alt="Map" className="w-full h-auto rounded border-2 border-solid border-orange-300" />
      {plotsCoordinate.map((coord, index) => (
        <img
          key={index}
          src={PlotIcon}
          className="absolute bg-orange-200 opacity-80 rounded-full border-2 border-solid border-orange-400"
          style={{
            width: `${16}%`,
            height: `${15}%`,
            top: `${coord.y + 5}%`,
            left: `${coord.x + 2}%`,
          }}
        />
      ))}
      {plotsEmpty.map((coord, index) => (
        <img
          key={index}
          src={MoneyIcon}
          className="absolute bg-green-200 opacity-80 rounded-full border-2 border-solid "
          style={{
            width: `${16}%`,
            height: `${15}%`,
            top: `${coord.y + 5}%`,
            left: `${coord.x + 2}%`,
          }}
        />
      ))}
      <div
        ref={playerRef}
        className="absolute bg-white border-2 border-solid border-orange-500 rounded-full"
        style={{
          width: '10px',
          height: '10px',
          top: `${playerPosition.y}%`,
          left: `${playerPosition.x}%`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </div>
  );
}

export default MapLand;
