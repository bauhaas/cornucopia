import React from "react";
import ReactDOM from "react-dom/client";
import App, { AppWrapper } from "./App";
import "./global.css";

//  https://stackoverflow.com/questions/60029734/react-beautiful-dnd-i-get-unable-to-find-draggable-with-id-1
//  https://github.com/atlassian/react-beautiful-dnd/issues/2350#issuecomment-1318179729
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <AppWrapper>
    <App />
  </AppWrapper>
  // </React.StrictMode>
);
