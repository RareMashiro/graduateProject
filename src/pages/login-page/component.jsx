import { LoginContainer } from '../../components/login/container';
import styles from './styles.module.scss';

export const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <LoginContainer />
        </div>
    )
}