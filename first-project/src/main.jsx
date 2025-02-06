import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <Page />
);

function Page() {
  return (
    <ol>
      <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
      <li>I am more likely to get a job as a front end developer if I knkow React</li>
    </ol>
  )
}

// function Page() {
//   return (
//     <main>
//       <img src="/src/assets/react.svg" alt="React Logo" width="40px" />
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first release in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 200K stars on GitHub</li>
//         <li>Is maintained by Meta</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </main>
//   )
// }
