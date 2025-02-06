import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
      <header>
        <img src="/src/assets/react.svg" alt="React Logo"/>
      </header>
  )
}

function Main() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer if I know React</li>
      </ol>
    </main>
  )
}

function Footer() {
  return <small>&copy; 2025 Jeff development. All rights reserved.</small>
}

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
