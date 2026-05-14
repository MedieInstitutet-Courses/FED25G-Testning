import { NavLink } from 'react-router-dom';
import '../../assets/css/navbar.css';

export const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='container'>
          <ul className='menu'>
            <li className='logo'>
              <a className='sub-title' href='../../index.html'>
                <span>
                  <i className='fa-solid fa-cars'></i>
                </span>{' '}
                Westcoast Cars
              </a>
            </li>
            <li className='toggle'>
              <input className='menu-btn' type='checkbox' id='menu-btn' />
              <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
              </label>
            </li>
            <li className='menu-item'>
              <NavLink to='/'>Start</NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/contact'>Kontakta Oss</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
