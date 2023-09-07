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
        default:
            return {text: 'unknown', color: 'rgb(120, 140, 146)'}
    };
};
