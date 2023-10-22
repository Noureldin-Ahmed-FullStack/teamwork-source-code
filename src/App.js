import React from 'react';
import logo from './logo.svg';
import './App.css';
import './MyCss/MyCustomStylesheet.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { RouterProvider, createHashRouter } from "react-router-dom"
import Layout from './components/Layout';
import Main from './components/Main';
import Parent from './components/Fatima/Parent';
import PassantParent from './components/Passant/PasParent/PassantParent';
import {TodoWrapper} from './components/MohamedHamdy/TodoWrapper';
// import Parent from './components/Passant/PasParent/PassantParent';


function App() {
  let Routes = createHashRouter([

    {
      path: "/", element: <Layout />, children: [
        { path: "", element: <Main /> },
        { path: "home", element: <Main /> },
        { path: "fatima", element: <Parent /> },
        { path: "Passant", element: <PassantParent /> },
        { path: "MOHAMED-HAMDY", element: <TodoWrapper /> },
        // { path: "home", element: <Main /> },
        // { path: "portfolio", element: <Portfolio /> },
        // { path: "about", element: <About /> },
        // { path: "contact", element: <Contact /> },
        { path: "*", element: <h2>404</h2> },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
