'use client';
import Wave from 'react-wavify';

export const WaveDivider = ({ fill = "#fcfcfc" }: { fill?: string }) => {
  return (
    <div className="relative w-full overflow-hidden leading-0 -mb-1 z-10 pointer-events-none -mt-16 sm:-mt-24 md:-mt-32">
      <Wave 
        fill={fill}
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 85,
          amplitude: 50, // High amplitude for big splash
          speed: 0.3,
          points: 4
        }}
        className="w-[calc(110%+1.3px)] h-[150px] sm:h-[180px] md:h-[220px]"
      />
    </div>
  );
};
