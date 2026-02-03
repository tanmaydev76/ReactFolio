import './Item.css'
import ItemDate from './assets/ItemDate'

function Item(props){
    const itemName = props.name; 
    return (<div className="Item">
         <div> {itemName}</div>
         <div> <ItemDate/></div>
    </div>)
}

export default Item;