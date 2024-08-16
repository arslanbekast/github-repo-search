import s from './ReposTable.module.scss'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@mui/material'
import { useReposTable } from '@/features/repos/hooks/useReposTable'

export const ReposTable = () => {
  const {
    loading,
    repos,
    currentPage,
    itemsPerPage,
    totalItemsCount,
    sort,
    order,
    handleRowClick,
    handlePageChange,
    handleItemsPerPageChange,
    handleSort,
  } = useReposTable()

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      flex={'1 1 auto'}
    >
      <Table className={s.reposTable}>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Язык</TableCell>
            <TableCell sortDirection={sort === 'forks' ? order : false}>
              <TableSortLabel
                active={sort === 'forks'}
                direction={sort === 'forks' ? order : 'desc'}
                onClick={() => handleSort('forks')}
              >
                Число форков
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={sort === 'stars' ? order : false}>
              <TableSortLabel
                active={sort === 'stars'}
                direction={sort === 'stars' ? order : 'desc'}
                onClick={() => handleSort('stars')}
              >
                Число звезд
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={sort === 'updated' ? order : false}>
              <TableSortLabel
                active={sort === 'updated'}
                direction={sort === 'updated' ? order : 'desc'}
                onClick={() => handleSort('updated')}
              >
                Дата обновления
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos.map(repo => (
            <TableRow key={repo.id} hover onClick={() => handleRowClick(repo)}>
              <TableCell>{repo.name}</TableCell>
              <TableCell>{repo.language}</TableCell>
              <TableCell>{repo.forksCount}</TableCell>
              <TableCell>{repo.stargazersCount}</TableCell>
              <TableCell>{new Date(repo.updatedAt).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={totalItemsCount}
        page={currentPage}
        onPageChange={handlePageChange}
        rowsPerPage={itemsPerPage}
        onRowsPerPageChange={handleItemsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 50]}
        disabled={loading}
        sx={{
          '& .MuiTablePagination-selectLabel': {
            fontSize: '12px',
            color: '#00000099',
          },
          '& .MuiTablePagination-displayedRows': {
            fontSize: '12px',
            color: '#000000DE',
          },
          '& .MuiTablePagination-selectIcon': { top: 0 },
          '& .MuiTablePagination-input': { marginRight: '26px' },
          '& .MuiTablePagination-select': { paddingLeft: 0 },
          '& .MuiTablePagination-actions': { color: '#0000008F' },
        }}
      />
    </Box>
  )
}
