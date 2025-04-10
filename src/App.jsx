
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';




function App() {
const log = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
  
    <Header></Header>
   {!log && <Auth></Auth>}
   {log && <UserProfile/>}
    <Counter />
    </>
  );
}

export default App;