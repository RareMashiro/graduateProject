import { CheckFormContainer } from '../check-form/container';
import styles from './styles.module.scss';

export const Check = () => {
    return (
        <div className={styles.check}>
            <h2 className={styles.header}><div>Валидация запросов</div></h2>
            <CheckFormContainer />
        </div>
    )
}