import React, { createContext, useContext, useState, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';

// ─── Theme Definitions ────────────────────────────────────────────────────────
export const THEMES = [
  {
    id: 'indigo-night',
    name: 'Indigo Night',
    description: 'Deep navy with electric indigo',
    preview: ['#1e1b4b', '#4f46e5', '#a5b4fc'],
    vars: {
      '--primary':        '#4f46e5',
      '--primary-dark':   '#3730a3',
      '--primary-light':  '#e0e7ff',
      '--primary-ring':   '#a5b4fc',
      '--accent':         '#7c3aed',
      '--sidebar-bg':     '#111827',
      '--sidebar-active': '#4f46e5',
      '--sidebar-shadow': 'rgba(79,70,229,0.45)',
      '--btn-shadow':     'rgba(79,70,229,0.35)',
    },
    tailwind: {
      sidebar:        'bg-gray-900',
      sidebarActive:  'bg-indigo-600',
      btnPrimary:     'bg-indigo-600 hover:bg-indigo-700',
      logo:           'bg-indigo-600',
      gradient:       'from-indigo-600 to-purple-600',
    },
  },
  
  {
    id: 'emerald-dusk',
    name: 'Emerald Dusk',
    description: 'Forest green meets warm slate',
    preview: ['#064e3b', '#059669', '#6ee7b7'],
    vars: {
      '--primary':        '#059669',
      '--primary-dark':   '#047857',
      '--primary-light':  '#d1fae5',
      '--primary-ring':   '#6ee7b7',
      '--accent':         '#10b981',
      '--sidebar-bg':     '#0f172a',
      '--sidebar-active': '#059669',
      '--sidebar-shadow': 'rgba(5,150,105,0.45)',
      '--btn-shadow':     'rgba(5,150,105,0.35)',
    },
    tailwind: {
      sidebar:        'bg-slate-900',
      sidebarActive:  'bg-emerald-600',
      btnPrimary:     'bg-emerald-600 hover:bg-emerald-700',
      logo:           'bg-emerald-600',
      gradient:       'from-emerald-600 to-teal-500',
    },
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold',
    description: 'Warm blush with gilded accents',
    preview: ['#4c0519', '#e11d48', '#fda4af'],
    vars: {
      '--primary':        '#e11d48',
      '--primary-dark':   '#be123c',
      '--primary-light':  '#ffe4e6',
      '--primary-ring':   '#fda4af',
      '--accent':         '#f43f5e',
      '--sidebar-bg':     '#1c1917',
      '--sidebar-active': '#e11d48',
      '--sidebar-shadow': 'rgba(225,29,72,0.45)',
      '--btn-shadow':     'rgba(225,29,72,0.35)',
    },
    tailwind: {
      sidebar:        'bg-stone-900',
      sidebarActive:  'bg-rose-600',
      btnPrimary:     'bg-rose-600 hover:bg-rose-700',
      logo:           'bg-rose-600',
      gradient:       'from-rose-600 to-pink-500',
    },
  },
  {
    id: 'amber-carbon',
    name: 'Amber Carbon',
    description: 'Soot-black with molten amber',
    preview: ['#1c1917', '#d97706', '#fcd34d'],
    vars: {
      '--primary':        '#d97706',
      '--primary-dark':   '#b45309',
      '--primary-light':  '#fef3c7',
      '--primary-ring':   '#fcd34d',
      '--accent':         '#f59e0b',
      '--sidebar-bg':     '#0c0a09',
      '--sidebar-active': '#d97706',
      '--sidebar-shadow': 'rgba(217,119,6,0.45)',
      '--btn-shadow':     'rgba(217,119,6,0.35)',
    },
    tailwind: {
      sidebar:        'bg-stone-950',
      sidebarActive:  'bg-amber-600',
      btnPrimary:     'bg-amber-600 hover:bg-amber-700',
      logo:           'bg-amber-600',
      gradient:       'from-amber-500 to-orange-500',
    },
  },
  {
    id: 'sky-arctic',
    name: 'Sky Arctic',
    description: 'Crisp glacial blue, icy clarity',
    preview: ['#0c4a6e', '#0284c7', '#7dd3fc'],
    vars: {
      '--primary':        '#0284c7',
      '--primary-dark':   '#0369a1',
      '--primary-light':  '#e0f2fe',
      '--primary-ring':   '#7dd3fc',
      '--accent':         '#38bdf8',
      '--sidebar-bg':     '#0f172a',
      '--sidebar-active': '#0284c7',
      '--sidebar-shadow': 'rgba(2,132,199,0.45)',
      '--btn-shadow':     'rgba(2,132,199,0.35)',
    },
    tailwind: {
      sidebar:        'bg-slate-900',
      sidebarActive:  'bg-sky-600',
      btnPrimary:     'bg-sky-600 hover:bg-sky-700',
      logo:           'bg-sky-600',
      gradient:       'from-sky-600 to-cyan-500',
    },
  },
  {
    id: 'violet-cosmos',
    name: 'Violet Cosmos',
    description: 'Galactic purple, nebula shimmer',
    preview: ['#2e1065', '#7c3aed', '#c4b5fd'],
    vars: {
      '--primary':        '#7c3aed',
      '--primary-dark':   '#6d28d9',
      '--primary-light':  '#ede9fe',
      '--primary-ring':   '#c4b5fd',
      '--accent':         '#8b5cf6',
      '--sidebar-bg':     '#13111c',
      '--sidebar-active': '#7c3aed',
      '--sidebar-shadow': 'rgba(124,58,237,0.45)',
      '--btn-shadow':     'rgba(124,58,237,0.35)',
    },
    tailwind: {
      sidebar:        'bg-[#13111c]',
      sidebarActive:  'bg-violet-600',
      btnPrimary:     'bg-violet-600 hover:bg-violet-700',
      logo:           'bg-violet-600',
      gradient:       'from-violet-600 to-fuchsia-500',
    },
  },
];

// ─── Context ──────────────────────────────────────────────────────────────────
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem('app-theme') || 'indigo-night';
  });

  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
    localStorage.setItem('app-theme', themeId);
  }, [themeId, theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};

