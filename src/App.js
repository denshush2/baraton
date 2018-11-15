import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import Routes from "./routes";
library.add(faStroopwafel);

const App = () => {
  return <Routes />;
};

export default App;
