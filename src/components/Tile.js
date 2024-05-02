const Tile = ({className, value, onClick, playerTurn}) => {
    let hoverClass = null;
    
    if (value == null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    } 

    return ( 
        // this is how you pass a prop to tile component
        // added a hoverclass so that it can show x and o's being hovered
        <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
            {value}
            
        </div>
     );
}
 
export default Tile;