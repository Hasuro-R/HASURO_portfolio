import { getServerTranslations } from '../i18n';
import { returnAge } from './returnAge';

export const profileIntroduction = async() => {
  const age = returnAge();
  const t = await getServerTranslations();

  return t('aboutMe.profile', { age: age });
};
