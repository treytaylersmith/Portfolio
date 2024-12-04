
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'
import './App.css'
function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <main className="mx-3 flex-grow-1">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
