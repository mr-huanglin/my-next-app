// ClientButton.js
'use client'

import { Button } from '@nextui-org/react'

export default function ClientButton({ onClick, children, color = 'primary' }) {
  return (
    <Button color={color} onClick={onClick}>
      {children}
    </Button>
  )
}
