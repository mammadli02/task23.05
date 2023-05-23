import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";


export const ROUTES = [
    {
        path:'/',
        element: <MainRoot/>,
        children:[
            {
            path:'/',
            element: <Home/>
        },
            {
                path:'/models',
                element: <Home/>
            },
            
            {
                path:'/add-model',
                element: <Add/>
            },
            {
                path:'/models/:id',
                element: <Detail/>
            },
            {
                path:'/models/edit/:id',
                element: <Edit/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    }
]