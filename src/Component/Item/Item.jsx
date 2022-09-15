import React from "react";
import SearchBar from "../Navigation/SearchBar";
import Navbar from "../Navigation/Navbar";
import {FiEdit} from "react-icons/fi/index";
import {MdDelete} from "react-icons/md/index";
import { useState } from "react";
import ModalItem from "../Modal/ModalItem";
import ModalCategory from "../Modal/ModalCategory";
import UpdateItem from "../Modal/UpdateItem";
import UpdateCategory from "../Modal/UpdateCategory";
import { useEffect } from "react";
import instance from "../Config/axios";
import Pagination from "../Navigation/Pagination";

const Item = () => {
    const [showItem, setShowItem] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showUpdateItem, setUpdateItem] = useState(false);
    const [showUpdateCategory, setUpdateCategory] = useState(false);
    const [data, setData] = useState();
    const [category, setCategory] = useState();
    const [itemName, setItemName] = useState();
    const [itemPrice, setItemPrice] = useState();
    const [itemId, setItemId] = useState();
    const [catId, setCatId] = useState();
    const [catName, setCatName] = useState();
    const [page, setPage] = useState(0);
    const [catPage, setCatPage] = useState(0);
    function handleModalItem(){
        setShowItem(false);
    }
    function handleModalCategory(){
        setShowCategory(false);
    }
    function handleUpdateCategory(){
        setUpdateCategory(false);
    }function handleUpdateItem(){
        setUpdateItem(false);
    }
    useEffect(() => {
        const temp = instance.get("items?page="+page+"&page_size=5");
        temp.then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        const temporary = instance.get("categories?page="+catPage+"&page_size=4");
        temporary.then((res) => {
            setCategory(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },)
    return(
        <div>
            <div className="modal-wrapper"
                style={{ display: showItem ? "block" : "none"}}
            >
                <ModalItem closemodal={() => handleModalItem()}/>
            </div>
            <div className="modal-wrapper"
                style={{ display: showCategory ? "block" : "none"}}
            >
                <ModalCategory closemodal={() => handleModalCategory()}/>
            </div>
            <div className="modal-wrapper"
                style={{ display: showUpdateCategory ? "block" : "none"}}
            >
                <UpdateCategory catId={catId} catName={catName} closemodal={() => handleUpdateCategory()}/>
            </div>
            <div className="modal-wrapper"
                style={{ display: showUpdateItem ? "block" : "none"}}
            >
                <UpdateItem itemId={itemId} itemName={itemName} itemPrice={itemPrice} closemodal={() => handleUpdateItem()}/>
            </div>
            <Navbar/>
            <div className="container">
            <div className="table mt-5 text-center mb-4">
                <h2>Liste des articles et catégories de dépense</h2>
            </div>
            <div className="row">
            <SearchBar label="Rechercher article..."/>
                <div className="col-6">
                <table className="table table-stripped rounded-2 shadow text-center my-table" id="pdfdiv">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prix unitaire</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data || []).map((elt, key) => (
                            <tr>
                                <td>{elt?.id}</td>
                                <td>{elt?.name}</td>
                                <td>{elt?.unitPrice}</td>
                                <td><FiEdit size={25} className="icon" onClick={() => {
                                    setUpdateItem(true);
                                    setItemId(elt?.id);
                                    setItemName(elt?.name);
                                    setItemPrice(elt?.unitPrice);
                                    }}/> <MdDelete size={25} className="mx-3 icon"/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination page={page} setPage={setPage} data={data}/>
            <button className="btn btn-success mt-2" onClick={() => setShowCategory(true)}>Ajouter</button>
                </div>
                <div className="col-6">
                <table className="table table-stripped rounded-2 shadow text-center my-table" id="pdfdiv">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Catégorie</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (category || []).map((elt, key) => (
                            <tr>
                                <td>{elt?.id}</td>
                                <td>{elt?.categoryName}</td>
                                <td><FiEdit size={25} className="icon" onClick={() => {
                                    setUpdateCategory(true);
                                    setCatId(elt?.id);
                                    setCatName(elt?.categoryName);
                                    }}/> <MdDelete size={25} className="mx-3 icon"/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination page={catPage} setPage={setCatPage} data={category}/>
            <button className="btn btn-success mt-2" onClick={() => setShowItem(true)}>Ajouter</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Item;