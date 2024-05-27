import PropTypes from "prop-types";

function Button({
  children,
  onClick,
  color = "blue",
  size = "md",
  className = "",
  ...props
}) {
  // Define the base classes for the button
  let baseClasses =
    "font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Define color classes
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-700 text-white",
    red: "bg-red-500 hover:bg-red-700 text-white",
    green: "bg-green-500 hover:bg-green-700 text-white",
    yellow: "bg-yellow-500 hover:bg-yellow-700 text-white",
    // Add more colors as needed
  };

  // Define size classes
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
    // Add more sizes as needed
  };

  // Combine base classes with color, size, and additional classes
  const classes = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${className}`;

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["blue", "red", "green", "yellow"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
