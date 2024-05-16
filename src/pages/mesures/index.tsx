import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/FormContext';

const Mesure: React.FC = () => {
    const { formState, removePignon } = useFormContext();
    const navigate = useNavigate();

    const handleAddNewClient = () => {
        navigate("/devisappdylan/newclient");
    };

     const handleAddNewPignon = () => {
        navigate("/devisappdylan/addpignon");
    };



    const handleRemovePignon = (index: number) => {
        removePignon(index);
    };

    return (
        <>
            <div>
                <h1>Détails du Client</h1>
                <ul>
                    <li>Nom: {formState.client.nom}</li>
                    <li>Prénom: {formState.client.prenom}</li>
                    <li>Adresse: {formState.client.adresse}</li>
                    <li>Code Postal: {formState.client.codePostal}</li>
                    <li>Ville: {formState.client.ville}</li>
                    <li>Téléphone: {formState.client.telephone}</li>
                    <li>Email: {formState.client.email}</li>
                </ul>
            {/* <button onClick={handleAddNewClient} className='border border-black p-2'>Ajouter client</button> */}
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <label>Pignons : </label>
                <button onClick={handleAddNewPignon} className='border border-black p-2'>Ajouter un pignon</button>
            </div>
             <div>
                <h1>Pignons Ajoutés</h1>
                {formState.pignons.map((pignon, index) => (
                    <div key={index}>
                        <ul>
                            <li>Hauteur du pignon: {pignon.hauteurPignon}</li>
                            <li>Hauteur du mur: {pignon.hauteurMur}</li>
                            <li>Longueur du mur: {pignon.longueurMur}</li>
                            <li>Nombre de fenêtre: {pignon.nbFenetres}</li>
                            <li>Nombre de porte: {pignon.nbPortes}</li>
                            <li>Nombre de point lumineux: {pignon.nbPointsLumineux}</li>
                            <li>Nombre de ventilation: {pignon.nbVentilation}</li>
                        </ul>
                        <button onClick={() => handleRemovePignon(index)} className='border border-black p-2'>Supprimer</button>
                    </div>
                ))}
            </div>
        </>


    );
};

export default Mesure; 