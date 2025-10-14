import Header from "../components/header";
import styles from "./experience.module.css";
import { getExperience } from "../contentUtil/contentReader";
import { toHumanReadableTimespan, toHumanReadableMonthAndYear } from "../helpers/dateHelper";

export default function Experience() {
    const experience = getExperience();
    const totalTo = new Date();
    const totalFrom = experience[experience.length - 1].from;

    const experienceComponents = experience.map((expGroup) => {
        
        return (
            <div key={expGroup.slug} className={styles.experienceGroup}>
                <div className={styles.workplace}>
                    <h2>{expGroup.workplace}</h2>
                    <p className={styles.timeSpent}>{toHumanReadableTimespan(expGroup.from, expGroup.to)}</p>
                </div>
                <div className={styles.experience}>
                    {expGroup.experiences.map((exp) => {
                        return (
                            <div key={exp.slug} className={styles.experience}>
                                <div className={styles.workplace}>
                                    <h3>{exp.metadata.title}</h3>
                                    <p className={styles.timeSpent}>{toHumanReadableMonthAndYear(exp.metadata.from)} - {exp.metadata.currentjob ? "Today" : toHumanReadableMonthAndYear(exp.metadata.to)} ({toHumanReadableTimespan(exp.metadata.from, (exp.metadata.currentjob ? new Date() : exp.metadata.to))})</p>
                                </div>
                                <p>{exp.metadata.short}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className={styles.workplace}>
                <Header>Experience</Header>
                <p style={{alignSelf: "center"}} className={styles.timeSpent}>{toHumanReadableTimespan(totalFrom, totalTo)}</p>
            </div>
            {experienceComponents}
        </div>
    );
};