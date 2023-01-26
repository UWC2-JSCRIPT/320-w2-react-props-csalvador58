import Lower from "./section/Lower";
import Main from "./section/Main";
import classes from "./App.module.css"

function App() {
  return (
    <div>
      <Main classes={classes}/>
      <Lower classes={classes}/>
    </div>
  );
}

export default App;
