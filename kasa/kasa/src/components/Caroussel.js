import React from 'react';
import { useState } from 'react';
import Arrow1 from "../images/Arrow1.svg"
import Arrow2 from "../images/Arrow2.svg"



const Caroussel = (props) => {

    const photo = props.photo;
    const [i, setI] = useState(0)

     //Quand il y a qu'une seul photo , j'affiche la seul photo du tableau
       if (photo.length === 1) {
        return (
            <div className={props.className}>
                <img src={photo[i]} alt={photo[i]} />
            </div>
        );
    }
     // Si je clique sur previous je décrémente de -1 l'index du tableau 
    const Previous = () => {
        setI(i - 1);
        if (i === 0) setI(photo.length - 1) //Quand l'index arrive au début , je regle la valeur de i sur le dernier element du tableau 
    }

     // Si je clique sur previous j'incrémente de 1 l'index du tableau 
    const Next = () => {
        setI(i + 1);
        if (i === (photo.length - 1)) setI(0) //Quand l'index arrive a la fin , je regle la valeur de i sur le premier element du tableau 
    }

     // Si plus d'un element , je retourne le html du caroussel(bouton gauche ou bouton droit et compteur) 
    return (
        <div className={props.className}>
          <div className='slider'>
            <span > <img src={Arrow1} className="gauche" onClick={Previous}></img></span>
             <span > <img src={Arrow2} className="droite" onClick={Next}></img></span>   
                <div className="bullet">
                <p>{i + 1}/{photo.length}</p>  
                </div>
            <img src={photo[i]} alt={photo[i]} />
                
         </div>
         
        </div>
    );
};

export default Caroussel;