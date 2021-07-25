import {useAppContext} from "@contexts/appContext";
import Box from "@components/box";
import "@components/board/Board.scss";

const Board = () => {
    const {context} = useAppContext();
    const {colorBoard} = context;

    return (
        <div className="Board">
            <h1>Color Board</h1>
            <p>*** Drag and drop a box to another on the board in order to swap them ***</p>
            <div className="Board__table">
                {colorBoard.map((item) => <Box key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default Board
