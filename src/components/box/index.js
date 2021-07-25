import {useAppContext} from "@contexts/appContext";
import "@components/box/Box.scss"

const Box = ({item}) => {
    const {context, setContext} = useAppContext();
    const {colorBoard} = context;

    const swapBoxes = (fromBox, toBox) => {
        let boxes = [...colorBoard]
        let fromIndex = -1;
        let toIndex = -1;

        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].id === fromBox.id) {
                fromIndex = i;
            }
            if (boxes[i].id === toBox.id) {
                toIndex = i;
            }
        }

        if (fromIndex !== -1 && toIndex !== -1) {
            boxes[fromIndex] = {id: fromBox.id, color: toBox.color};
            boxes[toIndex] = {id: toBox.id, color: fromBox.color};

            setContext({...context, colorBoard: boxes})
        }
    };

    const handleDragStart = (data, event) => {
        let content = JSON.stringify(data)
        event.dataTransfer.setData("dragContent", content);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        return false;
    };

    const handleDrop = (data, event) => {
        event.preventDefault();

        let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
        let toBox = data

        swapBoxes(fromBox, toBox);
        return false;
    };

    return (
        <div draggable="true"
             onDragStart={event => handleDragStart(item, event)}
             onDragOver={event => handleDragOver(event)}
             onDrop={event => handleDrop(item, event)}
             className="Board__item"
             style={{backgroundColor: item.color}}
             key={item.id}>
            {item.color}
        </div>
    )
}

export default Box
