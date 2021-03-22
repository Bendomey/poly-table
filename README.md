# poly-table

> Opinionated, flexible reactjs table component

[![NPM](https://img.shields.io/npm/v/poly-table.svg)](https://www.npmjs.com/package/poly-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save poly-table
```

## Usage

- Using the useTable hook.

```tsx
import * as React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import useTable, { usePagination } from 'poly-table'
import type { ColumnProps } from 'poly-table/dist/v1/types'

const data = {
  entityData: [
    {
      id: 1,
      name: 'Entity 1'
    }
  ],
  total: 2
}

const Example = () => {
  const cols: ColumnProps[] = [
    {
      name: 'Entity Name',
      rows: [],
      type: 'only-text',
      accessor: 'name'
    },
    {
      name: 'Created At',
      rows: [],
      type: 'only-text',
      accessor: 'name'
    }
  ]
}

const { paginationData } = useTable({
  cols: cols,
  limit: 1,
  skip: 0, // this could be undefined ... It defauls to 0 anyways
  total: data?.total
})

return (
  <React.Fragment>
    <div className={'container'}>
      <table>
        <TableHead cols={cols} />
      </table>
      <Footer total={data?.total} paginationData={paginationData} />
    </div>
  </React.Fragment>
)
```

## Features

- [x] Typescript Support
- [x] Headless implementation (UI Components can be fully customized)
- [x] Pagination Support
- [x] Example built with tailwind ui

## License

MIT © [Bendomey](https://github.com/Bendomey)
