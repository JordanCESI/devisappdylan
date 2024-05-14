import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IFormState } from '../newClients';

const Mesure: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state as IFormState; 

    const handleAddNewClient = () => {
        navigate("/devisappdylan/newclient");
    };

    return (
        <div className='flex flex-col gap-2 items-center'>
            <h1>Informations du client</h1>
            <ul>
                <li>Nom: {formData.nom}</li>
                <li>Prénom: {formData.prenom}</li>
                <li>Adresse: {formData.adresse}</li>
                <li>Code Postale: {formData.codePostale}</li>
                <li>Commune: {formData.commune}</li>
                <li>Téléphone: {formData.tel}</li>
                <li>Email: {formData.email}</li>
            </ul>
            <button onClick={handleAddNewClient} className='border border-black p-2'>Ajouter client</button>
        </div>

    );
};

export default Mesure; 