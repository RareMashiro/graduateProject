import { CheckItemContainer } from '../check-item/container';
import styles from './styles.module.scss';

const arr = [
    {
        date: '27/05/2024 15:48',
        one: '',
        two: 'говор',
        three: 'и',
        four: 'ть',

    },
    {
        date: '27/05/2024 16:36',
        one: 'пере',
        two: 'кле',
        three: 'ива',
        four: 'ть',

    }
];

export const CheckForm = () => {
    return (
        <div className={styles.checkArea}>
            <div className={styles.field}>
                <ul className={styles.list}>
                    {arr.map((item, id) => {
                        return <CheckItemContainer key={id}>{item}</CheckItemContainer>
                    })}
                    
                </ul>
            </div>
        </div>
    )
}