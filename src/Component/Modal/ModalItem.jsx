import React from "react";
import { useState } from "react";
import instance from "../Config/axios";
import "./Modal.css";

const ModalItem = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const data = {
        "name": name,
        "unitPrice": price
    }
    function addItem(){
        instance.put("items", [data]);
    }
    return(
        <div className="container col-3 contModal p-4 rounded-4">
            <div className="modal-header">
                    <h5 className="modal-title">Ajouter un article</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div className="modal-body col-12">
                <form>
                    <label htmlFor="">Nom de l'article </label><br/>
                    <input type="text" className=" form-control mb-3" placeholder="Nom de l'article"
                            onChange={(e) => setName(e.target.value)}
                            unitPrice           />
                    <label htmlFor="">Prix unitaire</label><br/>
                    <input type="text" className=" form-control mb-3" placeholder="Prix unitaire"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <div className="mt-2">
                        <button className="btn btn-secondary mx-2"
                            onClick={() => addItem()}
                        >Ajouter</button>
                        <button className="btn btn-secondary">Annuler</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}
export default ModalItem; 