import React from 'react'

interface AuthLayputProps {
    children: React.ReactNode
}
const AuthLayout = ({children}: AuthLayputProps) => {
  return (
    <div>{children}</div>
  )
}

export default AuthLayout