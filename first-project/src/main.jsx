import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <Page />
);

function Page() {
  return (
    <>
      <header>
        <img src="/src/assets/react.svg" alt="React Logo" />
      </header>
      <main>
        <h1>Reasons to be excited about React</h1>
        <ol>
          <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
          <li>I am more likely to get a job as a front end developer if I knkow React</li>
        </ol>
      </main>
      <footer>
        <p>&copy; 2025 Ripke develokpment. All rights reserved.</p>
      </footer>
    </>
  )
}