// ─── ThemeSelector Panel ──────────────────────────────────────────────────────
const ThemeSelector = ({ onClose }) => {
  const { theme, themeId, setThemeId } = useTheme();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
         style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in">

        {/* Header */}
        <div className={`p-6 bg-gradient-to-r ${theme.tailwind.gradient} text-white`}>
          <div className="flex items-center gap-3">
            <Sparkles size={22} />
            <div>
              <h2 className="text-xl font-bold tracking-tight">Choose Your Theme</h2>
              <p className="text-white/70 text-sm mt-0.5">Personalise your workspace color scheme</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="p-6 grid grid-cols-2 gap-4">
          {THEMES.map(t => {
            const active = t.id === themeId;
            return (
              <button
                key={t.id}
                onClick={() => setThemeId(t.id)}
                className={`relative group rounded-xl border-2 p-4 text-left transition-all duration-200 hover:scale-[1.02] ${
                  active
                    ? 'border-[var(--primary)] shadow-lg shadow-[var(--btn-shadow)]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Color swatches */}
                <div className="flex gap-1.5 mb-3">
                  {t.preview.map((color, i) => (
                    <span
                      key={i}
                      className="flex-1 h-6 rounded-md shadow-sm"
                      style={{ background: color }}
                    />
                  ))}
                </div>

                <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.description}</p>

                {active && (
                  <span className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-white"
                        style={{ background: 'var(--primary)' }}>
                    <Check size={12} strokeWidth={3} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--primary)' }}
          >
            Apply Theme
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Theme Toggle Button (drop into any layout) ───────────────────────────────
export const ThemeToggleButton = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
        title="Change colour theme"
      >
        <span className="flex gap-1">
          {theme.preview.map((c, i) => (
            <span key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
        </span>
        <Palette size={15} />
        <span className="hidden sm:inline">Theme</span>
      </button>

      {open && <ThemeSelector onClose={() => setOpen(false)} />}
    </>
  );
};

export default ThemeSelector;