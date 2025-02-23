import React, { useEffect, useRef, ReactNode } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltComponentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any; // Bạn có thể thay đổi kiểu này nếu biết chính xác cấu trúc của options
  children: ReactNode;
}

const TiltComponent: React.FC<TiltComponentProps> = ({ options, children }) => {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }

    return () => {
      if (tiltRef.current) {
        // Type Assertion: cho TypeScript biết rằng tiltRef.current là một thể hiện của VanillaTilt
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef} className="tilt">
      {children}
    </div>
  );
};

export default TiltComponent;
