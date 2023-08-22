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
import BarChart from "./chartComponents/BarChart";
import { useEffect, useState } from "react";
import PieChart from "./chartComponents/PieChart";






function App() {
 
  const [mydata, setMydata] = useState([]);
  const [added,setAdded]=useState(true);
  useEffect(() => {
    fetch("http://localhost:3100/myData")
      .then((response) => response.json())
      .then((data) => setMydata(data));
  },[added]);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home mydata={mydata} setMydata={setMydata}/>} /> 
        {/* index means the main root page / */}
        <Route path="create" element={<Create setAdded={setAdded} added={added} />}/>
       <Route path="/bar" element={<BarChart mydata={mydata}/>}/>
       <Route path="/pie" element={<PieChart mydata={mydata}/>}/>
        <Route path="*" element={<NOtFound/>}/> 
        {/* * means any other routes like not reated pages  */}
      </Route>
    )
  );
  return (
   
    <RouterProvider router={router} />
    
    
  );
}

export default App;
