
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <footer >
        <Footer/>
      </footer>
    </>
  );
}

export default App;
