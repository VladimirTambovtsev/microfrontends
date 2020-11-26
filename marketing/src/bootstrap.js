import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App/>, el)
}


// If we in development and in isolation call the mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing_dev_root')
  
  if (devRoot) {
    mount(devRoot)
  }
}

export {mount}