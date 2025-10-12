import Header from "../components/header";
import { getExperience } from "../contentUtil/contentReader";
import { toHumanReadableTimespan, toHumanReadableMonthAndYear } from "../helpers/dateHelper";

export default function Experience() {
    const experience = getExperience();

    const experienceComponents = experience.map((expGroup) => {
        
        return (
            <div key={expGroup.slug}>
                <h2>{expGroup.workplace}</h2>
                <p>{toHumanReadableTimespan(expGroup.from, expGroup.to)}</p>
                {expGroup.experiences.map((exp) => {
                    return (
                        <div key={exp.slug}>
                            <h3>{exp.metadata.title}</h3>
                            <p>{toHumanReadableMonthAndYear(exp.metadata.from)} - {toHumanReadableMonthAndYear(exp.metadata.to)} ({toHumanReadableTimespan(exp.metadata.from, exp.metadata.to)})</p>
                            <p>{exp.metadata.short}</p>
                        </div>
                    );
                })}
            </div>
        );
    });

    return (
        <div>
            <Header>Experience</Header>
            {experienceComponents}
        </div>
    );
};