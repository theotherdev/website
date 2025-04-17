// src/components/Clock.jsx
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const options = {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    };

    const update = () => {
      try {
        const now = new Date();
        let timeString = now.toLocaleTimeString('en-US', options);
        timeString = timeString.replace(/\s*\(PKT\)/, '');
        setTime(timeString);
      } catch (e) {
        setTime('--:-- PKT');
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval); // clean up
  }, []);

  return <span className="clock-time min-w-[17ch] tabular-nums">{time}</span>;
}
