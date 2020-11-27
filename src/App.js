import { Grid } from "@material-ui/core";
import RTL from './components/RTL'
import RegisterLoginContextProvider from './context/RegisterLoginContext'
import AlertContextProvider from './context/AlertContext'
import MasterLayout from './screen/MasterLayout'
import ThemeProvider from './components/ThemeProvider'

export default function App() {
  return (
    <RTL >
      <ThemeProvider>
        <AlertContextProvider>
          <RegisterLoginContextProvider>
              <MasterLayout />
          </RegisterLoginContextProvider>
        </AlertContextProvider>
      </ThemeProvider>
    </RTL>
  )
}
