/* eslint-disable @typescript-eslint/no-unused-vars */

import { useTable } from 'react-table'

// components
import Pagination from './Pagination'
import { useState } from 'react'

interface TableProps {
  isSearchable?: boolean
  isSortable?: boolean
  pagination?: boolean
  isSelectable?: boolean
  isExpandable?: boolean
  sizePerPageList?: {
    text: string
    value: number
  }[]
  columns: {
    Header: string
    accessor: string
    sort?: boolean
    Cell?: any
    className?: string
  }[]
  data: any[]
  searchBoxClass?: string
  tableClass?: string
  theadClass?: string
}

const Table = (props: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber)
  const handleItemsPerPageChange = (pageNumber: number) =>
    setItemsPerPage(pageNumber)

  const dataTable = useTable({
    columns: props['columns'],
    data: props['data']
  })

  const rows = dataTable.rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <>
      <div className='bg-white p-4 rounded-lg'>
        <table
          {...dataTable.getTableProps()}
          className='w-full table'
        >
          <thead>
            {(dataTable.headerGroups || []).map((headerGroup: any) => (
              <tr
                className='border-b-2 border-slate-400'
                {...headerGroup.getHeaderGroupProps()}
              >
                {(headerGroup.headers || []).map((column: any) => (
                  <th className='text-start'>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...dataTable.getTableBodyProps()}>
            {(rows || []).map((row: any, _i: number) => {
              dataTable.prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {(row.cells || []).map((cell: any) => {
                    return (
                      <td className='py-3 border-b border-b-slate-200'>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        data={dataTable.rows}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />
    </>
  )
}

export default Table
