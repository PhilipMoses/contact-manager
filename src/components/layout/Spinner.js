import React from 'react'
import Spinner from './spinner.gif'

export default () => {
  return (
    <div>
        <img 
            src={Spinner} 
            alt="Loading spinner"
            style={{ width:'100px', margin:'auto', display:'block' }}
        />
    </div>
  )
}
