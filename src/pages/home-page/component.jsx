import styles from './styles.module.scss';

export const HomePage = () => {
    return (
        <div className={styles.mainPage}>
            <div className={styles.description}>
                <h1 className={styles.headerOne}><div>Морфологический разбор</div></h1>
                <div className={styles.logoBorder}><img className={styles.logo} src='../../images/morphologic.jpg' alt='Морфологический разбор'/></div>
                <div className={styles.textContainer}>
                    <p className={styles.textOne}>
                        Приложение представляет собой систему
                        для проведения морфологического разбора текста,
                        работающее на основе миварной экспертной системы
                        под управлением логических правил. Пользователь имеет 
                        возможности редактирования базы данных путем изменения
                        информации об имеющихся словах, а также добавления 
                        новых. Администрирование системы возможно при авторизации 
                        и подразумевает утверждение внесенных в базу данных изменений.
                    </p>
                </div>
            </div>
            <div className={styles.guide}>
                <h1 className={styles.headerTwo}><div>Как использовать</div></h1>
                <div className={styles.textContainer}>
                    <p className={styles.textTwo}>
                        п
                    </p>
                </div>
            </div>
        </div>
    )
}