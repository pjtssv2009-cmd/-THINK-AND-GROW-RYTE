import React, { useState } from 'react';
import { Eye, Tag, Keyboard, AlertCircle, Palette, CheckCircle2, XCircle } from 'lucide-react';

export const Slide04InvisibleLabel: React.FC = () => {
  const [activeDefect, setActiveDefect] = useState<number>(1);

  const defects = [
    {
      id: 1,
      number: '01',
      title: 'Insufficient Color Contrast',
      wcag: 'WCAG 1.4.3 (Level AA)',
      icon: <Eye className="w-5 h-5 text-[#F28C28]" />,
      what: 'Foreground text colors lacking sufficient luminance difference against their card or page backgrounds (e.g., #94A3B8 on #FFFFFF, yielding 2.3:1).',
      why: 'Washes out under sunlight glare, on mobile screens, and becomes completely illegible to users with low vision or presbyopia.',
      prevent: 'Enforce WCAG AA mathematical thresholds: minimum 4.5:1 for body copy and 3.0:1 for large text and active UI boundaries.',
      exampleBad: 'color: #A0AEC0; /* 1.9:1 Contrast */',
      exampleGood: 'color: #171717; /* 16.1:1 Contrast */'
    },
    {
      id: 2,
      number: '02',
      title: 'Missing Form Labels',
      wcag: 'WCAG 1.3.1 (Level A)',
      icon: <Tag className="w-5 h-5 text-[#B91C1C]" />,
      what: 'Input fields that rely on visual <span> tags or placeholder text rather than programmatically linked <label for="id"> elements.',
      why: 'Screen readers inspect the browser Accessibility Tree. Without a label link, VoiceOver announces only "Edit text, blank", leaving users blind to the field intent.',
      prevent: 'Always pair inputs with explicit label elements: <label htmlFor="userEmail">Email</label><input id="userEmail" />.',
      exampleBad: '<span>Email</span>\n<input placeholder="alex@company.com" />',
      exampleGood: '<label for="userEmail">Email</label>\n<input id="userEmail" type="email" />'
    },
    {
      id: 3,
      number: '03',
      title: 'Poor Keyboard Navigation',
      wcag: 'WCAG 2.1.1 & 2.4.7',
      icon: <Keyboard className="w-5 h-5 text-[#15803D]" />,
      what: 'Stripping focus rings via "outline: none" or generating clickable <div onClick={...}> elements instead of native <button> tags.',
      why: 'Keyboard navigators, switch users, and motor-impaired individuals cannot see where their focus cursor is or trigger actions with Enter/Space.',
      prevent: 'Use native semantic <button> tags and style custom high-contrast :focus-visible rings with outline-offset.',
      exampleBad: '<div class="btn" onclick="submit()">Submit</div>\n*:focus { outline: none; }',
      exampleGood: '<button type="submit">Submit</button>\nbutton:focus-visible { outline: 2px solid #F28C28; }'
    },
    {
      id: 4,
      number: '04',
      title: 'Inaccessible Error Messages',
      wcag: 'WCAG 3.3.1 & 3.3.3',
      icon: <AlertCircle className="w-5 h-5 text-[#D97706]" />,
      what: 'Validation errors injected purely visually into the DOM without aria-describedby or live region announcements.',
      why: 'When form submission fails, a screen reader user receives zero audio feedback and cannot determine which field blocked submission.',
      prevent: 'Connect error containers using aria-describedby and set aria-invalid="true" on erroneous inputs.',
      exampleBad: '<input class="border-red-500" />\n<span class="text-red-500">Invalid</span>',
      exampleGood: '<input aria-invalid="true" aria-describedby="err-1" />\n<div id="err-1" role="alert">Please enter a valid email</div>'
    },
    {
      id: 5,
      number: '05',
      title: 'Color-Only Communication',
      wcag: 'WCAG 1.4.1 (Level A)',
      icon: <Palette className="w-5 h-5 text-[#171717]" />,
      what: 'Conveying errors, warnings, or required statuses solely through red or green border colors without icons or text copy.',
      why: 'Over 300 million people have red-green color vision deficiency (deuteranomaly/protanomaly) and cannot differentiate red borders from neutral gray.',
      prevent: 'Always pair color with secondary visual cues: an explicit icon (✕ / ✓), bold text, or distinct underline.',
      exampleBad: '<!-- Only red border indicates failure -->\n<input class="border-red-500" />',
      exampleGood: '<!-- Color + Warning Icon + Explicit Text -->\n<div class="flex items-center gap-1 text-red-700">\n  <AlertIcon /> Required field cannot be blank\n</div>'
    }
  ];

  const current = defects.find(d => d.id === activeDefect) || defects[0];

  return (
    <div className="w-full max-w-5xl mx-auto py-4 sm:py-6 px-4 flex flex-col animate-slide-in">
      
      {/* Slide Header */}
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#171717] bg-[#FFF4E5] px-3.5 py-1 rounded-md border-2 border-[#171717] shadow-[2px_2px_0px_#171717]">
          VULNERABILITY ATLAS • THE 5 RECURRING TRAPS
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-[#171717] tracking-tight mt-3 mb-2 uppercase">
          FIVE COMMON ACCESSIBILITY DEFECTS
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-[#525252]">
          Over 90% of automated accessibility failures in AI-generated code stem from these five recurring oversights.
        </p>
      </div>

      {/* 5 Defects Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5">
        {defects.map((d) => {
          const isSelected = activeDefect === d.id;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => setActiveDefect(d.id)}
              className={`p-2.5 rounded-lg border-2 border-[#171717] text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#F28C28] text-[#171717] shadow-[3px_3px_0px_#171717] -translate-x-0.5 -translate-y-0.5 font-bold'
                  : 'bg-white hover:bg-[#FFF4E5] text-[#171717] shadow-[2px_2px_0px_#171717]'
              } focus-visible:outline-3 focus-visible:outline-[#F28C28]`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="font-mono text-[10px] font-black">{d.number}</span>
                <span className="p-1 rounded bg-white border border-[#171717]">{d.icon}</span>
              </div>
              <span className="text-xs font-black uppercase truncate">{d.title}</span>
            </button>
          );
        })}
      </div>

      {/* Educational Analysis Card */}
      <div className="bg-white border-2 border-[#171717] rounded-2xl shadow-[5px_5px_0px_#171717] p-5 sm:p-7 mb-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-[#171717] mb-4 gap-2">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-sm font-black bg-[#171717] text-[#F28C28] px-2.5 py-1 rounded">
              DEFECT {current.number}
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#171717] uppercase">
              {current.title}
            </h2>
          </div>
          <span className="text-[11px] font-mono font-bold bg-[#FFF4E5] text-[#171717] px-2.5 py-0.5 rounded border border-[#171717]">
            {current.wcag}
          </span>
        </div>

        {/* 3 Core Questions: What, Why, How to Prevent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs">
          
          <div className="p-3.5 rounded-xl bg-[#FFF8EE] border-2 border-[#171717]">
            <span className="font-mono text-[10px] font-black uppercase text-[#F28C28] block mb-1">
              1. What It Is
            </span>
            <p className="text-[#171717] font-medium leading-relaxed">
              {current.what}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FEF2F2] border-2 border-[#171717]">
            <span className="font-mono text-[10px] font-black uppercase text-[#B91C1C] block mb-1">
              2. Why It Matters
            </span>
            <p className="text-[#171717] font-medium leading-relaxed">
              {current.why}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F0FDF4] border-2 border-[#171717]">
            <span className="font-mono text-[10px] font-black uppercase text-[#15803D] block mb-1">
              3. How to Prevent It
            </span>
            <p className="text-[#171717] font-medium leading-relaxed">
              {current.prevent}
            </p>
          </div>

        </div>

        {/* Code Snippet Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-red-50/60 rounded-xl border border-red-300">
            <div className="flex items-center gap-1.5 text-red-700 font-bold mb-1">
              <XCircle className="w-3.5 h-3.5" />
              <span>AI Anti-Pattern (Vulnerable)</span>
            </div>
            <pre className="font-mono text-[11px] text-red-900 bg-white p-2 rounded border border-red-200 overflow-x-auto">
              <code>{current.exampleBad}</code>
            </pre>
          </div>

          <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-300">
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Engineered Standard (Accessible)</span>
            </div>
            <pre className="font-mono text-[11px] text-emerald-950 bg-white p-2 rounded border border-emerald-200 overflow-x-auto">
              <code>{current.exampleGood}</code>
            </pre>
          </div>
        </div>

      </div>

    </div>
  );
};
