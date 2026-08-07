export interface WorkDetail {
  slug: string;
  industry: string;
  companyLabel: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string[];
  result: string;
}

export const works: WorkDetail[] = [
  {
    slug: 'manufacturing',
    industry: '製造業',
    companyLabel: '製造業 A社',
    image: '/images/case-manufacturing.jpg',
    summary: '意思決定の属人化を、会議体の再設計によって解消。',
    challenge:
      '意思決定が特定の役員に依存しており、経営判断のスピードが低下していた。現場からの提案が経営層に届くまでに複数の承認階層を経る必要があり、機を逃すケースが増えていた。',
    approach: [
      '意思決定プロセスと権限規程の棚卸し',
      '経営会議・部門会議の役割再定義',
      '権限規程の見直しと運用ルールの策定',
      '新しい会議体の3か月間の伴走運用',
    ],
    result:
      '会議体と権限規程を再設計した結果、意思決定にかかる期間を平均で半分に短縮。現場発の提案が経営会議に上がるまでの階層も2段階削減した。',
  },
  {
    slug: 'finance',
    industry: '金融業',
    companyLabel: '金融業 B社',
    image: '/images/case-finance.jpg',
    summary: '部門間の壁を越えるプロジェクト体制を構築。',
    challenge:
      '部門間の連携が乏しく、全社横断のプロジェクトが計画倒れになりやすい状況だった。評価制度が部門内の成果のみを対象としており、横断的な協力を評価する仕組みがなかった。',
    approach: [
      '部門横断プロジェクトの阻害要因のヒアリング',
      '評価制度における横断貢献の評価軸の追加',
      '組織再編とプロジェクトオーナー制度の導入',
      '初回プロジェクトの立ち上げ伴走',
    ],
    result:
      '組織再編と評価制度の見直しにより、部門横断プロジェクトの立ち上げに成功。初年度で3件のプロジェクトが計画通りに始動した。',
  },
  {
    slug: 'retail',
    industry: '小売業',
    companyLabel: '小売業 C社',
    image: '/images/case-retail.jpg',
    summary: '主要業務のリードタイムを30%削減。',
    challenge:
      '店舗運営の主要業務の多くに手作業が残り、非効率が常態化していた。業務が特定の担当者に属人化しており、繁忙期には対応が追いつかない状態が続いていた。',
    approach: [
      '主要業務フローの可視化と棚卸し',
      '属人化・非効率工程の特定',
      '業務プロセスの再設計と標準化',
      '運用移行後3か月間のモニタリング',
    ],
    result:
      '業務プロセスを再設計し、主要業務のリードタイムを30%削減。標準化により繁忙期の対応力も向上した。',
  },
];

export const getWorkBySlug = (slug: string) =>
  works.find((work) => work.slug === slug);
