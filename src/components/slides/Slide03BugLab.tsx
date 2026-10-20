import React from 'react';
import { Users, Sparkles, Scale, DollarSign, CheckCircle2 } from 'lucide-react';

export const Slide03BugLab: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Inclusive Experiences',
      subtitle: 'Digital Equity as a Core Standard',
      icon: <Users className="w-5 h-5 text-[#F28C28]" />,
      points: [
        'Over 1 billion people worldwide experience some disability.',
        'Software is the primary doorway to work, healthcare, and finance.',
        'Accessible engineering guarantees equal participation for all.'
      ]
    },
    {
      num: '02',
      title: 'Better for Everyone',
      subtitle: 'The "Curb-Cut Effect" in Tech',
      icon: <Sparkles className="w-5 h-5 text-[#15803D]" />,
      points: [
        'Features built for accessibility elevate baseline product quality.',
        'High-contrast tokens reduce eye strain in bright sunlight.',
        'Semantic HTML yields faster page loads and cleaner SEO.'
      ]
    },
    {
      num: '03',
      title: 'Enterprise Standards',
      subtitle: 'Global Regulations & Trust',
      icon: <Scale className="w-5 h-5 text-[#171717]" />,
      points: [
        'WCAG 2.1 Level AA defines the international consensus.',
        'Americans with Disabilities Act (ADA) enforces digital access.',
        'Enterprise procurement mandates accessibility compliance.'
      ]
    },
    {
      num: '04',
      title: 'Faster & Cheaper',
      subtitle: 'Shift-Left Engineering Quality',
      icon: <DollarSign className="w-5 h-5 text-[#B91C1C]" />,
      points: [
        'Adding labels & focus rings during generation takes 5 seconds.',
        'Retrofitting legacy components takes weeks of sprint cycles.',
        'Semantic code drastically simplifies testing-library queries.'
      ]
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          STRATEGY & VALUE • THE CASE FOR ACCESSIBILITY
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          WHY ACCESSIBILITY MATTERS
        </h1>
        <p className="text-sm font-bold text-[#525252]">
          Four strategic reasons why accessibility is a first-class engineering requirement.
        </p>
      </div>

      {/* 4 Clean Visual Cards (2x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {cards.map((c, i) => (
          <div 
            key={i}
            className="p-5 rounded-2xl border-2 border-[#171717] bg-white shadow-[4px_4px_0px_#171717] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b-2 border-[#171717] mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-[#FFF8EE] rounded-lg border border-[#171717]">
                    {c.icon}
                  </div>
                  <h3 className="font-black text-sm uppercase text-[#171717]">
                    {c.title}
                  </h3>
                </div>
                <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-[#FFF4E5] border border-[#171717]">
                  {c.num}
                </span>
              </div>

              <span className="text-[11px] font-bold text-[#F28C28] block mb-2">
                {c.subtitle}
              </span>

              <ul className="space-y-1.5 text-xs text-[#171717]">
                {c.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#171717] leading-tight">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Takeaway Quote */}
      <div className="bg-[#FFF4E5] border-2 border-[#171717] rounded-xl p-3.5 shadow-[3px_3px_0px_#171717] text-center">
        <p className="text-xs sm:text-sm font-black text-[#171717]">
          💡 <strong>Core Principle:</strong> Accessibility is not an afterthought—it's the hallmark of well-architected software.
        </p>
      </div>

    </div>
  );
};
