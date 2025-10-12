import path from 'path'
import { getMDXData, MDXData } from './mdxParser'

const paths = {
    base: 'content',
    experience: 'experience'
}

export type GroupedExperience = {
    workplace: string,
    slug: string,
    from: Date,
    to: Date,
    experiences: MDXData[]
}

export function getExperience() {
    let experienceRaw = getMDXData(path.join(process.cwd(), paths.base, paths.experience))
                        .sort((a, b) => b.metadata.from.getTime() - a.metadata.from.getTime());
    
    let groupedExperiences: GroupedExperience[] = [];
    let prevCompany = '';
    let i = -1;

    experienceRaw.forEach(ex => {
        if(ex.metadata.workplace != prevCompany){
            i++;
            prevCompany = ex.metadata.workplace
            groupedExperiences.push({
                workplace: ex.metadata.workplace,
                to: ex.metadata.to,
                from: ex.metadata.from,
                slug: `${ex.metadata.workplace}-${ex.metadata.to.toDateString()}`,
                experiences: [ex]
            });
        }
        else {
            groupedExperiences[i].experiences.push(ex);
            groupedExperiences[i].from = groupedExperiences[i].from > ex.metadata.from ? ex.metadata.from : groupedExperiences[i].from;
            groupedExperiences[i].to = groupedExperiences[i].to < ex.metadata.to ? ex.metadata.to : groupedExperiences[i].to;
        }
    });

    return groupedExperiences;
}