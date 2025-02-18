import { tajweedRules } from '@/data/tajweed-rules';
import { TajweedRuleView } from '@/components/TajweedRuleView';

export default function MaddRulesTypesPage() {
  const rule = tajweedRules.find(r => r.id === 'madd-rules-types');

  if (!rule) {
    return <div>لم يتم العثور على الحكم المطلوب</div>;
  }

  return <TajweedRuleView rule={rule} />;
} 