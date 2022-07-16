import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftBanner from './components/LeftBanner';
import RightBanner from './components/RightBanner';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { Provider } from 'react-redux';
import store from '../src/common/redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
      <Header />
      <LeftBanner />
      <RightBanner />
      <Home />
      {/* <About /> */}
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
