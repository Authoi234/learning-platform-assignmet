import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Main from './components/layout/Main/Main';
import Home from './components/Home/Home';
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
          element: <div></div>,
          loader: () => fetch('http://localhost:5000/courses')
        },
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
