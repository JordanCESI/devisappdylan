import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Définition du type pour les états du formulaire
export interface IFormState {
    nom: string;
    prenom: string;
    adresse: string;
    codePostale: string;
    commune: string;
    tel: string;
    email: string;
}


const NewClient : React.FC = () => {
    const navigate = useNavigate();

    // États pour stocker les valeurs des inputs
    const [formState, setFormState] = useState<IFormState>({
        nom: '',
        prenom: '',
        adresse: '',
        codePostale: '',
        commune: '',
        tel: '',
        email: ''
    });

    // Gère la mise à jour des états lors de la saisie dans les champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Fonction appelée à la soumission du formulaire
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // Empêche le rechargement de la page
        console.log('Form Submitted', formState);
        // Ici, vous pourriez ajouter une logique pour envoyer les données à un serveur par exemple
        navigate("/devisappdylan/mesure", { state: formState });
    };

    return (
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center items-center gap-10 p-8'>
            <div className='flex gap-4'>
                <label htmlFor="nom">Nom :</label>
                <input
                    type="text"
                    id="nom"
                    name="nom"
                    className='border border-gray-500'
                    value={formState.nom}
                    onChange={handleChange}
                />
            </div>
            <div className='flex gap-4'>
                <label htmlFor="prenom">Prénom :</label>
                <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    className='border border-gray-500'
                    value={formState.prenom}
                    onChange={handleChange}
                />
            </div>
             <div className='flex gap-4'>
                <label htmlFor="adresse">Adresse (numéro + rue) :</label>
                <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    className='border border-gray-500'
                    value={formState.adresse}
                    onChange={handleChange}
                />
            </div>
             <div className='flex gap-4'>
                <label htmlFor="codePostale">Code Postale :</label>
                <input
                    type="text"
                    id="codePostale"
                    name="codePostale"
                    className='border border-gray-500'
                    value={formState.codePostale}
                    onChange={handleChange}
                />
            </div>
             <div className='flex gap-4'>
                <label htmlFor="commune">Commune/Ville :</label>
                <input
                    type="text"
                    id="commune"
                    name="commune"
                    className='border border-gray-500'
                    value={formState.commune}
                    onChange={handleChange}
                />
            </div>
             <div className='flex gap-4'>
                <label htmlFor="tel">Téléphone :</label>
                <input
                    type="text"
                    id="tel"
                    name="tel"
                    className='border border-gray-500'
                    value={formState.tel}
                    onChange={handleChange}
                />
            </div>
            <div className='flex gap-4'>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className='border border-gray-500'
                    value={formState.email}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Créer</button>
          </div>
        </form>
    );
};

export default NewClient;