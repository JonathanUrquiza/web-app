import React from 'react';
import Link from 'next/link';

interface CardProps {
  /** Optional title rendered in .card-header */
  title?: string;
  /** Bootstrap border color variant */
  borderVariant?: 'info' | 'warning' | 'success' | 'danger' | 'secondary';
  /** Additional CSS classes for the outer .card div */
  className?: string;
  children: React.ReactNode;
  /** If provided, wraps the card in a Next.js Link */
  href?: string;
  /** Link target, defaults to '_self' */
  target?: '_blank' | '_self';
}

export default function Card({
  title,
  borderVariant,
  className = '',
  children,
  href,
  target = '_self',
}: CardProps): React.JSX.Element {
  const borderClass = borderVariant ? `border-${borderVariant}` : '';
  const cardContent = (
    <div className={`card bg-dark text-white border ${borderClass} rounded-3 shadow ${className}`.trim()}>
      {title && (
        <div className="card-header">
          <h3 className="card-title mb-0">{title}</h3>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={target} className="text-decoration-none">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
