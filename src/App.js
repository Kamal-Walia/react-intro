import {lastName, getFirstName, FunctionalComponent}  from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
  const firstName = getFirstName();
  return (
    <div className="App">
     Hello
     <FunctionalComponent fname={firstName} lname={lastName}/>
     <ClassComponent fname={firstName} lname={lastName}/>
    </div>
  );
}

export default App;
