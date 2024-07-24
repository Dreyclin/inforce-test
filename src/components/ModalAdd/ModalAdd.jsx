import React from "react";


export default function ModalAdd() {
    return (
        <div className="modal-add">
            <button className="btn btn-primary btn-lg add-btn" data-bs-toggle="modal" data-bs-target="#modalAdd">Add product</button>
            <div class="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="modalAddLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalAddLabel">Add product</h5>
                        </div>
                        <div class="modal-body">
                            <form action="/addProduct" method="post">
                                <div className="mb-3">
                                    <label htmlFor="form-input" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" id="form-input" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="form-input" className="form-label">Count</label>
                                    <input type="number" min={1} className="form-control" name="count" id="form-input" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="form-input" className="form-label">Weight (in grams)</label>
                                    <input type="number" min={10} className="form-control" name="weight" id="form-input" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="form-input" className="form-label">Image Url</label>
                                    <input type="text" className="form-control" name="imgUrl" id="form-input" required/>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

