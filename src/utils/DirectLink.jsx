import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function DirectLink({ children, to, onClick }) {
  const navigate = useNavigate();
  const className =
    "text-base m-4 text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

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
  to: PropTypes.node,
  onClick: PropTypes.node,
};

export default DirectLink;
