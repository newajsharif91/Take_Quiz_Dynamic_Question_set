import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Quizes from './components/Quizes/Quizes';
import Chart from './components/Chart/Chart';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/quizes/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quizes></Quizes>,
        },
        {
          path: "/chart",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Chart></Chart>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "*",
          element: (
            <div className="mx-auto m-20">
              <h1>
                <strong className="text-4xl">This Route Not Found</strong>{" "}
                <br />
                <strong className="text-4xl">
                  You click Wrong Route.Please selete Right Route
                </strong>
              </h1>
            </div>
          ),
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
