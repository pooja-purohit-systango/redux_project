import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const log = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout()); 
  };

  return (
    <header>
      <h1>Redux Auth</h1>
      {log && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button> 
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
