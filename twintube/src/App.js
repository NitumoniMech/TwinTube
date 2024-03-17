
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { Provider } from 'react-redux';
import MenuContainer from './components/MenuContainer';
import WatchPage from './components/WatchPage';


function App() {

  const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MenuContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }])
  return (
    <Provider store={store}>
    <div className="text-xl align-middle">
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
