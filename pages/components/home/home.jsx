import Activity from "../activity/activity";
import Header from "../header/header";
import styles from "./styles.module.css";

export default function HomePage({ activityData }) {
    return (
        <div>
            <Header />
            <div className={styles.scrollable_body}>
                {activityData?.data?.map((activity, idx) => {
                    return <Activity key={idx} status={activity?.status} name={activity?.name} />;
                })}
            </div>
        </div>
    );
}
