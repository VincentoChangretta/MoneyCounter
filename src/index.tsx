import ReactDom from "react-dom/client"
import { App } from "./app/App"
import "./app/styles/index.scss"
import { ThemeProvider } from "app/providers/ThemeProvider/ui/ThemeProvider"
import { BrowserRouter } from "react-router-dom"

const root = ReactDom.createRoot(
    document.getElementById("root") as HTMLElement
)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)