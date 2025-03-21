type timelineFeatureType = {
    url: string,
    description: string,
    techs: string[],
};

export type timelineType = {
    id: number,
    title: string,
    feature: timelineFeatureType,
    year: string,
    date: string,
    kind: string,
};
