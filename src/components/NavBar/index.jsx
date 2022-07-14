import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NavBar/styles.css';
import CartWidget from "../CartWidget";



export default function NavBar()

{
    return (
        
        <>
        
        <div className="pill-nav">
            <a className="logo" href=""> <h1>La Licorera</h1></a>
            <a className="menu" href="#beer">Cerveza</a>
            <a className="menu" href="#ron">Ron</a>
            <a className="menu" href="#tequila">Tequila</a>
            <a className="menu" href="#vodka">Vodka</a>
            <a className="menu" href="#wisky">Wisky</a>

            <CartWidget/>
            
        </div> 
        
        </>
       
    )

}