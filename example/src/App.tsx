import React from 'react'

import 'poly-table/dist/index.css'
import WithHookImplmentation from './with-hook'
import WithTableImplmentation from './with-table-impl'

const App = () => {
  return (
    <div>
      <div className={'container'}>
        <span>Implementation with hook</span>
      </div>
      <WithHookImplmentation />
      <div className={'container'}>
        <span>Implementation with table component</span>
      </div>
      <WithTableImplmentation />
    </div>
  )
}

export default App
