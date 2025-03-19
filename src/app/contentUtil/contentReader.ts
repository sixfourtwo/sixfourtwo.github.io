import path from 'path'
import { getMDXData } from './mdxParser'

const paths = {
    base: 'content',
    experience: 'experience'
}

export function getExperience() {
    return getMDXData(path.join(process.cwd(), paths.base, paths.experience))
        .sort((a, b) => new Date(b.metadata.from).getTime() - new Date(a.metadata.from).getTime())
}