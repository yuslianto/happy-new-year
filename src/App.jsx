import { useState } from 'react';
import Countdown from 'react-countdown';
import Particles from 'react-particles';
import { Typewriter } from 'react-simple-typewriter';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!"]);
  const particleInit = async (main) => {
    await loadFireworksPreset(main);
  };

  function timeLeft() {
    const newYearDate = new Date('January 1, 2024 17:45:00').getTime();
    const newDate = new Date().getTime();
    const remainingTiume = newYearDate - newDate;
    return remainingTiume;
  }

  return (
    <>
      <Particles
        init={particleInit}
        options={{
          preset: 'fireworks',
        }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen min-w-screen">
        <span className="text-5xl font-bold text-white z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={' 🎊'}
            cursor
          />
        </span>
        <div className="mt-10 z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() - timeLeft()}
            onComplete={() => setNewYearMessage(["Welcome 2024 Happy New Year's!"])}
          />
        </div>
      </div>
    </>
  );
}

export default App;
