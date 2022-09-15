import React from "react";
import { useState,useEffect } from "react";
import "./Modal.css";
import instance from "../Config/axios";

const UpdateBill = ({closemodal, name, contactUp,id}) => {
    const [data,setData] = useState();
    const [client, setClient] = useState();
    const [contact, setContact] = useState();
    const [article, setArticle] = useState();

    const send = {
        "id": id,
        "owner": client,
        "contact": contact,
        "item": [article]
    }

    function update(){
        instance.put("/bills", [send]);
    }
    useEffect(() => {
        const temp = instance.get("items?page=0&page_size=100");
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
                    <h5 className="modal-title">Modifier une facture</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" onClick={closemodal}>&times;</span>
                    </button>
                </div>
            <div className="modal-body col-12">
                <form>
                    <label htmlFor="">Nom du client </label><br/>
                    <input type="text" className=" form-control mb-3" defaultValue={name}
                        onChange={(e) => setClient(e.target.value)}
                    />
                    <label htmlFor="">Contact du client</label><br/>
                    <input type="text" className=" form-control mb-3" defaultValue={contactUp}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <label htmlFor="">Article</label><br/>
                    <select className="form-select" onChange={(e) => setArticle(e.target.value)}>
                        {(data || []).map((elt, key) => (
                            <option value={elt?.name} >{elt?.name}</option>
                        ))}
                    </select>
                    <div className="mt-2">
                        <button className="btn btn-secondary mx-2" onClick={() => update()}>Modifier</button>
                        <button className="btn btn-secondary" onClick={closemodal}>Annuler</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}
export default UpdateBill; 