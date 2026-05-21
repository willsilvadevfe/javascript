//React
import { useCallback, useEffect, useState } from "react";

//CSS
import "./App.css";

//Data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import GameOver from "./components/GameOver";
import Game from "./components/Game";

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  console.log(words)
  return (
    <>
    {gameStage === 'start' && <StartScreen />}
    {gameStage === 'game' && <Game />}
    {gameStage === 'end' && <GameOver />} 
    </>
  );
}

export default App;
