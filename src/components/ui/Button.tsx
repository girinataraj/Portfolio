import React from 'react'

export function Button({ children, href, variant }: { children: React.ReactNode; href?: string; variant?: 'primary' | 'ghost' }) {
  const base = 'px-4 py-2 rounded-2xl font-medium shadow';
  if (href) {
    return <a className={base + ' bg-slate-900 text-white'} href={href}>{children}</a>
  }
  return <button className={base + ' bg-slate-900 text-white'}>{children}</button>
}
