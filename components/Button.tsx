import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50";

  const variants = {
    primary:
      "bg-lime-700 text-white hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-500 shadow-md hover:shadow-lg",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 shadow-md hover:shadow-lg",
    outline:
      "bg-transparent border-2 border-lime-700 text-lime-700 hover:bg-lime-700/10 dark:border-lime-300 dark:text-lime-300 dark:hover:bg-lime-300/10",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const loadingState = isLoading ? "opacity-80 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${loadingState} ${className}`}
      disabled={isLoading || props.disabled}
      tabIndex={props.disabled ? -1 : 0}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};
