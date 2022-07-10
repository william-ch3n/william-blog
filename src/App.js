import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftBanner from './components/LeftBanner';
import RightBanner from './components/RightBanner';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Header />
      <LeftBanner />
      <RightBanner />
      {/* <Home /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
