import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router} 
    />
  </StrictMode>
);
