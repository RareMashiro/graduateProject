import { FooterContainer } from "../../components/footer/container"
import { HeaderContainer } from "../../components/header/container"
import { LayoutContainer } from "../../components/layout/container"
import styles from './styles.module.scss';

export const ProjectPage = () => {
    return (
        <div className={styles.page}>
            <HeaderContainer />
            <LayoutContainer />
            <FooterContainer />
        </div>
    )
}