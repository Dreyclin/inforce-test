import { useSelector } from "react-redux";
import ListItem from "./components/ListItem/ListItem";
import ModalAdd from "./components/ModalAdd/ModalAdd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeProduct, getProductsData } from "./app/features/products/productsSlice";


function App() {

  const products = useSelector(state => state.products.items)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsData())
  }, [removeProduct])

  function handleRemove(id) {
    dispatch(removeProduct(id))
  }

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="cards-container">
        {products != null &&products.map(product => {
          return <ListItem imgUrl={product.imgUrl} name={product.name} count={product.count} weight={product.weight} id={product._id} removeProduct={handleRemove}/>
        })}
      </div>
      <ModalAdd />
    </div>
  );
}

export default App;