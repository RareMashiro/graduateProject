import { Outlet } from "react-router-dom"
import { FooterContainer } from "../footer/container"
import { HeaderContainer } from "../header/container"

export const Content = () => {
    return (
        <>
            <HeaderContainer />
            <Outlet />
            <FooterContainer />
        </>
    )
}