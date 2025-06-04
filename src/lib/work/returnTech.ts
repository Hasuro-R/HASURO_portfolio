export const returnTech = (tech: string) => {
    switch (tech) {
        case "rails":
            return {text: 'Rails', color: 'rgb(235, 100, 92)'};
        case 'next':
            return {text: 'Next.js', color: 'rgb(0, 0, 0)'};
        case 'ts':
            return {text: 'TypeScript', color: 'rgb(109, 152, 208)'};
        case 'sass':
            return {text: 'Sass', color: 'rgb(234, 94, 127)'};
        case 'react':
            return {text: 'React', color: 'rgb(151, 213, 238)'};
        case 'astro':
            return {text: 'Astro', color: 'rgb(240, 134, 75)'};
        case 'nuxt':
            return {text: 'Nuxt.js', color: 'rgb(40, 180, 130)'};
        case 'svelte':
            return {text: 'Svelte', color: 'rgb(240, 134, 75)'};
        case 'flutter':
            return {text: 'Flutter', color: 'rgb(2, 86, 155)'};
        case 'go':
            return {text: 'Go', color: 'rgb(121, 212, 253)'};
        case 'prisma':
            return {text: 'Prisma', color: 'rgb(144, 198, 189)'};
        case 'swiftui':
            return {text: 'SwiftUI', color: 'rgb(60, 140, 230)'};
        case 'firebase':
            return {text: 'Firebase', color: 'rgb(255, 226, 70)'};
        case 'vite':
            return {text: 'Vite', color: 'rgb(100, 108, 255)'};
        case 'rsc':
            return {text: 'RSC', color: 'rgb(103, 19, 210)'};
        default:
            return {text: tech, color: 'rgb(120, 140, 146)'}
    };
};
