import Shop from "../Components/Shop";
import Home from "../Pages/Home";

export const Navigations = [
    { id: 1, name: 'Home', path: '/home', element: <Home/>, show: true, public: true, child: [] },
    { id: 2, name: 'Shop', path: '/shop', element: <Shop/>, show: true, public: true, child: [] },
    { id: 3, name: 'Plant Care', path: '/plant_Care', element: <div> Plant care </div>, show: true, public: true, child: [] },
    { id: 4, name: 'Blogs', path: '/blogs', element: <div>Blogs</div>, show: true, public: true, child: [] },
    { id: 6, name: 'Deafult Home', path: '/', element: <Home/>, show: false, public: true, child: [] },
] 