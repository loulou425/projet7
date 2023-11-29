import React from 'react';
import { useParams } from 'react-router-dom';
import Caroussel from '../components/Caroussel';
import Header from '../components/Header';
import { data } from "../Info/logements";
import Collapse from "../components/CollapseSous";
import Footer from "../components/Footer"
import Rating from '../components/Rate';
import NotFoundPage from './NotFoundPage';
import "../styles/ficheLogement.css";


const FicheLogement = () => {

    const urlParameters = useParams();
    const Id = urlParameters.id;

    const index = data.findIndex(element => element.id === Id);


    if (index === -1) {
        return (<NotFoundPage />)
    }

    return (
        <div className='ficheLogement'>
            <Header />
            <div className='body'>
                <Caroussel photo={data[index].pictures} className="caroussel" />
                <div className='information'>
                    <div className='adress-tag'>
                        <span className='titre-adresse'>
                            <p className='titre'> {data[index].title}</p>
                            <p className='adresse'> {data[index].location}</p>
                        </span>
                        <span className='tag'>
                            {data[index].tags.map((tag, index) => (
                                <p key={index}> {tag}</p>
                            ))}
                        </span>

                    </div>
                    <div className='agent-note'>
                        <div className='agent'>
                            <p>{data[index].host.name}</p>
                            <img src={data[index].host.picture} alt={data[index].host.name} />
                        </div>
                        <div className='note'>
                            <Rating rate={data[index].rating} className="rate" />
                        </div>
                    </div>
                </div>
                <div className='description-equippement'>
                    <Collapse className="description" nom="Description">
                        {data[index].description}
                    </Collapse>
                    <Collapse className="equipement" nom="Equipements">
                        {data[index].equipments.map((equip, index) => (
                            <p key={index}>{equip}</p>
                        ))}
                    </Collapse>
                </div>
            </div>
            <Footer />
        </div>
    );

};

export default FicheLogement;