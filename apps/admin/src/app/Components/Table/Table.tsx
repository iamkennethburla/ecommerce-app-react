import Paper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import {
  ColumnDef,
  ColumnSort,
  RowData,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue> {
    width?: number | string
  }
}

export interface ITable<ITableData = any> {
  data: ITableData[]
  columns: ColumnDef<ITableData, string>[]
}

export function Table<ITableData>(props: ITable<ITableData>) {
  const { data, columns } = props
  const [sorting, setSorting] = useState<ColumnSort[]>([])

  const { getHeaderGroups, getRowModel } = useReactTable({
    columns: useMemo(() => columns, [columns]),
    data: useMemo(() => data, [data]),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
    enableColumnResizing: true,
  })

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          {getHeaderGroups().map((header) => (
            <TableRow key={header.id}>
              {header.headers.map((column) => (
                <TableCell
                  key={column.id}
                  colSpan={column.colSpan}
                  style={{
                    width: column.column.columnDef.meta?.width,
                  }}
                  onClick={column.column.getToggleSortingHandler()}
                >
                  {column.isPlaceholder ? null : (
                    <>
                      {flexRender(
                        column.column.columnDef.header,
                        column.getContext()
                      )}
                    </>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  style={{
                    width: cell.column.columnDef.meta?.width,
                  }}
                  component="th"
                  scope="row"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}
