import type { timelineKindType } from '@/types/timelineType'

type timelineCategoryType = {
  kind: timelineKindType | 'all'
  icon: string
  text: string
}

export const timelineCategoryes: timelineCategoryType[] = [
  { kind: 'all', icon: '🤗', text: 'All' },
  { kind: 'released', icon: '🎊', text: 'Released' },
  { kind: 'award', icon: '🏆', text: 'Award' },
  { kind: 'writing', icon: '✍️', text: 'Writing' },
  { kind: 'work', icon: '💻', text: 'Work' },
  { kind: 'hackathon', icon: '🔥', text: 'Hackathon' },
  { kind: 'other', icon: '🌀', text: 'Others' },
]
