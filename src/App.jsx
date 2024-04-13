import { FooterContainer } from "./components/footer/container";
import { HeaderContainer } from "./components/header/container";
import { LayoutContainer } from "./components/layout/container";

export const App = () => {
    return (
        <>
            <HeaderContainer />
            <LayoutContainer />
            <FooterContainer />
        </>
    )
}