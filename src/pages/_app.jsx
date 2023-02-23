import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";
import React from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <React.Fragment>
      <AnimatePresence>
        {getLayout(<Component {...pageProps} />)}
      </AnimatePresence>
    </React.Fragment>
  );
}
