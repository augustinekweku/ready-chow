import store from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

import './global.css'
const theme = createTheme({
  typography: {
    fontFamily: ['Assistant', 'sans-serif'].join(","),
    color: "#efefef",
  },
  palette: {
    primary: {
      main: "#0EA5E9",
      // darker: "#22C55E",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
