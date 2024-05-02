import Strike from "./Strike";
import Tile from "./Tile";

// destructering tiles from TikTacToe
// this means that we're adding tiles property to Board
const Board = ({tiles, onTileClick, playerTurn, strikeClass}) => {
    return ( 
        <div className="board">
            {/* Need 9 tiles, adding in a new value to here */}
            {/* passing in an arrow function for onTileClick and passing in the index of tile */}
            <Tile onClick = {() => onTileClick(0)} value={tiles[0]} playerTurn= {playerTurn} className="right-border bottom-border"/>
            <Tile onClick = {() => onTileClick(1)} value={tiles[1]} playerTurn= {playerTurn} className="right-border bottom-border"/>
            <Tile onClick = {() => onTileClick(2)} value={tiles[2]} playerTurn= {playerTurn} className="bottom-border"/>
            <Tile onClick = {() => onTileClick(3)} value={tiles[3]} playerTurn= {playerTurn} className="right-border bottom-border" />
            <Tile onClick = {() => onTileClick(4)} value={tiles[4]} playerTurn= {playerTurn} className="right-border bottom-border"/>
            <Tile onClick = {() => onTileClick(5)} value={tiles[5]} playerTurn= {playerTurn} className="bottom-border"/>
            <Tile onClick = {() => onTileClick(6)} value={tiles[6]} playerTurn= {playerTurn} className="right-border"/>
            <Tile onClick = {() => onTileClick(7)} value={tiles[7]} playerTurn= {playerTurn} className="right-border"/>
            <Tile onClick = {() => onTileClick(8)} value={tiles[8]} playerTurn= {playerTurn}/>
            <Strike strikeClass = {strikeClass} /> {/* needed to destructure strikeclass */}
        </div>
     );
}
 
export default Board;