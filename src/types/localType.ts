export const locals = ['en', 'ja'] as const;
export type LocalType = (typeof locals)[number];
