import Login from "./Login";
import SubjectList from "./SubjectList";
import Admin from "./Admin";
import AdminStudent from "./AdminStudent";
import AddStudent from "./AddStudent";
import NotFound from "./NotFound";
import AdminProfessors from "./AdminProfessors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProf from "./AddProf";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
      errorElement: <NotFound/>
    },
    {
      path: "/admin",
      element: <Admin/>
    },
    {
      path: "/courses",
      element: <SubjectList/>
    },
    {
      path: "/adminStudent",
      element: <AdminStudent/>
    },
    {
      path: "/addStudent",
      element: <AddStudent/>
    },
    {
      path: "/adminProfessors",
      element: <AdminProfessors/>
    },
    {
      path: "/addProfessors",
      element: <AddProf/>
    }
  ]);

  return(
    <RouterProvider router={router}/>    
  )
}

export default App
