import { UsageFormContainer } from '../usage-form/container';
import styles from './styles.module.scss';

export const Usage = () => {
    return (
        <div className={styles.usage}>
            <h2 className={styles.header}><div>Взаимодействие</div></h2>
            <UsageFormContainer />
        </div>
    )
}