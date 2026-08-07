import { Building2, TrendingUp, Users, Workflow } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: '経営戦略コンサルティング',
    description:
      '事業環境の変化を見据え、実行可能な中長期の経営戦略を経営層とともに策定します。',
  },
  {
    icon: Users,
    title: '組織開発支援',
    description:
      '意思決定の速度と質を高める組織体制・人材配置を、現場の実情に即して設計します。',
  },
  {
    icon: Workflow,
    title: '業務プロセス改善',
    description:
      '非効率な業務フローを可視化し、持続的に改善できる仕組みへと再設計します。',
  },
  {
    icon: Building2,
    title: 'M&Aアドバイザリー',
    description:
      '事業承継や成長戦略としてのM&Aを、デューデリジェンスから統合後まで一貫して支援します。',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          事業内容
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start">
              <Icon strokeWidth={1.25} className="mb-5 size-8 text-primary" />
              <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
