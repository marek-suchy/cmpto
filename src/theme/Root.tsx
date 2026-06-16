import React from 'react'

// Using Docusaurus default layout — no custom portal sidebar.
// Navbar, doc sidebar, and mobile hamburger are all handled natively.
export default function Root({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>
}
