import Paper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

export interface ITableColumn {
  header: string
  accessorKey?: string
  accessorFn?: any
}

export interface ITable<ITableData = any> {
  data: ITableData[]
  columns: ITableColumn[]
}

export function Table<ITableData>(props: ITable<ITableData>) {
  const { data, columns } = props
  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: (event: any) => console.log(event()),
  })

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {getHeaderGroups().map((header) => (
            <TableRow key={header.id}>
              {header.headers.map((column) => (
                <TableCell
                  key={column.id}
                  colSpan={column.colSpan}
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
                <TableCell key={cell.id} component="th" scope="row">
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
