import { Navigate } from "react-router-dom";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";

export default [
    {
        path: '/home',
        element: <Home />,
        children: []
    },
    {
        path: '/about',
        element: <About />,
        children: []
    },
    {
        path: '/', //需要设定默认路径
        element: <Navigate to="/home"/>
    }
]
