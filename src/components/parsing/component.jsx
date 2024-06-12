import { ParsingFormContainer } from '../parsing-form/container';
import styles from './styles.module.scss';

export const Parsing = () => {
    return (
        <div className={styles.parsing}>
            <h2 className={styles.header}><div>Разбор</div></h2>
            <ParsingFormContainer />
        </div>
    )
}