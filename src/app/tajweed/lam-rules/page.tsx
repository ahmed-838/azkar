import { tajweedRules } from '@/data/tajweed-rules';
import { TajweedRuleView } from '@/components/TajweedRuleView';

export default function LamRulesPage() {
  const rule = tajweedRules.find(r => r.id === 'lam-rules');

  if (!rule) {
    return <div>لم يتم العثور على الحكم المطلوب</div>;
  }

  return <TajweedRuleView rule={rule} />;
} 