# poly-table

> Opinionated, flexible reactjs table component

[![NPM](https://img.shields.io/npm/v/poly-table.svg)](https://www.npmjs.com/package/poly-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save poly-table
```

## Usage

- Using with the useTable hook.

```tsx
import * as React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import MyComponent from 'poly-table'

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

const { end, limit, setEnd, setSkip, skip } = usePagination({
  getLimit: 1
})
const { paginationData } = useTable({
  cols: cols,
  end,
  limit,
  setEnd,
  setSkip,
  skip,
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
