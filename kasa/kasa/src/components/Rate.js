import React from 'react';
import Star from "../images/star.png"
import StarVide from "../images/starVide.png"
import { data } from "../Info/logements";
import { useParams} from 'react-router-dom';


function Rating () {
    

     // Récupère la bonne fiche 
     const id = useParams();
     const ficheLogement = data.find(logement => logement.id === id.id);
 
    
     
     let noteLogement = [];
     let etoileComplete = true;
     for (let index = 0; index < 5; index++) {
         if(index === parseInt(ficheLogement?.rating)) {
             etoileComplete = false;
         }
         if(etoileComplete === true) {
             noteLogement.push(<img key={index} className="etoile" src={Star} alt={`${ficheLogement?.rating}/5`}/>)
         } else {
             noteLogement.push(<img key={index} className="etoile" src={StarVide} alt={`${ficheLogement?.rating}/5`}/>)
         }
     }
       return(<div> {noteLogement} </div>) 
};

export default Rating;