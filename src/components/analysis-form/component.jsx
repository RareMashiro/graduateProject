import styles from './styles.module.scss';

export const AnalysisForm = () => {
    return (
        <>
            <form className={styles.form}>
                <label htmlFor='text' className={styles.label}>Результаты разбора</label>
                <textarea placeholder='Пока ничего' className={styles.textArea}>
                    {/* Съешь - глагол 92.5%, совершенный_вид 80%, переходный 72.5%, 2_лицо 87.5%, будущее_время 90%, изъявительное 75%, действительное 82.5%; 
                    же - частица 50%; еще - наречие 50%; этих - местоимение 95%, множественное_число 76.6%, родительный_падеж 82.5%; мягких - прилагательное 95%, 
                    качественное 76.6%, множественное_число 87.5%, родительный_падеж 77.5%; французских - прилагательное 85%, множественное_число 90%, родительный_падеж 83.3%; 
                    булок - существительное 97.5%, женский_род 87.5%, множественное_число 90%, неодушевленное 95%, родительный_падеж 73.5%; да - союз 50%; выпей - глагол 85%, 
                    2_лицо 86.6%, действительное 80%, единственное_число 86.6%, повелительное 85%, переходный 76.6%, совершенный_вид 82.5%; чаю - существительное 100%, 
                    родительный_падеж 72.5%, единственное_число 92.5%, мужской_род 90%, неодушевленное 83.3%; */}
                </textarea>
            </form>
        </>
    )
}