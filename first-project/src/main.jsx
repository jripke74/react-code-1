import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

root.render(<Page />)
