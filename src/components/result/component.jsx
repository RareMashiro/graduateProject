import { ResultFormContainer } from '../result-form/container';
import styles from './styles.module.scss';

export const Result = () => {
    return (
        <div className={styles.result}>
            <h2 className={styles.header}><div>Результат</div></h2>
            <ResultFormContainer />
        </div>
    )
}