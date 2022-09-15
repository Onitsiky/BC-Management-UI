import React from "react";
import "./Table.css";

const Table = () => {
    return(
        <div className="container">
            <div className="table mt-5 text-center mb-4">
                <h2>Liste des balances</h2>
            </div>
            <table className="table table-stripped rounded-2 shadow text-center my-table" id="pdfdiv">
                <thead>
                    <tr>
                        <th scope="col" >Date</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Bénéfice</th>
                        <th scope="col">Perte</th>
                        <th scope="col">Gain</th>
                        <th scope="col">Dépense</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2022-09-09</td>
                        <td>20,000 Ar</td>
                        <td>2,000 Ar</td>
                        <td>3,000 Ar</td>
                        <td>20,000 Ar</td>
                        <td>9,000 Ar</td>
                    </tr>
                    <tr>
                        <td>2022-09-09</td>
                        <td>20,000 Ar</td>
                        <td>2,000 Ar</td>
                        <td>3,000 Ar</td>
                        <td>20,000 Ar</td>
                        <td>9,000 Ar</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;