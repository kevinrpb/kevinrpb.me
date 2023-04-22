declare module '@nextjs-utils/dynamic-icon' {
  import React from 'react'

  interface DynamicIconProps extends React.HTMLProps<HTMLOrSVGElement> {
    name: string
  }

  const DynamicIcon: React.FC<DynamicIconProps>

  export default DynamicIcon
}
