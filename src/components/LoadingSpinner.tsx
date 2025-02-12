interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  return (
    <div className={`w-full h-full flex justify-center items-center ${className}`}>
      <div
        className={`
          animate-spin
          rounded-full
          border-2
          border-primary-light/20
          dark:border-primary-dark/20
          border-b-primary-light
          dark:border-b-primary-dark
          ${sizeClasses[size]}
        `}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
