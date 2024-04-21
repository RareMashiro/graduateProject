import styles from './styles.module.scss';

export const Button = ({title, type}) => {
    return (
        <button className={styles[type]}>{title}</button>
    )
}