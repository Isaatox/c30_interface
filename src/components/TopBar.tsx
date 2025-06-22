import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

import Box from './Box';

import { CiLight } from 'react-icons/ci';
import { FaPerson } from 'react-icons/fa6';
import { FaBatteryThreeQuarters } from 'react-icons/fa';
import { MdPowerSettingsNew } from 'react-icons/md';

// Configurer Day.js en français
dayjs.locale('fr');

export default function TopBar() {
  const [now, setNow] = useState(dayjs());
  const [seconds, setSeconds] = useState(0);
  const [isOn, setIsOn] = useState(true);

  // Mettre à jour l'heure actuelle chaque seconde
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format minuterie MM:SS
  const formattedTime = `${String(Math.floor(seconds / 60)).padStart(
    2,
    '0'
  )}:${String(seconds % 60).padStart(2, '0')}`;

  // Bouton central si éteint
  if (!isOn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <button
          onClick={() => setIsOn(true)}
          className="px-8 py-4 bg-green-600 text-white text-2xl rounded-lg hover:bg-green-700 transition-colors"
        >
          ALLUMER
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between bg-black text-white p-2 text-sm font-mono">
      {/* Left */}
      <div className="flex items-center gap-4">
        <Box>
          <CiLight className="w-10 h-10" />
        </Box>
        <Box className="flex flex-col items-center">
          <span>{now.format('DD/MM/YY')}</span>
          <span>{now.format('HH:mm')}</span>
        </Box>
        <Box>{formattedTime}</Box>
      </div>

      {/* Center */}
      <div className="flex-1 text-center">
        <span className="text-lg">ICI TEXTE</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <Box className="flex flex-col items-center !p-2">
          <FaPerson className="w-10 h-10" />
          <span>Adulte</span>
        </Box>
        <Box>
          <FaBatteryThreeQuarters className="w-10 h-10 rotate-180" />
        </Box>
        <button
          onClick={() => setIsOn(false)}
          className="
    group relative flex items-center rounded-md font-bold text-white transition
    focus:outline-none focus:ring-2 focus:ring-yellow-400
  "
        >
          <Box
            className=" !p-2
      bg-yellow-600 flex flex-col items-center justify-center
      group-hover:bg-yellow-500 group-active:scale-95 transition-all
    "
          >
            <MdPowerSettingsNew className="w-10 h-10" />
            <span className="text-sm">ON</span>
          </Box>
        </button>
      </div>
    </div>
  );
}
