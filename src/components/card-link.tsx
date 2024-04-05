import React from 'react'

import Link from 'next/link'

import Icon from '@nextjs-utils/dynamic-icon'

export const metadata = {
  title: 'Kevin Romero Peces-Barba',
}

interface BaseCardLinkProps {
  id?: string
  className?: string
  href: string
  icon: string
  ariaLabel: string
}

interface CardLinkProps extends BaseCardLinkProps, React.PropsWithChildren {}

export const CardLink: React.FC<CardLinkProps> = ({
  className,
  href,
  children,
  icon,
  ariaLabel,
  ...rest
}) => (
  <Link
    href={href}
    className={`w-full xs:w-[calc(50%_-_theme(space.2))] lg:w-[calc(25%_-_theme(space.2))] xs:px-2 flex flex-row items-center justify-center prose no-underline rounded-full bg-blue-haze border-4 border-white drop-shadow-xl ${className}`}
    aria-label={ariaLabel}
    {...rest}
  >
    <Icon name={icon} className='mr-1 w-[16px]' />
    <span className='h-[2em]'>{children}</span>
  </Link>
)

interface SimpleCardLinkProps extends BaseCardLinkProps {
  label: string
}

export const SimpleCardLink: React.FC<SimpleCardLinkProps> = ({ label, ...rest }) => (
  <CardLink {...rest}>{label}</CardLink>
)
