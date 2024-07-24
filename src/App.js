import { useSelector } from "react-redux";
import ListItem from "./components/ListItem/ListItem";
import ModalAdd from "./components/ModalAdd/ModalAdd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct, getProductsData, editProduct } from "./app/features/products/productsSlice";


function App() {

  const products = useSelector(state => state.products.items)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({name: "", imgUrl: "", count: 0, weight: 0})

  function handleChange(event) {
      const { name, value } = event.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value
      }));
  };

  function handleAddSubmit() {
      dispatch(addProduct(formData));
  };

  function handleEditSubmit(id) {
    dispatch(editProduct({formData, id}));
  }

  function handleRemove(id) {
    dispatch(removeProduct(id))
  }



  useEffect(() => {
    dispatch(getProductsData())
  }, [removeProduct])


  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="cards-container">
        {products != null &&products.map(product => {
          return <ListItem formData={formData} change={handleChange} submit={handleEditSubmit} imgUrl={product.imgUrl} name={product.name} count={product.count} weight={product.weight} id={product._id} removeProduct={handleRemove}/>
        })}
      </div>
      <ModalAdd change={handleChange} submit={handleAddSubmit} formData={formData}/>
    </div>
  );
}

export default App;