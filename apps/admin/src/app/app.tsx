import { Routes, Routing } from 'apps/admin/src/app/Core';

export function App() {
  return (
    <Routing routes={Routes} isAuthenticated={false} userPermissions={[]} />
  );
}

export default App;
