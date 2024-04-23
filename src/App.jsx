import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DataBasePageContainer } from "./pages/database-page/container";
import { ParsingPageContainer } from "./pages/parsing-page/container";
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
            }
        ]
    }
]);

export const App = () => {
    return (
        <RouterProvider router={router} />
    )
}
