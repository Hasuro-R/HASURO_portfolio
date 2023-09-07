type timelineFeatureType = {
    url: string,
    description: string,
    techs: string[],
};

export type timelineType = {
    title: string,
    feature: timelineFeatureType,
    year: string,
    date: string,
    kind: string,
};
