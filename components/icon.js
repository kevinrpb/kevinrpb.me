import React from 'react'

import dynamic from 'next/dynamic'

const AiIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/ai')
    return _module[name]
  })

const BiIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/bi')
    return _module[name]
  })

const FaIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/fa')
    return _module[name]
  })

const FiIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/fi')
    return _module[name]
  })

const GiIcon = (name) =>
  dynamic(async () => {
    const _module = await import('react-icons/gi')
    return _module[name]
  })

const _imports = {
  Ai: AiIcon,
  Bi: BiIcon,
  Fa: FaIcon,
  Fi: FiIcon,
  Gi: GiIcon,
}

const ImportedIcon = (name) => {
  const prefix = name.substring(0, 2)
  return prefix in _imports ? _imports[prefix](name) : undefined
}

const _known_icons = {
  amazon: 'FaAmazon',
  briefcase: 'FaBriefcase',
  code: 'FiCode',
  compass: 'FiCompass',
  email: 'FiAtSign',
  github: 'FiGithub',
  heart: 'FiHeart',
  'map-signs': 'FaMapSigns',
  resume: 'FiFileText',
  school: 'FaGraduationCap',
  twitter: 'FiTwitter',
}

const Icon = ({ name, className = '' }) => {
  const iconName = name in _known_icons ? _known_icons[name] : name
  const Component = ImportedIcon(iconName)

  return (
    <i className={`icon ${className}`} aria-hidden='true'>
      {Component != undefined ? <Component /> : `__icon__${name}`}
    </i>
  )
}

export default Icon
