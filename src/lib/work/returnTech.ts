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
        default:
            return {text: 'unknown', color: 'rgb(120, 140, 146)'}
    };
};
