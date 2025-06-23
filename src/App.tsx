import Constant from './components/Constant';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-600 text-white">
      <TopBar />

      <div className="flex-1 flex flex-row w-full">
        <div className="w-2/3 flex flex-col">
          <Constant title="Pouls" titleInformation="b/min" max={120} min={50} />
          <Constant title="PNI" titleInformation="mmHg" max={160} min={90} divClass='bg-gray-500' titleClass='!bg-gray-800' asMultipleConstant max2={90} min2={50}/>
        </div>

        <div className="w-1/3 flex flex-col">
          <Constant title="SpO₂" titleInformation="%" max={100} min={92} />
          <Constant title="Pouls" titleInformation="b/min" max={120} min={50} />
          <Constant title="Temp" titleInformation="°C" max={37.8} min={35.0} divClass='bg-blue-800' titleClass='bg-blue-950' />
        </div>
      </div>
    </div>
  );
}
