import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Main from './components/layout/Main/Main';
import Home from './components/Home/Home';
import Courses from './components/pages/Courses/Courses';
import SingleCourse from './components/pages/SingleCourse/SingleCourse';
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
          loader: () => fetch('https://learning-platform-server-assignment-vr5w8ixs0.vercel.app/courses')
        },
        {
          path: '/courses/:id',
          element: <SingleCourse></SingleCourse>,
          loader: ({params}) => fetch(` https://learning-platform-server-assignment-vr5w8ixs0.vercel.app/courses/${params.id}`)
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
