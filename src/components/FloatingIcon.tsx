interface FloatingIconProps {
  src: string;
  alt: string;
  index: number;
  className?: string;
}

export function FloatingIcon({ src, alt, index, className = "" }: FloatingIconProps) {
  const animationDelay = index * 150;
  
  return (
    <div 
      className={`size-9 transform hover:scale-110 hover:brightness-110 transition-all duration-500 ease-out ${className}`}
      style={{
        animation: `float${index} 4s ease-in-out infinite ${animationDelay}ms`,
        opacity: 0.85
      }}
    >
      <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
        <div className="overflow-hidden rounded-full">
          <img 
            width={24} 
            height={24} 
            alt={alt} 
            src={src} 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}