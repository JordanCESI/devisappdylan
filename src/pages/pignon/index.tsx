import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPignon, useFormContext } from '../../context/FormContext';

const AddPignon: React.FC = () => {
    const navigate = useNavigate();
    const { addPignon } = useFormContext();
    const [pignon, setPignon] = useState<IPignon>({
        hauteurPignon: '',
        hauteurMur: '',
        longueurMur: '',
        nbFenetres: '',
        nbPortes: '',
        nbPointsLumineux: '',
        nbVentilation: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPignon(prevPignon => ({ ...prevPignon, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addPignon(pignon);
        navigate("/devisappdylan/mesure");
    };

    return (
       <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <input
                type="text"
                name="hauteurPignon"
                placeholder="Hauteur du pignon"
                value={pignon.hauteurPignon}
                onChange={handleChange}
            />
            <input
                type="text"
                name="hauteurMur"
                placeholder="Hauteur du mur"
                value={pignon.hauteurMur}
                onChange={handleChange}
            />
            <input
                type="text"
                name="longueurMur"
                placeholder="Longueur du mur"
                value={pignon.longueurMur}
                onChange={handleChange}
            />
            <input
                type="text"
                name="nbFenetres"
                placeholder="NB Fenêtre"
                value={pignon.nbFenetres}
                onChange={handleChange}
            />
            <input
                type="text"
                name="nbPortes"
                placeholder="NB Porte"
                value={pignon.nbPortes}
                onChange={handleChange}
            />
            <input
                type="text"
                name="nbPointsLumineux"
                placeholder="NB point lumineux"
                value={pignon.nbPointsLumineux}
                onChange={handleChange}
            />
            <input
                type="text"
                name="nbVentilation"
                placeholder="NB ventilation"
                value={pignon.nbVentilation}
                onChange={handleChange}
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Valider</button>
        </form>
    );
};

export default AddPignon;
