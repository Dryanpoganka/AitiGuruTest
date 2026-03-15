import { AppRouter } from '@app/Providers/router/AppRouter';
import '@shared/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './Providers/QueryProvider/QueryProvider';

function App() {
  return (
    <>
      <QueryProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </QueryProvider>
    </>
  );
}

export default App;
