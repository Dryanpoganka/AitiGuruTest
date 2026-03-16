import { AppRouter } from '@app/Providers/router/AppRouter';
import '@shared/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './Providers/QueryProvider/QueryProvider';

import { AppProvider } from './Providers/index';

function App() {
  return (
    <AppProvider>
      <QueryProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </QueryProvider>
    </AppProvider>
  );
}

export default App;
