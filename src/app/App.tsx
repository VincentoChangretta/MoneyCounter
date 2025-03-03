import { Header } from 'widgets/Header';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './routers/AppRouter';
import { useEffect, useState } from 'react';

export const App = () => {
  const { theme } = useTheme();

  const [state, setState] = useState(null);

  useEffect(() => {
    setState(123);
  });

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main>
        <AppRouter />
      </main>
    </div>
  );
};
