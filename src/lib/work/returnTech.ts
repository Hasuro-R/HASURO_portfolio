export const returnTech = (tech: string) => {
    switch (tech) {
        case "rails":
            return {text: 'Rails', color: 'rgb(235, 100, 92)'};
        case 'next':
            return {text: 'Next.js', color: 'rgb(109, 152, 208)'};
        default:
            return {text: 'unknown', color: 'rgb(120, 140, 146)'}
    };
};
