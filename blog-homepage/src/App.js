import Main from "./section/Main";
import SectionHeader from "./section/SectionHeader";

function App() {
  return (
    <div>
      <SectionHeader text='For you'/>
      <Main />
      <SectionHeader text='In case you missed it'/>
      {/* <div className={classes.container + " " + classes.lower}>
        <div className={classes.card1}>Div1</div>
        <div className={classes.card2}>Div2</div>
        <div className={classes.card3}>Div3</div>
      </div> */}
    </div>
  );
}

export default App;
