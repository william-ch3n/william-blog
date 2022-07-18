import { Navigate } from "react-router-dom";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Album from "../../pages/Album/Album";
import Notes from "../../pages/Notes/Notes";

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
        path: '/album',
        element: <Album />,
        children: []
    },
    {
        path: '/notes',
        element: <Notes />,
        children: []
    },
    {
        path: '/', //需要设定默认路径
        element: <Navigate to="/home"/>
    }
]
