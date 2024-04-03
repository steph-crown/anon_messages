import React from "react";
import { createRoot } from "react-dom/client";

const mount = (id, component) => {
  const container = document.getElementById(id);

  const root = createRoot(container);
  root.render(<React.StrictMode>{component}</React.StrictMode>);

  return () => {
    root.unmount();
  };
};

export default mount;
