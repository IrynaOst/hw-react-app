import { useState, useEffect } from 'react';
import { Container, Card, TablePagination } from '@mui/material';

import { mockUsers } from '../../mock/mockUsers';
import { useTablePaginationControls } from '../../hooks/useTablePaginationControls';
import {
  USER_RAWS_PER_PAGE_OPTIONS,
  USER_DEFAULT_SORT_PROPERTY,
  TABLE_HEAD,
} from './config';

import { SortableTable } from '../../components/SortableTable';
import { UserRowComponent } from './UserRowComponent';

export const UserPage = () => {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUsers(mockUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const {
    page,
    order,
    orderBy,
    rowsPerPage,
    handleRequestSort,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTablePaginationControls({
    field: USER_DEFAULT_SORT_PROPERTY,
    initialRowsPerPage: USER_RAWS_PER_PAGE_OPTIONS[0],
  });

  return (
    <Container>
      <h1>Users</h1>
      <Card>
        <SortableTable
          rowItems={Array.isArray(users) ? users : []}
          page={page}
          rowsPerPage={rowsPerPage}
          order={order}
          orderBy={orderBy}
          RowComponent={UserRowComponent}
          tableHeadData={TABLE_HEAD}
          handleRequestSort={handleRequestSort}
        />
        <TablePagination
          rowsPerPageOptions={USER_RAWS_PER_PAGE_OPTIONS}
          component='div'
          count={Array.isArray(users) ? users.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  )
}