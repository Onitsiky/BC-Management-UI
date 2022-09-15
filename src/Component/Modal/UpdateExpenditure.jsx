import React from "react";
import { useState } from "react";
import instance from "../Config/axios";
import "./Modal.css";

const UpdateExpenditure = ({upDate,upId,upDesc,upMontant, upCatId}) => {
    const [descri, setDescri] = useState();
    const [montant, setMontant] = useState();
    const [cat, setCat] = useState();
    const send = {
        "id": upId,
        "description": descri,
        "category": {
            "id": upCatId,
            "categoryName": cat
        },
        "date": upDate,
        "montant": montant
    }
    function update (){
        instance.put("expenditures",[send]);
    }
    return(
        <div className="container col-3 contModal p-4 rounded-4">
            <div className="modal-header">
                    <h5 className="modal-title">Modifier une dépense</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div className="modal-body col-12">
                <form>
                    <label htmlFor="">Description de la dépense</label><br/>
                    <input type="text" className=" form-control mb-3" defaultValue={upDesc}
                        onChange={(e) => setDescri(e.target.value)}
                    />
                    <label htmlFor="">Catégorie</label><br/>
                    <select className="form-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <label htmlFor="">Montant de la dépense</label><br/>
                    <input type="text" className=" form-control mb-3" defaultValue={upMontant}
                        onChange={(e) => setMontant(e.target.value)}
                    />
                    <div className="mt-2">
                        <button className="btn btn-secondary mx-2"
                            onClick={() => update()}
                        >Modifier</button>
                        <button className="btn btn-secondary">Annuler</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}
export default UpdateExpenditure; 