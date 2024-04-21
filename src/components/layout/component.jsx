import { CustomizeContainer } from "../customize/container"
import { ParsingContainer } from "../parsing/container"
import styles from './styles.module.scss';

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <ParsingContainer />
            <CustomizeContainer />
        </div>
    )
}