import React from "react";
import Navbar from "../Navigation/Navbar";
import SearchBar from "../Navigation/SearchBar";
import {FiEdit} from "react-icons/fi/index";
import {MdDelete} from "react-icons/md/index";
import { useState } from "react";
import ModalExpenditure from "../Modal/ModalExpenditure";
import UpdateExpenditure from "../Modal/UpdateExpenditure";
import { useEffect } from "react";
import instance from "../Config/axios";

const Expenditure = () => {
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [data, setData] = useState();
    const [upDate, setUpDate] = useState();
    const [upId, setUpId] = useState();
    const [upDesc, setUpDesc] = useState();
    const [upMontant, setUpMontant] = useState();
    const [upCatId, setUpCatId] = useState();
    function handleUpdate(){
        setShowUpdate(false);
    }
    function handleModal (){
        setShow(false);
    }
    useEffect(() => {
        const temp = instance.get("expenditures?page=0&page_size=5");
        temp.then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return(
        <div>
            <div className="modal-wrapper"
                style={{ display: show ? "block" : "none"}}
            >
                <ModalExpenditure closemodal={() => handleModal()}/>
            </div>
            <div className="modal-wrapper"
                style={{ display: showUpdate ? "block" : "none"}}
            >
                <UpdateExpenditure
                upDate={upDate}
                upId={upId}
                upDesc={upDesc}
                upMontant={upMontant}
                upCatId={upCatId}
                closemodal={() => handleUpdate()}/>
            </div>
            <Navbar/>
            <div className="container">
            <div className="table mt-5 text-center mb-4">
                <h2>Liste des dépenses</h2>
            </div>
            <SearchBar label="Rechercher par catégorie..."/>
            <table className="table table-stripped rounded-2 shadow text-center my-table" id="pdfdiv">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Categorie</th>
                        <th scope="col">Montant dépensé</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data || []).map((elt, key) => (
                            <tr>
                                <td>{elt?.id}</td>
                                <td>{elt?.date}</td>
                                <td>{elt?.description}</td>
                                <td>{elt?.category?.categoryName}</td>
                                <td>{elt?.montant}</td>
                                <td><FiEdit size={25} className="icon" onClick={() => {
                                    setShowUpdate(true);
                                    setUpCatId(elt?.category?.id);
                                    setUpDate(elt?.date);
                                    setUpDesc(elt?.description)
                                    setUpId(elt?.id)
                                    setUpMontant(elt?.montant)
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
export default Expenditure;