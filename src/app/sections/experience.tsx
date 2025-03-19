import { getExperience } from "../contentUtil/contentReader";

export default function Experience() {
    const experience = getExperience();

    const experienceComponents = experience.map((exp) => {
        return (
            <div key={exp.slug}>
                <h2>{exp.metadata.workplace}</h2>
                <h3>{exp.metadata.title}</h3>
                <p>{exp.metadata.from} to {exp.metadata.to}</p>
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