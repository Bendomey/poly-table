import React from 'react'

import useTable from 'poly-table'
import 'poly-table/dist/index.css'

const App = () => {
  const response = useTable()
  return <div>{response}</div>
}

export default App
