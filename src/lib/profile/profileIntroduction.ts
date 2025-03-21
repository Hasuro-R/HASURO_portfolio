import { returnAge } from './returnAge';

export const profileIntroduction = ():string => {
  const age = returnAge();

  return `ものづくりが大好きな${age}歳
    Next.jsやRuby on Railsを用いたWeb開発から始め、現在はWebフロント・モバイル・バックエンドなど幅広い領域のエンジニアインターンに参加している
    アプリ開発したり、魚捌いたり、スイーツ作ったり、趣味は多岐にわたる
    人生のモットーは【楽しく生きる！！】`
};
