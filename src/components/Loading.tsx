import { memo } from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse';
  message?: string;
  fullScreen?: boolean;
}

const Loading = memo(({ 
  size = 'md', 
  variant = 'spinner', 
  message = 'Loading Film...', 
  fullScreen = false 
}: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 h-screen' 
    : 'flex items-center justify-center p-4';

  const renderSpinner = () => (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <div className="h-full w-full rounded-full border-4 border-white/20 border-t-white"></div>
    </div>
  );

  const renderDots = () => (
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} 
                     bg-white rounded-full animate-bounce`}
          style={{ animationDelay: `${index * 0.15}s` }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={`${sizeClasses[size]} bg-white/20 rounded-full animate-pulse`}>
      <div className="h-full w-full bg-white/40 rounded-full animate-ping"></div>
    </div>
  );

  const renderLoadingVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center justify-center space-y-4 h-screen">
        {/* Logo (if fullscreen) */}
        {fullScreen && (
          <img
            src="/armonia_a_logo.png"
            alt="Armonia A"
            className="w-32 lg:w-48 mb-4 animate-pulse"
          />
        )}
        
        {/* Loading animation */}
        {renderLoadingVariant()}
        
        {/* Loading message */}
        {message && (
          <p className={`text-white text-center ${
            size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'
          } animate-pulse`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
