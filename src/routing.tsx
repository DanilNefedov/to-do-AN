import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import App from "./App";
import { EditPage } from "./component/edit-page/EditPage";
import { Errors } from "./component/tools/Errors";
import { store } from "./redux/store";
import { fetchNotes } from "./redux/slices/main-notes";




export const router = createBrowserRouter([
    {
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element:<App></App>,
          errorElement:<Errors></Errors>,
          loader:() => store.dispatch(fetchNotes('/notes'))
        },
        {
          path:'edit',
          element:<EditPage></EditPage>,
          // loader:Loading
        }
      ]
    },
]);