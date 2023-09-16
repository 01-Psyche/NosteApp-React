import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./RoutePages/Create";
import Notes from "./RoutePages/Notes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E65F2B",
    },
    secondary: {
      main: "#fffff",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/Notes" element={<Notes />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
