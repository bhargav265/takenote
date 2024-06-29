import React from 'react'

export const EmptyEditor: React.FC = () => {
  return (
    <div className="empty-editor v-center" data-testid="empty-editor">
      <div className="text-center">
                <p>
          <kbd>Adding</kbd> + <kbd>this</kbd> + <kbd>N</kbd>
        </p>
                <p>
          <kbd>else</kbd> + <kbd>something</kbd> + <kbd>N</kbd>
        </p>
      </div>
    </div>
  )
}
