import React, { useState, useRef, useEffect, useId } from 'react';
import './Accordion.css';

/* ── Chevron SVG ────────────────────────────── */
function ChevronIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Single AccordionItem ───────────────────── */
function AccordionItem({
  id,
  title,
  subtitle,
  icon,
  children,
  isOpen,
  onToggle,
}) {
  const panelRef = useRef(null);
  const panelId  = `${id}-panel`;
  const triggerId = `${id}-trigger`;

  /* Animate height */
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.height = el.scrollHeight + 'px';
    } else {
      /* collapse: first set explicit height, then animate to 0 */
      el.style.height = el.scrollHeight + 'px';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { el.style.height = '0px'; });
      });
    }
  }, [isOpen]);

  /* After open transition ends, clear fixed height so content can reflow */
  function handleTransitionEnd() {
    if (isOpen && panelRef.current) {
      panelRef.current.style.height = 'auto';
    }
  }

  return (
    <div
      className={`accordion__item${isOpen ? ' accordion__item--open' : ''}`}
      id={id}
    >
      <button
        id={triggerId}
        className="accordion__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {icon && (
          <span className="accordion__lead-icon" aria-hidden="true">{icon}</span>
        )}
        <div className="accordion__titles">
          <span className="accordion__title">{title}</span>
          {subtitle && (
            <p className="accordion__subtitle">{subtitle}</p>
          )}
        </div>
        <ChevronIcon className="accordion__chevron" />
      </button>

      <div
        id={panelId}
        ref={panelRef}
        className="accordion__panel"
        role="region"
        aria-labelledby={triggerId}
        style={{ height: isOpen ? undefined : '0px' }}
        onTransitionEnd={handleTransitionEnd}
        hidden={!isOpen && panelRef.current?.clientHeight === 0}
      >
        <div className="accordion__panel-inner">
          <div className="accordion__panel-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Accordion container ────────────────────── */
/**
 * Accordion — Cooking & Recipes Blog
 * Figma: EK0IVka3EakJw5lMCdhpv6
 *
 * Props:
 *   items      {Array<Item>}            — accordion items
 *   multiple   {boolean}               — allow multiple open (default false)
 *   defaultOpen {string | string[]}    — item id(s) open by default
 *   variant    {'default'|'flush'|'compact'}
 *   className  {string}
 *
 * Item shape:
 *   { id, title, subtitle?, icon?, content }
 *   content can be a string or ReactNode
 */
export default function Accordion({
  items = DEFAULT_ITEMS,
  multiple = false,
  defaultOpen = null,
  variant = 'default',
  className = '',
}) {
  const baseId = useId();

  const initOpen = () => {
    if (!defaultOpen) return new Set();
    return new Set(Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen]);
  };

  const [openIds, setOpenIds] = useState(initOpen);

  function toggle(id) {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!multiple) next.clear();
        next.add(id);
      }
      return next;
    });
  }

  const variantClass = variant !== 'default' ? ` accordion--${variant}` : '';

  return (
    <div
      className={`accordion${variantClass}${className ? ' ' + className : ''}`}
    >
      {items.map(item => (
        <AccordionItem
          key={item.id}
          id={`${baseId}-${item.id}`}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          isOpen={openIds.has(item.id)}
          onToggle={() => toggle(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

/* ── Defaults ───────────────────────────────── */
const DEFAULT_ITEMS = [
  {
    id: 'ingredients',
    title: 'Ingredients',
    icon: '🛒',
    subtitle: '8 items needed',
    content:
      'A list of all the ingredients you need for this recipe will appear here. Each ingredient is measured precisely to ensure the best results.',
  },
  {
    id: 'instructions',
    title: 'Step-by-step Instructions',
    icon: '👩‍🍳',
    content:
      'Detailed cooking instructions appear in this section. Follow each step carefully for the best culinary results.',
  },
  {
    id: 'nutrition',
    title: 'Nutrition Information',
    icon: '📊',
    subtitle: 'Per serving',
    content:
      'Calorie counts, macros, vitamins and minerals are listed here to help you track your nutritional intake.',
  },
  {
    id: 'tips',
    title: 'Chef\'s Tips & Variations',
    icon: '💡',
    content:
      'Pro tips from our chefs to help you make this dish even better. Includes substitutions, make-ahead notes, and serving suggestions.',
  },
];
