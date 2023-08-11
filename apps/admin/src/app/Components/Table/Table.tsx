import Paper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export interface ITableData {
  header: string
  accessor: string
}

export interface ITableColumn {
  header: string
  accessor: string
}

export interface ITable<ITableData = any> {
  data: ITableData[]
  columns: ITableColumn[]
}

export function Table<ITableData>(props: ITable<ITableData>) {
  const { data, columns } = props

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column: ITableColumn, index: number) => (
              <TableCell key={index}>{column?.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {columns.length > 0 && (
          <TableBody>
            {data.map((row: ITableData | any, index: number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {columns.map((column: ITableColumn, index: number) => (
                  <TableCell key={index} component="th" scope="row">
                    {column.accessor && row[column.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
      </MuiTable>
    </TableContainer>
  )
}
