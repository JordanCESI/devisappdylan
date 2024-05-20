import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/FormContext';

const NewClient: React.FC = () => {
    const navigate = useNavigate();
    const { formState, setFormState } = useFormContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            client: {
                ...prevState.client,
                [name]: value
            }
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate("/devisappdylan/mesure"); // Ensure this is the correct route
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <input type="text" name="nom" placeholder="Nom" value={formState.client.nom} onChange={handleChange} />
            <input type="text" name="prenom" placeholder="Prénom" value={formState.client.prenom} onChange={handleChange} />
            <input type="text" name="adresse" placeholder="Adresse" value={formState.client.adresse} onChange={handleChange} />
            <input type="text" name="codePostal" placeholder="Code Postal" value={formState.client.codePostal} onChange={handleChange} />
            <input type="text" name="ville" placeholder="Ville" value={formState.client.ville} onChange={handleChange} />
            <input type="text" name="telephone" placeholder="Téléphone" value={formState.client.telephone} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formState.client.email} onChange={handleChange} />
            <button type="submit">Créer Client</button>
        </form>
    );
};

export default NewClient;
