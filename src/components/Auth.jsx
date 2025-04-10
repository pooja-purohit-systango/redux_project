
import { useDispatch } from "react-redux";
import { authActions } from "../store";
const Auth = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(authActions.login())
    }
  return (
    <main >
      <section>
        <form>
          <div >
            <label htmlFor ='email'>Email : </label>
            <input type='email' id='email' />
          </div>
          <div >
            <label htmlFor ='password'>Password : </label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
