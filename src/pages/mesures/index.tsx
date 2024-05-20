import React from 'react';
import { useNavigate } from 'react-router-dom';
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

    const handleDownloadCSV = () => {
    const { client, pignons } = formState;

    let csvContent = "data:text/csv;charset=utf-8,";
    // Adding header
    csvContent += "Client Details\n";
    csvContent += `Nom,Prénom,Adresse,Code Postal,Ville,Téléphone,Email\n`;
    csvContent += `${client.nom},${client.prenom},${client.adresse},${client.codePostal},${client.ville},${client.telephone},${client.email}\n`;
    
    // Adding Pignons details
    csvContent += "\nPignons Details\n";
    csvContent += "Hauteur du Pignon,Hauteur du Mur,Longueur du Mur,Nombre de Portes,Nombre de Points Lumineux,Nombre de Ventilations\n";
    pignons.forEach(pignon => {
        csvContent += `${pignon.hauteurPignon},${pignon.hauteurMur},${pignon.longueurMur},${pignon.nbPortes},${pignon.nbPointsLumineux},${pignon.nbVentilation}\n`;

        if (pignon.fenetres) {
            pignon.fenetres.forEach((fenetre, idx) => {
                csvContent += `,Fenêtre ${idx + 1},Longueur: ${fenetre.length},Largeur: ${fenetre.width}\n`;
            });
        }
        if (pignon.portes) {
            pignon.portes.forEach((porte, idx) => {
                csvContent += `,Porte ${idx + 1},Hauteur: ${porte.height},Largeur: ${porte.width}\n`;
            });
        }
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Client_Pignons_Details.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "Client_Pignons_Details.csv".
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
                            <li>Nombre de porte: {pignon.nbPortes}</li>
                            <li>Nombre de point lumineux: {pignon.nbPointsLumineux}</li>
                            <li>Nombre de ventilation: {pignon.nbVentilation}</li>
                            {pignon.fenetres && (
                                <ul>
                                    {pignon.fenetres.map((fenetre, idx) => (
                                        <li key={idx}>
                                            Fenêtre {idx + 1} - Longueur: {fenetre.length}, Largeur: {fenetre.width}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {pignon.portes && (
                                <ul>
                                    {pignon.portes.map((porte, idx) => (
                                        <li key={idx}>
                                            Fenêtre {idx + 1} - Longueur: {porte.height}, Largeur: {porte.width}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </ul>
                        <button onClick={() => handleRemovePignon(index)} className='border border-black p-2'>Supprimer</button>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={handleDownloadCSV} className='border border-black p-2'>Télécharger CSV</button>
            </div>
        </>
    );
};

export default Mesure;