type timelineFeatureType = {
  url: string
  descriptionKey: string
  techs: string[]
}

export type timelineType = {
  id: number
  titleKey: string
  feature?: timelineFeatureType
  url?: string
  year: string
  date: string
  kind: string
}
