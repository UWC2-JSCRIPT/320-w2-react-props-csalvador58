import missedArticles from './missed-articles.json';
import classes from './App.module.css';

function App() {
  return (
    <div>
      <div>For You</div>
      <div className={classes.upperContainer}>
        <div className={classes.card1}>Div1</div>
        <div className={classes.card2}>Div2</div>
        <div className={classes.card3}>Div3</div>
        <div className={classes.card4}>Div4</div>
      </div>
      <div>In case you missed it</div>
      <div className={classes.lowerContainer}>
        <div className={classes.card1}>Div1</div>
        <div className={classes.card2}>Div2</div>
        <div className={classes.card3}>Div3</div>
      </div>
    </div>
  );
}

export default App;
