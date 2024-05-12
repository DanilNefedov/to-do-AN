import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import App from "./App";
import { EditPage } from "./component/edit-page/EditPage";
import { Errors } from "./component/tools/Errors";
import { store } from "./redux/store";
import { fetchNotes } from "./redux/slices/mainNotesSlice";
import { fetchEditNotes } from "./redux/slices/editNotesSLice";

export async function loaderEdit({ params }:{params:any}) {

  const data = () => store.dispatch(fetchEditNotes(params.id))
  return data()
}



export const router = createBrowserRouter([
    {
      element: <Layout></Layout>,
      errorElement:<Errors props={'Try reloading the page or checking your connection. You may also have entered the wrong link.'}></Errors>,
      children:[
        {
          path:'/',
          element:<App></App>,
          errorElement:<Errors props={'Try reloading the page or checking the link.'}></Errors>,
          loader:() => store.dispatch(fetchNotes('/notes'))
        },
        {
          path:'edit/:id',
          errorElement:<Errors props={"Try reloading the page. This note may not exist."}></Errors>,
          element:<EditPage></EditPage>,
          loader:loaderEdit 
        }
      ]
    },
    {
      element:<Errors props={'Try reloading the page or checking the link.'}></Errors>,
      path:'*'
    }
]);