import { createBrowserRouter, useLoaderData } from "react-router-dom";
import { Layout } from "./layout";
import App from "./App";
import { EditPage } from "./component/edit-page/EditPage";
import { Errors } from "./component/tools/Errors";
import { store } from "./redux/store";
import { fetchNotes } from "./redux/slices/mainNotesSlice";
import { Navigation } from "./component/navigation/Navigation";
import { fetchEditNotes } from "./redux/slices/editNotesSLice";

export async function loaderEdit({ params }:{params:any}) {
  // console.log(params)

  const data = () => store.dispatch(fetchEditNotes(params.id))
  // console.log(await data())
  return data()
}



export const router = createBrowserRouter([
    {
      element: <Layout></Layout>,
      errorElement:<Errors></Errors>,
      children:[
        {
          path:'/',
          element:<App></App>,
          errorElement:<Errors></Errors>,
          loader:() => store.dispatch(fetchNotes('/notes'))
        },
        {
          path:'edit/:id',
          element:<EditPage></EditPage>,
          loader:loaderEdit 
        }
      ]
    },
]);