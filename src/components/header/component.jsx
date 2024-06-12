import { NavLink } from 'react-router-dom';
import { Button } from '../button/component';
import styles from './styles.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <span className={styles.headTitle}>Morphologic</span>
            <div className={styles.headItems}>
                <div className={styles.headNav}>
                    <NavLink to={'/home'}>
                        <Button title='HOME' type='home'/>
                    </NavLink>

                    <NavLink to={'/parsing'}>
                        <Button title='PARSING' type='parsing'/>
                    </NavLink>
                    
                    <NavLink to={'/database'}>
                        <Button title='DATABASE' type='database'/>
                    </NavLink>
                </div>
                <div>
                    <Button title='LOGIN' type='login'/>
                </div>
            </div>
        </div>
    )
}