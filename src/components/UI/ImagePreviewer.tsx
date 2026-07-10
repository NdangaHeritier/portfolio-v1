import { ArrowPathIcon, MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { createPortal } from 'react-dom'; // Added for breaking out of parent positioning

// --- Context for Functional Trigger ---
interface PreviewContextType {
  openPreview: (src: string, alt?: string) => void;
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export const ImagePreviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [previewData, setPreviewData] = useState<{ src: string; alt?: string } | null>(null);

  const openPreview = (src: string, alt?: string) => {
    setPreviewData({ src, alt });
  };

  const closePreview = () => setPreviewData(null);

  return (
    <PreviewContext.Provider value={{ openPreview }}>
      {children}
      {previewData && (
        <ImagePreviewModal
          src={previewData.src}
          alt={previewData.alt}
          onClose={closePreview}
        />
      )}
    </PreviewContext.Provider>
  );
};

export const useImagePreview = () => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error('useImagePreview must be used within an ImagePreviewProvider');
  }
  return context;
};

// --- Reusable Component Way ---
interface ImagePreviewerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const ImagePreviewer: React.FC<ImagePreviewerProps> = ({ src, alt, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer transition-opacity hover:opacity-70 ${className || ''}`}
        onClick={() => setIsOpen(true)}
        {...props}
      />
      {isOpen && src && (
        <ImagePreviewModal src={src} alt={alt} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

// --- Shared Modal Overlay ---
interface ModalProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const ImagePreviewModal: React.FC<ModalProps> = ({ src, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);
  const offsetRef = useRef(offset);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    offsetRef.current = offset;
  }, [offset]);

  const clampOffset = (nextOffset: { x: number; y: number }) => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image || scale <= 1) {
      return { x: 0, y: 0 };
    }

    const containerRect = container.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();
    const viewportLimitX = Math.max(window.innerWidth, containerRect.width, imageRect.width);
    const viewportLimitY = Math.max(window.innerHeight, containerRect.height, imageRect.height);

    return {
      x: Math.min(viewportLimitX, Math.max(-viewportLimitX, nextOffset.x)),
      y: Math.min(viewportLimitY, Math.max(-viewportLimitY, nextOffset.y)),
    };
  };

  useEffect(() => {
    if (scale <= 1) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    setOffset((prev) => clampOffset(prev));
  }, [scale]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 8));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => {
      const nextScale = Math.max(prev - 0.25, 1);
      if (nextScale === 1) {
        setOffset({ x: 0, y: 0 });
      }
      return nextScale;
    });
  };

  const handleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRotation((prev) => (prev + 90) % 360);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || scale <= 1) return;

    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - offsetRef.current.x, y: e.clientY - offsetRef.current.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStartRef.current || scale <= 1) return;

    e.preventDefault();
    e.stopPropagation();

    const nextOffset = {
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    };

    setOffset(clampOffset(nextOffset));
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    e.stopPropagation();
    setIsDragging(false);
    dragStartRef.current = null;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (scale >= 4) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    } else {
      setScale(4);
      setOffset({ x: 0, y: 0 });
    }
  };

  // Wrapped inside createPortal to append it to document.body
  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm select-none"
      onClick={onClose}
    >
      {/* Controls Header */}
      <div className="absolute top-4 right-4 flex items-center gap-3 z-10000 bg-gray-600/40 border border-gray-500/50 p-3 rounded-full backdrop-blur-md">
        <button
          onClick={handleZoomIn}
          className="secondary-icon"
          title="Zoom In"
        >
          <PlusIcon />
        </button>
        <button
          onClick={handleZoomOut}
          className="secondary-icon"
          title="Zoom Out"
        >
          <MinusIcon />
        </button>
        <button
          onClick={handleRotate}
          className="secondary-icon"
          title="Rotate"
        >
          <ArrowPathIcon />
        </button>
        <button
          onClick={onClose}
          className="secondary-icon"
          title="Close (Esc)"
        >
          <XMarkIcon />
        </button>
      </div>

      {/* Image Container */}
      <div
        ref={containerRef}
        className="max-w-4xl max-h-[80vh] p-4 transition-transform duration-200 ease-out overflow-hidden touch-none"
        style={{
          transform: `scale(${scale}) rotate(${rotation}deg)`,
          transformOrigin: 'center center',
          cursor: isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'default',
        }}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className="w-full h-full"
          style={{
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <img
            ref={imageRef}
            src={src}
            alt={alt || 'Preview'}
            className="max-w-full max-h-[80vh] object-contain rounded block"
            draggable={false}
          />
        </div>
      </div>
    </div>,
    document.body // Target container
  );
};