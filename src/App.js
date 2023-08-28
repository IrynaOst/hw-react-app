import { Container } from '@mui/material';
import { UserPage } from './pages/UserPage';
import { UserList } from './pages/UserList';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Container sx={{ mt: 5, display: 'flex', justifyContent: 'space-around' }}>
        <UserList />
        <UserPage />
      </Container>
    </UserProvider>
  );
}

export default App;
