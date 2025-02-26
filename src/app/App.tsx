import { Header } from "widgets/Header";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
  const { theme} = useTheme()
  return (
    <div className={`app ${theme}`}>
      <Header/>
      <main>
        <AppRouter/>
      </main>
    </div>
  );
}
