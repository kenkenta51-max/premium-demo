'use client';

import { useState } from 'react';
import { Building2, MapPin, Users } from 'lucide-react';
import DonutChart from '@/components/numbers/donut-chart';

const companyFacts = [
  {
    icon: Building2,
    label: '創業',
    value: '15年目',
    description: '地に足のついた支援を積み重ねてきました。',
  },
  {
    icon: Users,
    label: '支援実績',
    value: '120社以上',
    description: '業種を問わない伴走支援の実績です。',
  },
  {
    icon: MapPin,
    label: '拠点',
    value: '2拠点',
    description: '東京・大阪の2拠点で活動しています。',
  },
];

const businessBreakdown = [
  { label: '製造業', value: 33, colorVar: '--component-chart-color-1' },
  { label: '金融業', value: 26, colorVar: '--component-chart-color-2' },
  { label: '小売業', value: 24, colorVar: '--component-chart-color-3' },
  { label: 'その他', value: 17, colorVar: '--component-chart-color-4' },
];

const supportBreakdown = [
  { label: 'フルサポート', value: 43, colorVar: '--component-chart-color-1' },
  { label: 'スポット支援', value: 31, colorVar: '--component-chart-color-2' },
  { label: '顧問契約', value: 20, colorVar: '--component-chart-color-3' },
  { label: 'その他', value: 6, colorVar: '--component-chart-color-4' },
];

const tabs = [
  { id: 'company', label: '会社のこと' },
  { id: 'business', label: '事業のこと' },
  { id: 'customer', label: 'お客様のこと' },
] as const;

type TabId = (typeof tabs)[number]['id'];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>('company');

  return (
    <div>
      <div role="tablist" aria-label="数字で見るLumièreのカテゴリ" className="flex gap-8 border-b border-border">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-4 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-primary" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-12">
        <div
          role="tabpanel"
          id="panel-company"
          aria-labelledby="tab-company"
          hidden={activeTab !== 'company'}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {companyFacts.map((fact) => (
              <div key={fact.label} className="border-t border-border pt-6">
                <fact.icon
                  strokeWidth={1.25}
                  className="mb-4 size-8 text-primary"
                />
                <p className="text-sm text-muted-foreground">{fact.label}</p>
                <p className="mt-1 font-body text-3xl font-bold text-accent">
                  {fact.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          id="panel-business"
          aria-labelledby="tab-business"
          hidden={activeTab !== 'business'}
        >
          <DonutChart title="案件の業種別内訳" data={businessBreakdown} />
        </div>

        <div
          role="tabpanel"
          id="panel-customer"
          aria-labelledby="tab-customer"
          hidden={activeTab !== 'customer'}
        >
          <DonutChart title="支援形態の内訳" data={supportBreakdown} />
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
