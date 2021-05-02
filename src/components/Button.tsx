import React from 'react'
import 'tailwindcss/tailwind.css'

export interface ButtonProps {
  primary?: boolean
  label: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ primary = false, label, ...props }) => {
  const mode = primary ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'
  return (
    <button
      className={[
        'focus:outline-none text-white text-sm py-2.5 px-5 rounded-md hover:shadow-lg',
        mode,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}
