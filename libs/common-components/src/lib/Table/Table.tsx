import { Box, Pagination, Typography } from '@mui/material'
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
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue> {
    width?: number | string
  }
}

export interface ITablePagination {
  page?: number
  total?: number
  pageSize?: number
  pageCount?: number
}

export interface ITableSort {
  sortDirection: string
  sortField: string
}

export interface ITable<ITableData = any, ITableFilter = any> {
  data: ITableData
  filter?: ITableFilter
  sort?: ITableSort
  pagination?: ITablePagination
}

export interface ITableProps<ITableData = any> extends ITablePagination {
  data: ITableData[]
  columns: ColumnDef<ITableData, string>[]
  onPageChange?: (event: React.ChangeEvent<unknown>, page: number) => void
  onResultsPerPageChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >
}

export function Table<ITableData>(props: ITableProps<ITableData>) {
  const {
    data,
    columns,
    page = 1,
    pageCount = 10,
    total,
    onPageChange = () => null,
    onResultsPerPageChange = () => null,
  } = props
  const [sorting, setSorting] = useState<ColumnSort[]>([])

  const { getHeaderGroups, getRowModel } = useReactTable({
    columns: useMemo(() => columns, [columns]),
    data: useMemo(() => data, [data]),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
    enableColumnResizing: true,
  })

  return (
    <Box>
      <TableContainer
        component={Paper}
        style={{
          marginBottom: 15,
        }}
      >
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
      {pageCount > 0 && total && total > 0 && (
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography>
            Results {} of {total}
          </Typography>
          <Pagination
            page={page}
            count={pageCount}
            onChange={onPageChange}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}
    </Box>
  )
}
