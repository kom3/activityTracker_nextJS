import styles from './styles.module.css'


export default function Activity({ status, name }) {
    return <div className={`${styles.activity_wrpr}`}>
        <div className={`${styles.activity_item} activity_${status}`}>
            {name}
        </div>
    </div>
}