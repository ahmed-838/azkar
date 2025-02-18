import { tajweedRules } from '@/data/tajweed-rules';
import { TajweedRuleView } from '@/components/TajweedRuleView';
import { ClientOnly } from '@/components/ClientOnly';

export default function MaddRulingsPage() {
  const rule = tajweedRules.find(r => r.id === 'madd-rulings');

  if (!rule) {
    return <div>لم يتم العثور على الحكم المطلوب</div>;
  }

  return (
    <ClientOnly>
      <TajweedRuleView rule={rule} />
    </ClientOnly>
  );
} 