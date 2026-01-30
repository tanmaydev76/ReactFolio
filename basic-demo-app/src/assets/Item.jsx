import './Item.css'

function Item(props){
    const itemName = props.name; 
    return (<div className="Item">
         {itemName}
    </div>)
}

export default Item;