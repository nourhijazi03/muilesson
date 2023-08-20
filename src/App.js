import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import NOtFound from "./pages/NOtFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>} /> 
      {/* index means the main root page / */}
      <Route path="create" element={<Create/>}/>
      <Route path="*" element={<NOtFound/>}/> 
      {/* * means any other routes like not created pages  */}
    </Route>
  )
);


function App() {
 

  
  return (
   
    <RouterProvider router={router} />
    
    
  );
}

export default App;
