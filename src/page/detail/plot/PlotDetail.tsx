import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logoCoin from "../../../assets/image/coin.png"
import { Plot } from '../../../entity/Plot';
import PlotService from '../../../service/PlotService';
import { Button } from 'antd';
import Loading from '../../../components/Loading';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const plotService = new PlotService()
function PlotDetail() {
  const { plotId } = useParams<{ plotId: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [plot, setPlot] = useState<Plot | null>(null);
  // const [error, setError] = useState<string | null>(null);
  // const formattedBalance = balance.toLocaleString('en-US');

  useEffect(() => {
    const fetchData = async () => {
      if (plotId) {
        plotService.getById(plotId).then((response) => {
          setPlot(response)
          setLoading(false)

        })
      }
    }
    fetchData();
    return () => {
    };
  }, [plotId]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!plot) {
        close();
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [plot]);
  if (loading) {
    return (
      <Loading />
    );
  }
  const close = () => {
    WA.player.state.saveVariable('openPlotDetail', false);
  };
  const registerPlot = () => {
    WA.player.state.saveVariable("registerPlot", plotId);
  }

  if (!plot) {
    return (
      <div className="bg-yellow-100 text-yellow-700 p-4 rounded">
        Plot not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-auto ">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-dashed border-2 border-green-400">
          <div className="flex justify-between items-center p-4">
            <h1 className="font-bold">Chi tiết lô</h1>
            <h2 className="text-gray-800 text-sm md:text-base">
              <span className="font-medium">Chi phí: </span>
              <span className=''>{plot.price.toLocaleString('en-US')}</span>
              <img
                src={logoCoin}
                alt=""
                className="inline-block h-5 w-5 object-contain ml-1 mb-1"
              />
            </h2>
          </div>
          <div className="flex flex-row gap-2 px-4">
            {/* Cột 1 */}
            <div className="w-1/2">
              <p>
                <span className="font-medium">Mã lô : </span>
                {plot.plot_number}
              </p>
              <p>
                <span className="font-medium">Chiều rộng : </span>
                {plot.width} m
              </p>
              <p>
                <span className="font-medium">Chiều dài : </span>
                {plot.length} m
              </p>
              <p>
                <span className="font-medium">Diện tích : </span>
                {plot.area} m&sup2;
              </p>
            </div>

            {/* Cột 2 */}
            <div className="w-1/2">
              <p>
                <span className="font-medium">Status : </span>
                {plot.status}
              </p>
              <p>
                <span className="font-medium">Ph : </span>
                {plot.ph}
              </p>
              <p>
                <span className="font-medium">Độ ẩm : </span>
                {plot.humidity}%
              </p>
              <p>
                <span className="font-medium">Nhiệt độ : </span>
                {plot.temperature}°C
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 p-4">
            <Button
              type="default"
              onClick={registerPlot}
              className="bg-green-400 text-white w-full flex justify-center items-center"
            >
              <CheckOutlined />
            </Button>
            <Button
              type="default"
              onClick={close}
              className="bg-red-400 text-white w-full flex justify-center items-center"
            >
              <CloseOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default PlotDetail;
