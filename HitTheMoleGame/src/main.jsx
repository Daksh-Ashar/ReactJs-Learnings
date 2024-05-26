import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HomeScreen } from './views/HomeScreen.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import { PlayGround } from './views/PlayGround.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/playground" element={<PlayGround />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
