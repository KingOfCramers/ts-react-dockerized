import React, { useEffect } from "react";
import { AppRouter } from "./routers";
import ReactGA from "react-ga";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

import "./styles/index.scss";

function App(): React.ReactElement {
  console.log("HEY!");
  useEffect(() => {
    // Use Google Analytics
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS as string);
      ReactGA.pageview("/");
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <AppRouter />;
    </ApolloProvider>
  );
}

export default App;
