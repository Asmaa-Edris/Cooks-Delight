import React from 'react';
import './CategoryFilter.css';

/**
 * CategoryFilter — Cooking & Recipes Blog
 * Figma: EK0IVka3EakJw5lMCdhpv6
 *
 * Props:
 *   categories   {Array<Category>}   — list of category objects
 *   active       {string}            — currently selected category id
 *   onChange     {(id: string) => void}
 *   label        {string}            — section label (optional)
 *   layout       {'scroll' | 'grid'} — default 'scroll'
 *   showCount    {boolean}           — show recipe count badge
 *
 * Category shape:
 *   { id, label, icon?, count? }
 */
export default function CategoryFilter({
  categories = DEFAULT_CATEGORIES,
  active = 'all',
  onChange,
  label,
  layout = 'scroll',
  showCount = false,
}) {
  return (
    <div
      className={`category-filter${layout === 'grid' ? ' category-filter--grid' : ''}`}
    >
      {label && (
        <p className="category-filter__label">{label}</p>
      )}

      <div className="category-filter__track" role="list">
        {categories.map(cat => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              role="listitem"
              className={[
                'category-filter__pill',
                cat.id === 'all' && 'category-filter__pill--all',
                isActive       && 'category-filter__pill--active',
              ].filter(Boolean).join(' ')}
              aria-pressed={isActive}
              onClick={() => onChange?.(cat.id)}
            >
              {cat.icon && (
                <span className="category-filter__icon" aria-hidden="true">
                  {cat.icon}
                </span>
              )}
              <span>{cat.label}</span>
              {showCount && cat.count != null && (
                <span className="category-filter__count">{cat.count}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Defaults ───────────────────────────────── */
const DEFAULT_CATEGORIES = [
  { id: 'all',       label: 'All Recipes', icon: '🍽️',  count: 124 },
  { id: 'breakfast', label: 'Breakfast',   icon: '🥞',  count: 18  },
  { id: 'lunch',     label: 'Lunch',       icon: '🥗',  count: 24  },
  { id: 'dinner',    label: 'Dinner',      icon: '🍝',  count: 36  },
  { id: 'desserts',  label: 'Desserts',    icon: '🍰',  count: 22  },
  { id: 'drinks',    label: 'Drinks',      icon: '🥤',  count: 14  },
  { id: 'snacks',    label: 'Snacks',      icon: '🧀',  count: 10  },
  { id: 'vegan',     label: 'Vegan',       icon: '🥦',  count: 19  },
];
