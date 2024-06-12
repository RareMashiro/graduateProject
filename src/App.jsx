import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DataBasePageContainer } from "./pages/database-page/container";
import { ParsingPageContainer } from "./pages/parsing-page/container";
import { LoginPageContainer } from "./pages/login-page/container";
import { CheckPageContainer } from "./pages/check-page/container";
import { HomePageContainer } from "./pages/home-page/container";
import { ContentContainer } from "./components/content/container";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ContentContainer />,
        children: [
            {
                path: "home",
                element: <HomePageContainer />
            },
            {
                path: "parsing",
                element: <ParsingPageContainer />
            },
            {
                path: "database",
                element: <DataBasePageContainer />
            },
            {
                path: "login",
                element: <LoginPageContainer />
            },
            {
                path: "check",
                element: <CheckPageContainer />
            },
            
        ]
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
