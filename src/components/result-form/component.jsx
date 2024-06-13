import styles from './styles.module.scss';

export const ResultForm = () => {
    return (
        <>
            <form className={styles.form}>
                <label htmlFor='text' className={styles.label}>Информационное окно</label>
                <textarea 
                    placeholder='Пока ничего' 
                    // value='Составные части слова: Приставка="", Корень="говор", Суффикс="и", Окончание="ть"; Данные на модерации...'
                    value='Результаты поиска: Приставка="пере", Корень="кле", Суффикс="ива", Окончание="ть"'
                    className={styles.textArea}
                >

                </textarea>
            </form>  
        </>
    )
}