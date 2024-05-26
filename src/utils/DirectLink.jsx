import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DirectLink({ children, to, onClick }) {
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

DirectLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
  onClick: PropTypes.node,
};

export default DirectLink;
