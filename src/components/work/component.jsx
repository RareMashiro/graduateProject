import { ResultContainer } from "../result/container"
import { UsageContainer } from "../usage/container"
import styles from './styles.module.scss';

export const Work = () => {
    return (
        <div className={styles.work}>
            <UsageContainer />
            <ResultContainer />
        </div>
    )
}