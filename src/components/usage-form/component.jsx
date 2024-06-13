import { Button } from '../button/component';
import styles from './styles.module.scss';

export const UsageForm = () => {
    return (
        <div className={styles.package}>
            <form className={styles.form}>
                <div className={styles.content}>
                    <label htmlFor="text" className={styles.labes}>Искать слово</label>
                    <input 
                        type="text" 
                        value='переклеивать' 
                        className={styles.input} 
                        placeholder='Пусто'>
                    </input>
                </div>
            </form>
            <Button title='Найти' type='login'></Button>
            <form className={styles.form}>
                <div className={styles.content}>
                    <label htmlFor="text" className={styles.labes}>Приставка</label>
                    <input 
                        type="text" 
                        // value='Съешь же еще этих мягких французских булок да выпей чаю' 
                        className={styles.input} 
                        placeholder='Пусто'>
                    </input>
                </div>
                <div className={styles.content}>
                    <label htmlFor="text" className={styles.labes}>Корень</label>
                    <input 
                        type="text" 
                        // value='говор' 
                        className={styles.input} 
                        placeholder='Пусто'>
                    </input>
                </div>
                <div className={styles.content}>
                    <label htmlFor="text" className={styles.labes}>Суффикс</label>
                    <input 
                        type="text" 
                        // value='и' 
                        className={styles.input} 
                        placeholder='Пусто'>
                    </input>
                </div>
                <div className={styles.content}>
                    <label htmlFor="text" className={styles.labes}>Окончание</label>
                    <input 
                        type="text" 
                        // value='ть' 
                        className={styles.input} 
                        placeholder='Пусто'>
                    </input>
                </div>
            </form>
            <Button title='Пополнить' type='check'></Button>
        </div>
    )
}