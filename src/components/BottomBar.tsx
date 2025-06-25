import { FaCamera, FaHandHoldingMedical, FaHeartbeat, FaHome } from "react-icons/fa";
import { RiFileListLine } from "react-icons/ri";

export default function BottomBar() {
    return (
    <div className="flex items-center justify-between gap-2 bg-black text-white p-2 text-sm font-mono">
        <div className="flex flex-row items-center justify-center w-full p-4 gap-2 bg-blue-800">
            <FaHeartbeat className="w-10 h-10" />
            <p className="text-lg">ECG 12D</p>
        </div>
        <div className="flex flex-row items-center p-4 justify-center w-full gap-2 bg-blue-800">
            <RiFileListLine className="w-10 h-10" />
            <p className="text-lg">Evènement</p>
        </div>
        <div className="flex flex-row items-center p-4 justify-center w-full gap-2 bg-blue-800">
            <FaCamera className="w-10 h-10" />
            <p className="text-lg">Capture</p>
        </div>
        <div className="flex flex-row items-center p-4 justify-center w-full gap-2 bg-blue-800">
            <FaHeartbeat className="w-10 h-10" />
            <p className="text-lg">DSA</p>
        </div>
        <div className="flex flex-row items-center p-4 justify-center w-full gap-2 bg-blue-800">
            <FaHandHoldingMedical className="w-10 h-10" />
            <p className="text-lg">Démar.</p>
        </div>
        <div className="flex flex-row items-center p-4 justify-center w-full gap-2 bg-blue-800">
            <FaHome className="w-10 h-10" />
            <p className="text-lg">Menu</p>
        </div>
    </div>
    )
}