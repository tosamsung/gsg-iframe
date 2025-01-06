import { useState,useEffect } from 'react';
import MapPng from '../../assets/image/mapfarm.png';
const MAP_AREA = {
  width: 4480,
  height: 2880
}
function MapFarm() {
  const [playerPosition, setPlayerPosition] = useState({ x: 10, y: 10 });

  useEffect(() => {
    const fetchPlayerPosition = async () => {
      try {
        const position = await WA.player.getPosition();
        const { x, y } = position;
        const xPercent = (x / MAP_AREA.width) * 100;
        const yPercent = (y / MAP_AREA.height) * 100;
        setPlayerPosition({ x: xPercent, y: yPercent });
      } catch (error) {
        console.error('Error fetching player position:', error);
      }
    };

    fetchPlayerPosition();
    const handlePlayerMove = (e: { x: number; y: number }) => {
      const { x, y } = e;
      setPlayerPosition({
        x: (x / MAP_AREA.width) * 100,
        y: (y / MAP_AREA.height) * 100,
      });

    }
    WA.player.onPlayerMove(handlePlayerMove);
    return () => {
      WA.player.onPlayerMove(handlePlayerMove).unsubscribe();
    };
  }, []);

  return (
    <div className="relative">
      <img src={MapPng} alt="Map" className="w-full h-auto rounded border-2 border-solid border-orange-300" />
      <div
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

export default MapFarm;
