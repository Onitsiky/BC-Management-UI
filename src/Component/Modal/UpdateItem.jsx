import React from "react";
import instance from "../Config/axios";
import "./Modal.css";
import { useState } from "react";

const UpdateItem = ({itemName, itemPrice, itemId}) => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const send = {
        "id": itemId,
        "name": name,
        "unitPrice": price
    }

    function update (){
        instance.put("items", [send])
    }
    return(
        <div className="container col-3 contModal p-4 rounded-4">
            <div className="modal-header">
                    <h5 className="modal-title">Modifier un article</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div className="modal-body col-12">
                <form>
                    <label htmlFor="">Nom de l'article </label><br/>
                    <input type="text" className=" form-control mb-3" defaultValue={itemName}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="">Prix unitaire</label><br/>
                    <input type="text" className=" form-control mb-3" defaultValue={itemPrice}
                        onChange={(e) => setPrice(e.target.value)}
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
export default UpdateItem; 