import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Landing from './view/Landing/Landing';




const router = createBrowserRouter([
  {
    path: "/", element: <Landing />, children: [{
      path: "/home", element: <Landing />
    }]
  }
])
function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
