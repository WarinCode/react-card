import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import App from './App.tsx';

import "./globals.css";
import '@fontsource/niramit';

const element: HTMLDivElement = document.querySelector("#root")!;
const root: Root = createRoot(element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
