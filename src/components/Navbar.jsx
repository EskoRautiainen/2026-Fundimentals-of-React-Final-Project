import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  color: isActive ? 'yellow' : 'white',
  margin: '10px',
  textDecoration: 'none'
});

function Navbar() {
  return (
    <nav className='navBar'>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/add" style={linkStyle}>Add</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contacts</NavLink>
    </nav>
  );
}

export default Navbar