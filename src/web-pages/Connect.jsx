import React from 'react'
import ConnectPage from '@/components/Connect'

function Connect() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          className="max-w-[70rem] w-full flex flex-col items-center justify-center"
        >
          <div>
            <ConnectPage />
          </div>
        </div>
      </div >
    </>
  )
}

export default Connect