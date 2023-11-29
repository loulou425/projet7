import React from 'react';
import { data } from "../Info/logements";
import { useNavigate } from "react-router-dom";
import "../styles/Gallery.css"


const Gallery = (props) => {
    const lien = useNavigate();

    const HandleId = (id) => {
        lien("/fichelogement/" + id)
    }
    return (
     <div className='Gallery'>
        <ul className={props.className}>
          
            {data.map((logements) => (  
                <li key={logements.id} onClick={() => HandleId(logements.id)}>
                    <img src={logements.cover} alt="couverture du bien" />
                    <p>{logements.title}</p>
                </li>
            ))}
        </ul>
     </div>
    );
};



export default Gallery;