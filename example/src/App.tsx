import React from 'react'

import 'poly-table/dist/index.css'
import WithHookImplmentation from './with-hook'
import WithTableImplmentation from './with-table-impl'

const App = () => {
  return (
    <div>
      <span>Implementation with hook</span>
      <WithHookImplmentation />
      <span>Implementation with table component</span>
      <WithTableImplmentation />
    </div>
  )
}

export default App
