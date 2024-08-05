import React from "react";
import "./ModalEdit.css"
import { useContext } from "react";
import { DataContext } from "../../App";

export default function ModalEdit(props) {
    const data = useContext(DataContext);
    
    return (
    <div className="modal-edit">
        <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header modal-edit-header">
                        <img className="header-img card-img-top" src={props.imgUrl} alt="" />
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="form-input">Name</label>
                                <input type="text" name="name" className="form-control" placeholder={props.name} value={data.formData.name} onChange={(e) => data.change(e)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="form-input">Count</label>
                                <input type="number" min={1} name="count" className="form-control" placeholder={props.count} value={data.formData.count} onChange={(e) => data.change(e)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="form-input">Weight (in grams)</label>
                                <input type="number" min={10} name="weight" className="form-control" placeholder={props.weight} value={data.formData.weight} onChange={(e) => data.change(e)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="form-input">Image URL</label>
                                <input type="text" name="imgUrl" className="form-control" placeholder={props.imgUrl} value={data.formData.imgUrl} onChange={(e) => data.change(e)}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => data.submit(props.itemId)}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}