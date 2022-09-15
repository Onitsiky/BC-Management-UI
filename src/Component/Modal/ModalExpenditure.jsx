import React from "react";
import { useState, useEffect } from "react";
import "./Modal.css";
import instance from "../Config/axios";

const ModalExpenditure = () => {
    const [data, setData] = useState();
    const [descri, setDescri] = useState();
    const [cat, setCat] = useState([]);
    const [montant, setMontant] = useState();
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    const send = {
        "description": descri,
        "category": {
            "id": cat[0],
            "categoryName": cat[1]
        },
        "date": date,
        "montant": montant
    }

    function addExpenditure (){
        instance.put("expenditures", [send]);
    }

    useEffect(() => {
        const temp = instance.get("categories?page=0&page_size=100");
        temp.then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return(
        <div className="container col-3 contModal p-4 rounded-4">
            <div className="modal-header">
                    <h5 className="modal-title">Dépense</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div className="modal-body col-12">
                <form>
                    <label htmlFor="">Description de la dépense</label><br/>
                    <input type="text" className=" form-control mb-3" placeholder="Description"
                        onChange={(e) => setDescri(e.target.value)}
                    />

                    <label htmlFor="">Catégorie</label><br/>
                    <select className="form-select" onChange={(e) => setCat(e.target.value.split(" "))}>
                    {(data || []).map((elt, key) => (
                            <option value={elt?.id +" " + elt?.categoryName} >{elt?.categoryName}</option>
                        ))}
                    </select>
                    <label htmlFor="">Montant de la dépense</label><br/>
                    <input type="text" className=" form-control mb-3" placeholder="Montant"
                        onChange={(e) => setMontant(e.target.value)}
                    />
                    <div className="mt-2">
                        <button className="btn btn-secondary mx-2" 
                            onClick={()=> addExpenditure()}
                        >Ajouter</button>
                        <button className="btn btn-secondary">Annuler</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}
export default ModalExpenditure; 