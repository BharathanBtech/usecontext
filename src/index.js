import { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";

// Create context
const ContextName = createContext();

function Component1() {
  const [name, setName] = useState("Bharathan");
  const [age, setAge] = useState(25); // Another variable

  return (
    <ContextName.Provider value={{ name, age }}>
      <h1>{`Hello ${name}!`}</h1>
      <Component2 />
    </ContextName.Provider>
  );
}

function Component2() {
  const { name, age } = useContext(ContextName); // Destructure values from context

  return (
    <>
      <h1>{`Value of name is ${name}`}</h1>
      <h2>{`Age is ${age}`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component1 />);
