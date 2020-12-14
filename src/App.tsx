//import React from "react";
//import "./Fake.scss";

//function App() {
//return (
//<div className="App">
//<p className="color">I am red</p>
//</div>
//);
//}

//export default App;

import React, { useEffect } from "react";
import { AppRouter } from "./routers";
import ReactGA from "react-ga";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

import "./styles/index.scss";

function App(): React.ReactElement {
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
