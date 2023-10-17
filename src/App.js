import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Main from './components/layout/Main/Main';
import Home from './components/Home/Home';
import Courses from './components/pages/Courses/Courses';
import SingleCourseDetail from './components/pages/SingleCourseDetail/SingleCourseDetail';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/pages/Checkout/Checkout';
import Blog from './components/pages/Blog/Blog';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch(' https://learning-platform-server-assignment-k0291lyyj.vercel.app/courses')
        },
        {
          path: '/courses/:id',
          element: <SingleCourseDetail></SingleCourseDetail>,
          loader: ({params}) => fetch(`https://learning-platform-server-assignment-k0291lyyj.vercel.app/courses/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params}) => fetch(`https://learning-platform-server-assignment-k0291lyyj.vercel.app/courses/${params.id}`)
        },
        {
          path: '*',
          element: <div className='text-5xl text-black fw-bolder d-flex align-items-center justify-content-center mt-52'>404. Not Found Anything</div>
        }
      ],
    },
  ]);
  return (
    // I Use Bootstrap, Tailwind, Daisyui, React Router Dom, React Icons in this project

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
