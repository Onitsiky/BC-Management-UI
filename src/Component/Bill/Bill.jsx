import React from "react";
import SearchBar from "../Navigation/SearchBar";
import Navbar from "../Navigation/Navbar";
import {FiEdit} from "react-icons/fi/index";
import {MdDelete} from "react-icons/md/index";
import "./Bill.css";
import { useState } from "react";
import ModalBill from "../Modal/ModalBill";
import UpdateBill from "../Modal/UpdateBill";
import { useEffect } from "react";
import instance from "../Config/axios";

const Factures = () => {
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [id, setId] = useState();
    function handleUpdate(){

        setShowUpdate(false);
    }
    function handleModal(){
        setShow(false);
    }
    function update (e){
        setName(e.target.value);
        setContact(e.targer.value);
        setShowUpdate(true)
    }
    useEffect(() => {
        const temp = instance.get("bills?page=0&page_size=5");
        temp.then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])
    return(
        <div>
            <div className="modal-wrapper"
                style={{ display: show ? "block" : "none"}}
            >
                <ModalBill closemodal={() => handleModal()}/>
            </div>
            <div className="modal-wrapper"
                style={{ display: showUpdate ? "block" : "none"}}
            >
                <UpdateBill name={name} contact={contact} id={id} closemodal={() => handleUpdate()}/>
            </div>
            <Navbar/>
            <div className="container">
            <div className="table mt-5 text-center mb-4">
                <h2>Liste des factures</h2>
            </div>
            <SearchBar label="Rechercher client..."/>
            <table className="table table-stripped rounded-2 shadow text-center my-table" id="pdfdiv">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Client</th>
                        <th scope="col">Date</th>
                        <th scope="col">Montant à payer</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data || []).map((elt, key) => (
                            <tr>
                                <td>{elt?.id}</td>
                                <td>{elt?.owner?.name}</td>
                                <td>{elt?.date}</td>
                                <td>{elt?.total}</td>
                                <td><FiEdit size={25} className="icon" onClick={(e) => {
                                    setShowUpdate(true);
                                    setId(elt?.id);
                                    setName(elt?.owner?.name);
                                    setContact(elt?.owner?.contact)
                                }}/> <MdDelete size={25} className="mx-3 icon"/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button className="btn btn-success mt-2" onClick={() => setShow(true)}>Ajouter</button>
        </div>
    </div>
    )
}
export default Factures;