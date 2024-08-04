import App from "../App"
import HomePage from ""
import ErrorPage from "../errorPage"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/> 
    },
    {
        path: "homepage",
        element: <HomePage/>
    }
]