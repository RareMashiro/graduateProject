import { Button } from '../button/component';
import styles from './styles.module.scss';

export const CheckItem = ({children}) => {
    const { date, one, two, three, four } = children;
    
    return (
        <li className={styles.item}>
            <div className={styles.itemBody}>
                <p>Время запроса: {date}</p>
                <div className={styles.line}></div>
                <div className={styles.data}>
                    <span className={styles.info}>Данные:</span>
                    <div className={styles.content}>
                        <p>Приставка = {one ? one : <b>отсутствует</b>}</p>
                        <p>Корень = {two ? two : <b>отсутствует</b>}</p>
                        <p>Суффикс = {three ? three : <b>отсутствует</b>}</p>
                        <p>Окончание = {four ? four : <b>отсутствует</b>}</p>
                    </div>
                    <div className={styles.nav}>
                        <div><Button title='Принять' type='database'/></div>
                        <div><Button title='Отклонить' type='check'/></div>
                    </div>
                </div>
            </div>
        </li>
    )
}