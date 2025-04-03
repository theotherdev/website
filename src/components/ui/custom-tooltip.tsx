'use client';
import { useState, useRef, useEffect } from 'react';

export const Tooltip = ({
  children,
  content,
  maxWidth = 400,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  maxWidth?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let top = triggerRect.bottom + window.scrollY + 8;
    let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

    // Viewport collision detection
    const buffer = 8;
    if (left < buffer) left = buffer;
    if (left + tooltipRect.width > window.innerWidth - buffer) {
      left = window.innerWidth - tooltipRect.width - buffer;
    }

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
      window.addEventListener('resize', calculatePosition);
      window.addEventListener('scroll', calculatePosition, true);
    }
    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculatePosition, true);
    };
  }, [isVisible]);

  return (
    <div 
      className="relative inline-block"
      ref={triggerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
        //   className="fixed z-[9999] pointer-events-none"
          style={{
            // top: `${position.top}px`,
            // left: `${position.left}px`,
            // maxWidth: `${maxWidth}px`,
          }}
        >
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-md shadow-lg border border-gray-700">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};