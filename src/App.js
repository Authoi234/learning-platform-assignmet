import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Main from './components/layout/Main/Main';
import Home from './components/Home/Home';
import Courses from './components/pages/Courses/Courses';
import SingleCourseDetail from './components/pages/SingleCourseDetail/SingleCourseDetail';
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
          loader: () => fetch('http://localhost:5000/courses')
        },
        {
          path: '/courses/:id',
          element: <SingleCourseDetail></SingleCourseDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
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
