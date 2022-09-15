import React from "react";
import { useState } from "react";
import instance from "../Config/axios";
import "./Modal.css";

const UpdateCategory = ({catName, catId}) => {
    const [name, setName] = useState();
    const send = {
        "id": catId,
        "categoryName": name
    }
    function update (){
        instance.put("categories", [send]);
    }
    return(
        <div className="container col-3 contModal p-4 rounded-4">
            <div className="modal-header">
                    <h5 className="modal-title">Modifier une catégorie</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div className="modal-body col-12">
                <form>
                    <label htmlFor="">Nom de la catégorie </label><br/>
                    <input type="text" className=" form-control mb-3" defaultValue={catName}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="mt-2">
                        <button className="btn btn-secondary mx-2" onClick={() => update()}>Modifier</button>
                        <button className="btn btn-secondary">Annuler</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}
export default UpdateCategory; 