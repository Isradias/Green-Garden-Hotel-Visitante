import { Link } from 'react-router-dom';

function Scroll({ to, children }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default Scroll;