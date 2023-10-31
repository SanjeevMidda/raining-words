import './index.css';
import Word from './components/Word';

function App() {

  const words = ["Hello"];
  const newWords = [];

  for (let index = 0; index <= 300; index++) {
    newWords.push(words[0]);
  }

  function position(){
    return `${Math.floor(Math.random()*1900)}px`;
  }

  function delay(){
    return Math.floor(Math.random() * 7 + 1)
  }

  return (
    <div className="App">
      {
        newWords.map((word, index) => {
          return <Word word={word} key={index} left={position()} delay={delay()}/>
        })
      }
    </div>
  );
}

export default App;
