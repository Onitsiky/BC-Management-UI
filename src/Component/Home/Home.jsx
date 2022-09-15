import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MyCard from "../Card/MyCard";
import instance from "../Config/axios";
import Navbar from "../Navigation/Navbar";
import Table from "../Table/Table";

const Home = () => {
    const [card, setCard] = useState("");
    const date = new Date().getFullYear() + "-0" + new Date().getMonth() + "-" +new Date().getDate();

    useEffect(() => {
        const data = instance.get("balance?date=2022-09-15");
        data.then((res) => {
            console.log(res.data);
            setCard(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    return(
        <div>
            <Navbar/>
            <br/><br/><br/>
            <div className="row d-flex justify-content-center ">
                <MyCard 
                    date="Date"
                    title="Balance" 
                    value={card?.totalRest}
                />
                <MyCard 
                    date="Date"
                    title="Bénéfice" 
                    value={card?.benefits}
                />
                <MyCard 
                    date="Date"
                    title="Perte" 
                    value={card?.lose}
                />
                <MyCard 
                    date="Date"
                    title="Gain" 
                    value={card?.gain}
                />
                <MyCard 
                    date="Date"
                    title="Dépense" 
                    value={card?.expenditure}
                />
            </div>
            <Table/>
        </div>
    )
}
export default Home;