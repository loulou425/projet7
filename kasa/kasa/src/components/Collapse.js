import React from 'react';
import { useState } from 'react';
import '../styles/CollapseSous.css'
import Vector from "../images/Vector.svg"
import Vector2 from "../images/Vector2.svg"

function Collapse(props) {
    const nom = props.nom; 

    const [open, setOpen] = useState(false);

    //Comportement du click sur le collapse 
    const HandleClick = () => {
    //expresion ternaire: si le prédicat est vrai alor on prend A (setopen est true) , sinn on prend B (setopen est false) (question ? A : B)
        (open === false) ? setOpen(true) : setOpen(false);
    }

    if (open === true) {
        return (
            <div className={props.className}>

                <span className='ImgCollapse'>{nom}<img src={Vector2} className="fa-solid fa-chevron-up ouvert" onClick={HandleClick}></img></span>
                <span className='ChildCollapse'>
                    {props.children}
                </span>

            </div>
        );
    }
    return (
        <div className={props.className}>
            <span className='ImgCollapse'> {nom} <img  src={Vector} className="fa-solid fa-chevron-down ferme" onClick={HandleClick}></img> </span>
        </div>
    ); 
};

export default Collapse;