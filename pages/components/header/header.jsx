import styles from "./styles.module.css";

export default function Header() {
    return <div className={styles.header}>
        <div className={styles.menu}>
            <div className={styles.burger_bgrnd}>
                <div className={styles.burger}>
                    <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.2143 18H0.785714C0.57733 18 0.37748 18.079 0.23013 18.2197C0.0827804 18.3603 0 18.5511 0 18.75L0 20.25C0 20.4489 0.0827804 20.6397 0.23013 20.7803C0.37748 20.921 0.57733 21 0.785714 21H21.2143C21.4227 21 21.6225 20.921 21.7699 20.7803C21.9172 20.6397 22 20.4489 22 20.25V18.75C22 18.5511 21.9172 18.3603 21.7699 18.2197C21.6225 18.079 21.4227 18 21.2143 18ZM21.2143 12H0.785714C0.57733 12 0.37748 12.079 0.23013 12.2197C0.0827804 12.3603 0 12.5511 0 12.75L0 14.25C0 14.4489 0.0827804 14.6397 0.23013 14.7803C0.37748 14.921 0.57733 15 0.785714 15H21.2143C21.4227 15 21.6225 14.921 21.7699 14.7803C21.9172 14.6397 22 14.4489 22 14.25V12.75C22 12.5511 21.9172 12.3603 21.7699 12.2197C21.6225 12.079 21.4227 12 21.2143 12ZM21.2143 6H0.785714C0.57733 6 0.37748 6.07902 0.23013 6.21967C0.0827804 6.36032 0 6.55109 0 6.75L0 8.25C0 8.44891 0.0827804 8.63968 0.23013 8.78033C0.37748 8.92098 0.57733 9 0.785714 9H21.2143C21.4227 9 21.6225 8.92098 21.7699 8.78033C21.9172 8.63968 22 8.44891 22 8.25V6.75C22 6.55109 21.9172 6.36032 21.7699 6.21967C21.6225 6.07902 21.4227 6 21.2143 6ZM21.2143 0H0.785714C0.57733 0 0.37748 0.0790176 0.23013 0.21967C0.0827804 0.360322 0 0.551088 0 0.75L0 2.25C0 2.44891 0.0827804 2.63968 0.23013 2.78033C0.37748 2.92098 0.57733 3 0.785714 3H21.2143C21.4227 3 21.6225 2.92098 21.7699 2.78033C21.9172 2.63968 22 2.44891 22 2.25V0.75C22 0.551088 21.9172 0.360322 21.7699 0.21967C21.6225 0.0790176 21.4227 0 21.2143 0Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div className={styles.uname}><span>Welcome,</span><span className="bold">&nbsp;Manjunath!</span></div>
    </div>
}