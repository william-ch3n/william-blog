import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LeftBanner from './components/LeftBanner';
import RightBanner from './components/RightBanner';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { Provider } from 'react-redux';
import store from '../src/common/redux/store';
import { useNavigate, useRoutes, Outlet } from 'react-router-dom'
import allRoutes from './common/router/allRoutes';

function App() {

  const BlogRoutes = useRoutes(allRoutes);


  return (
    <div>
      <Provider store={store}>
      <Header />
      <LeftBanner />
      <RightBanner />
      {/* 主要组件，通过allRoutes来控制展示那个组件 */}
      {BlogRoutes}
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
