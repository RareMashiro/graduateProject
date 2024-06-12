import { Button } from '../button/component';
import styles from './styles.module.scss';

export const ParsingForm = () => {
    return (
        <>
            <form className={styles.form}>
                <label htmlFor="text" className={styles.labes}>Введите строку</label>
                <input 
                    type="text" 
                    value='Съешь же еще этих мягких французских булок да выпей чаю' 
                    className={styles.input} 
                    placeholder='Начните набирать здесь...'>
                </input>
            </form>
            <div className={styles.nav}>
                <Button title={'Провести разбор'} type='login'></Button>
                <Button title='Очистить' type='check'></Button>
            </div>
        </>
    )
}