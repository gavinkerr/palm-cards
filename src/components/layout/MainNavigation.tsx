
   
import { NavLink } from 'react-router-dom';


const MainNavigation = () => {
  return (
    <header>
      <div>Great Quotes</div>
      <nav>
        <ul>
          <li>
            <NavLink to='/pick-test' className={navData => navData.isActive ? 'active' : '' }>
              Test yourself
            </NavLink>
          </li>
          <li>
            <NavLink to='/edit-sets' className={navData => navData.isActive ? 'active' : '' }>
              Edit Card Sets
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;