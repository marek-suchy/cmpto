import React from 'react'

interface UISettingsProps {
  children: React.ReactNode
}

export default function UISettings({ children }: UISettingsProps): React.JSX.Element {
  return (
    <>
      <h2 className="feature-detail__section-h2">UI Settings</h2>
      <div className="ui-settings__body">{children}</div>
    </>
  )
}
