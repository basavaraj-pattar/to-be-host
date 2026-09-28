import { useEffect, useRef, useState } from 'react';

export default function CursorBlob() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  // Position references for silky inertia easing
  const mousePos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if device uses touch or coarse pointer
    const checkTouch = () => {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      return isCoarse || hasTouch;
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], label, .interactive-target');
        setIsHovering(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Silky inertia easing animation loop (LERP factor 0.09 for ultra-smooth fluid drift)
    const render = () => {
      const ease = 0.092;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-500 ease-out"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Soft, ambient orange-red radial glow follower with silky inertia easing */}
      <div
        ref={followerRef}
        className={`absolute top-0 left-0 rounded-full will-change-transform transition-[width,height,opacity] duration-300 ease-out ${
          isHovering
            ? 'w-[420px] h-[420px] opacity-45'
            : 'w-[320px] h-[320px] opacity-28'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(255, 65, 0, 0.42) 0%, rgba(255, 85, 10, 0.24) 32%, rgba(255, 120, 30, 0.09) 62%, transparent 78%)',
          filter: 'blur(36px)',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Crisp focal point tracking mouse with subtle warm intensity */}
      <div
        ref={coreRef}
        className={`absolute top-0 left-0 rounded-full will-change-transform transition-all duration-150 ease-out ${
          isHovering ? 'w-5 h-5 opacity-40 scale-125' : 'w-3 h-3 opacity-25 scale-100'
        }`}
        style={{
          backgroundColor: '#FF4D00',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
}
