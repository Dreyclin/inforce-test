import React from "react";
import "./ModalEdit.css"

export default function ModalEdit(props) {
    return (
    <div className="modal-edit">
        <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <img className="header-img card-img-top" src={props.imgUrl} alt="" />
                    </div>
                    <div className="modal-body">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="form-input">Name</label>
                                <input type="text" className="form-control" placeholder={props.name}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="form-input">Count</label>
                                <input type="number" className="form-control" placeholder={props.count}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="form-input">Weight (in grams)</label>
                                <input type="number" className="form-control" placeholder={props.weight}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="form-input">Image URL</label>
                                <input type="text" className="form-control" placeholder={props.imgUrl}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}