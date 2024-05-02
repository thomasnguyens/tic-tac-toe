import GameState from "./GameState";

const Reset = ({gameState, onReset}) => {

    // if game in progress, the reset button won't display until then
    if(gameState === GameState.inProgress){
        return;
    }


    return ( 
        <div className="container">
            <div className="row mt-4">
            <button className="btn btn-primary" onClick={onReset}>
                Reset
            </button>
        </div>
        </div>
     );
}
 
export default Reset;