import React, { useState } from "react";
import { addProduct } from "../../app/features/products/productsSlice";
import { useDispatch } from "react-redux";

export default function ModalAdd() {

    const [formData, setFormData] = useState({name: "", imgUrl: "", count: 0, weight: 0})
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        dispatch(addProduct(formData));
    };

    return (
        <div className="modal-add">
            <button className="btn btn-primary btn-lg add-btn" data-bs-toggle="modal" data-bs-target="#modalAdd">Add product</button>
            <div className="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="modalAddLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalAddLabel">Add product</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="form-input" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" id="form-input" required value={formData.name} onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="form-input" className="form-label">Count</label>
                                    <input type="number" min={1} className="form-control" name="count" id="form-input" required value={formData.count} onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="form-input" className="form-label">Weight (in grams)</label>
                                    <input type="number" min={10} className="form-control" name="weight" id="form-input" required value={formData.weight} onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="form-input" className="form-label">Image Url</label>
                                    <input type="text" className="form-control" name="imgUrl" id="form-input" required value={formData.imgUrl} onChange={handleChange}/>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" onClick={() => handleSubmit()} className="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

