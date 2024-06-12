import { AnalysisFormContainer } from '../analysis-form/container';
import styles from './styles.module.scss';

export const Analysis = () => {
    return (
        <div className={styles.analysis}>
            <h2 className={styles.header}><div>Анализ</div></h2>
            <AnalysisFormContainer />
        </div>
    )
}