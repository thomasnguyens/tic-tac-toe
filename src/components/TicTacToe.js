import { useEffect, useState } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";

// all of these are outside the TicTacToe combo
// setting player turns
const PLAYER_X = "X";
const PLAYER_O = "O"; 

// these are the winning tiles
const winningCombos = [
    // row wins
    {combo:[0,1,2], strikeClass: "strike-row-1"},
    {combo:[3,4,5], strikeClass: "strike-row-2"},
    {combo:[6,7,8], strikeClass: "strike-row-3"},
    
    // col wins
    {combo:[0,3,6], strikeClass: "strike-column-1"},
    {combo:[1,4,7], strikeClass: "strike-column-2"},
    {combo:[2,5,8], strikeClass: "strike-column-3"},

    // diag wins
    {combo:[0,4,8], strikeClass: "strike-diagonal-1"},
    {combo:[2,4,6], strikeClass: "strike-diagonal-2"}


];

// sees if you are a winner
function checkWinner(tiles, setStrikeClass, setGameState){
    for(const {combo, strikeClass} of winningCombos){
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];

        if(
            tileValue1 !== null &&
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3
        ){
            setStrikeClass(strikeClass);
            if(tileValue1 === PLAYER_X){
                setGameState(GameState.playerXWins)
            }
            else if(tileValue1 === PLAYER_O){
                setGameState(GameState.playerOWins)
            }
            else{
                setGameState(GameState.draw)
            }
            return;
        }
    
    }
    
    const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
    if (areAllTilesFilledIn){
        setGameState(GameState.draw);
    }
}


const TicTacToe = () => {
    
    // using a useState for updated render of tiles when playing tictactoe
    // creating an array of 9 items and setting it to null first
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [strikeClass, setStrikeClass] = useState();
    const [gameState, setGameState] = useState(GameState.inProgress);


    // need a clickhandler everytime player uses a turn (clicks)
    // using an arrow function takes in an index
    // ... is a very effective and useful command in clickhandling
    const tileClickHandler = (index) => {

        // making sure that you can't click any tiles after a win is declared
        if(gameState !== GameState.inProgress){
            return; 
        }


        const newTiles = [...tiles]; // []...tiles] = makes copy of current tiles array
        newTiles[index] = playerTurn; // then using newTiles[index] to see when the player's turn is
        setTiles(newTiles); 
        // used a ternary to alternate between x's and o's
        playerTurn === PLAYER_X ? (setPlayerTurn(PLAYER_O)) : (setPlayerTurn(PLAYER_X))
    }
    
    // fxn that resets everything when button is clicked
    const handleReset = () => {
        setGameState(GameState.inProgress); // resetting the gamestate back to inProgress
        setTiles(Array(9).fill(null)); // resetting all the tiles
        setPlayerTurn(PLAYER_X); // resetting player turn to playerX
        setStrikeClass(null);
    }

    useEffect(() => { // everytime a tile is clicked, it will checkwinner
        checkWinner(tiles, setStrikeClass,setGameState); // everytime winner is declared, it will run a strikethrough
    },[tiles]) // added a dependency, so everytime the tile is clicked.

    return ( 
        <div>
            {/* importing the board then passing each tiles to board */}
            <Board 
                playerTurn ={playerTurn} 
                tiles = {tiles} 
                onTileClick = {tileClickHandler}
                strikeClass = {strikeClass}
                /> 
            <GameOver gameState = {gameState}/> {/* importing the state here */}
            <Reset gameState={gameState} onReset = {handleReset}/>
        </div>
     );
}
 
export default TicTacToe;