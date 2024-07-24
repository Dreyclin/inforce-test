import { useSelector } from "react-redux";
import ListItem from "./components/ListItem/ListItem";
import ModalAdd from "./components/ModalAdd/ModalAdd";

function App() {

  const products = useSelector(state => state.products.items)

  console.log(products);

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="cards-container">
        {products.map(product => {
          return <ListItem imgUrl={product.imgUrl} name={product.name} count={product.count} weight={product.weight}/>
        })}
      </div>
      <ModalAdd />
    </div>
  );
}

export default App;