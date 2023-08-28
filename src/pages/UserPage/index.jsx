import { useContext } from 'react';
import { Card, Box, TablePagination } from '@mui/material';

import { useTablePaginationControls } from '../../hooks/useTablePaginationControls';
import {
  USER_RAWS_PER_PAGE_OPTIONS,
  USER_DEFAULT_SORT_PROPERTY,
  TABLE_HEAD,
} from './config';

import { SortableTable } from '../../components/SortableTable';
import { UserRowComponent } from './UserRowComponent';
import { UserContext } from '../../contexts/UserContext';

export const UserPage = () => {
  const { users } = useContext(UserContext);

  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTablePaginationControls({
    initialRowsPerPage: USER_RAWS_PER_PAGE_OPTIONS[0],
  });

  return (
    <Box sx={{ minWidth: '70%' }}>
      <h1>Users</h1>
      <Card>
        <SortableTable
          rowItems={users}
          page={page}
          rowsPerPage={rowsPerPage}
          RowComponent={UserRowComponent}
          tableHeadData={TABLE_HEAD}
          defaultSortProperty={USER_DEFAULT_SORT_PROPERTY}
        />
        <TablePagination
          rowsPerPageOptions={USER_RAWS_PER_PAGE_OPTIONS}
          component='div'
          count={users.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Box>
  )
}