import { returnAge } from './returnAge';

export const profileIntroduction = ():string => {
  const age = returnAge();

  return `ものづくりが大好きな${age}歳\nNext.jsやRuby on Railsを用いたWeb開発から始め、最近はSwiftUIやGoを用いたアプリ開発にも挑戦中\n現在はWebフロント・モバイル・バックエンドエンジニアの長期インターンに参加している\nアプリ開発したり、魚捌いたり、スイーツ作ったり、趣味は多岐にわたる\n人生のモットーは【楽しく生きる！！】`
};
