import { getExperience } from "../contentUtil/contentReader";
import { toHumanReadableTimespan, toHumanReadableMonthAndYear } from "../helpers/dateHelper";

export default function Experience() {
    const experience = getExperience();

    const experienceComponents = experience.map((exp) => {
        return (
            <div key={exp.slug}>
                <h2>{exp.metadata.workplace}</h2>
                <h3>{exp.metadata.title}</h3>
                <p>{toHumanReadableMonthAndYear(exp.metadata.from)} - {toHumanReadableMonthAndYear(exp.metadata.to)} ({toHumanReadableTimespan(exp.metadata.from, exp.metadata.to)})</p>
                <p>{exp.metadata.short}</p>
            </div>
        );
    });

    return (
        <div>
            <h1>Experience</h1>
            {experienceComponents}
        </div>
    );
};