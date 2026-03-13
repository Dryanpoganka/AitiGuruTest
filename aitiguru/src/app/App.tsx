import { AppRouter } from '@app/Providers/router/AppRouter';
import '@shared/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
