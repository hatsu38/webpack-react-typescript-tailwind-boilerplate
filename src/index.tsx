import React, { VFC } from "react";
import ReactDOM from "react-dom";

import "~/styles/index.scss";


export const Index: VFC = () => {
  return (
    <h1>hoge</h1>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
