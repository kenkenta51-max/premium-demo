export interface ServiceDetail {
  slug: string;
  title: string;
  summary: string;
  image: string;
  overview: string;
  offerings: string[];
  process: { step: string; description: string }[];
  targetProfile: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'strategy',
    title: '経営戦略コンサルティング',
    summary:
      '事業環境の変化を見据え、実行可能な中長期の経営戦略を経営層とともに策定します。',
    image: '/images/service-strategy.jpg',
    overview:
      '市場環境や競合構造の変化を踏まえ、絵に描いた戦略で終わらせない「実行できる」経営戦略の策定を支援します。経営層との対話を通じて、現場が動ける水準まで具体化することを重視しています。',
    offerings: [
      '事業環境・競合分析',
      '中長期経営計画の策定',
      '事業ポートフォリオの見直し',
      '経営会議体・KPI設計への落とし込み',
    ],
    process: [
      { step: '01', description: '現状分析と経営課題の整理' },
      { step: '02', description: '戦略オプションの立案と評価' },
      { step: '03', description: '経営層との議論による絞り込み' },
      { step: '04', description: '実行計画とKPIへの落とし込み' },
    ],
    targetProfile: [
      '中長期の成長戦略を再構築したい企業',
      '複数事業のポートフォリオを見直したい企業',
      '経営会議の意思決定の質を高めたい企業',
    ],
  },
  {
    slug: 'organization',
    title: '組織開発支援',
    summary:
      '意思決定の速度と質を高める組織体制・人材配置を、現場の実情に即して設計します。',
    image: '/images/service-organization.jpg',
    overview:
      '組織図を書き換えるだけでは変わらない「意思決定のスピードと質」に焦点を当て、権限設計・会議体・評価制度までを一貫して見直します。',
    offerings: [
      '組織構造・権限規程の見直し',
      '会議体の再設計',
      '評価制度の見直し',
      '経営層・管理職向けの伴走支援',
    ],
    process: [
      { step: '01', description: '現状の意思決定プロセスの可視化' },
      { step: '02', description: 'ボトルネックの特定' },
      { step: '03', description: '組織・会議体・評価制度の再設計' },
      { step: '04', description: '定着までの伴走支援' },
    ],
    targetProfile: [
      '意思決定が特定の役員に依存している企業',
      '部門間の連携に課題を感じている企業',
      '組織再編を検討している企業',
    ],
  },
  {
    slug: 'process',
    title: '業務プロセス改善',
    summary:
      '非効率な業務フローを可視化し、持続的に改善できる仕組みへと再設計します。',
    image: '/images/service-process.jpg',
    overview:
      '属人化した業務や手作業を洗い出し、持続的に改善が回る仕組みへと再設計します。ツール導入ありきではなく、業務そのものの見直しから着手します。',
    offerings: [
      '業務フローの可視化・棚卸し',
      'ボトルネック工程の特定',
      '業務プロセスの再設計',
      '改善が定着する運用ルールの策定',
    ],
    process: [
      { step: '01', description: '対象業務のヒアリングと可視化' },
      { step: '02', description: '非効率・属人化ポイントの特定' },
      { step: '03', description: 'プロセスの再設計' },
      { step: '04', description: '運用移行とモニタリング' },
    ],
    targetProfile: [
      '主要業務に手作業が多く残っている企業',
      '業務が特定の担当者に属人化している企業',
      'リードタイムやコストを削減したい企業',
    ],
  },
  {
    slug: 'ma',
    title: 'M&Aアドバイザリー',
    summary:
      '事業承継や成長戦略としてのM&Aを、デューデリジェンスから統合後まで一貫して支援します。',
    image: '/images/service-ma.jpg',
    overview:
      '事業承継や成長戦略としてのM&Aについて、案件の初期検討からデューデリジェンス、統合後の組織・業務の定着まで一貫して伴走します。',
    offerings: [
      'M&A戦略の立案',
      '候補先の選定・初期対話支援',
      'デューデリジェンスの実施',
      '統合後(PMI)の組織・業務支援',
    ],
    process: [
      { step: '01', description: 'M&A戦略・要件の整理' },
      { step: '02', description: '候補先の選定と初期対話' },
      { step: '03', description: 'デューデリジェンスの実施' },
      { step: '04', description: '統合後(PMI)の伴走支援' },
    ],
    targetProfile: [
      '事業承継を検討している企業',
      '成長戦略としてM&Aを検討している企業',
      '買収後の統合(PMI)に課題を感じている企業',
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
