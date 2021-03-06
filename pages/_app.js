import { useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";

import CustomScrollbar from "../components/CustomScrollbar";
import NextNprogress from "nextjs-progressbar";
import "../styles/globals.css";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FAE807",
    },
    seconday: {
      main: "#A6A2A2",
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>M-Box</title>
      </Head>
      <CustomScrollbar>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CustomScrollbar>
      <NextNprogress
        color={theme.palette.primary.main}
        options={{ showSpinner: false }}
      />
    </>
  );
}

export default MyApp;
