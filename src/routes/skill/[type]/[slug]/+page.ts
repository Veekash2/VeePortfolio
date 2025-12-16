import { universityModules, certifications } from '$lib/skillsData';

/**
 * This function tells the Static Adapter exactly which pages to build.
 * It returns a list of every possible { type, slug } combination.
 */
export function entries() {
    // 1. Create a list of all University URLs
    const uniEntries = universityModules.map((module) => ({
        type: 'uni',
        slug: module.code
    }));

    // 2. Create a list of all Certification URLs
    const certEntries = certifications.map((cert) => ({
        type: 'cert',
        slug: cert.id
    }));

    // 3. Combine them and return
    return [...uniEntries, ...certEntries];
}

export const prerender = true;