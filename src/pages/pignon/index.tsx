import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { IDoorDetails, IPignon, IWindowDetails, useFormContext } from '../../context/FormContext';

const AddPignon: React.FC = () => {
    const navigate = useNavigate();
    const { addPignon } = useFormContext();
    const [nbFenetres, setNbFenetres] = useState('');
    const [windowDetails, setWindowDetails] = useState<IWindowDetails[]>([]);
    const [nbPortes, setNbPortes] = useState('');
    const [doorDetails, setDoorDetails] = useState<IDoorDetails[]>([]);

    const [pignon, setPignon] = useState<IPignon>({
        hauteurPignon: '',
        hauteurMur: '',
        longueurMur: '',
        nbPortes: '',
        nbPointsLumineux: '',
        nbVentilation: '',
        fenetres: [],
        portes: []  // Ensure initial state aligns with the interface
    });

    const handlePignonChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPignon(prevPignon => ({ ...prevPignon, [name]: value }));
    };

    const handleNbFenetresChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value) || 0;
        setNbFenetres(e.target.value);
        setWindowDetails(prevDetails => {
            return Array(newCount).fill(null).map((_, i) => ({
                length: prevDetails[i]?.length || '',
                width: prevDetails[i]?.width || ''
            }));
        });
    };

    const handleNbPortesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value) || 0;
        setNbPortes(e.target.value);
        setDoorDetails(prevDetails => {
            return Array(newCount).fill(null).map((_, i) => ({
                height: prevDetails[i]?.height || '',
                width: prevDetails[i]?.width || ''
            }));
        });
    };

    const handleDoorDetailChange = (index: number, field: keyof IDoorDetails, value: string) => {
        setDoorDetails(prevDetails => 
            prevDetails.map((detail, idx) => 
                idx === index ? { ...detail, [field]: value } : detail
            )
        );
    };


    const handleWindowDetailChange = (index: number, field: keyof IWindowDetails, value: string) => {
        setWindowDetails(prevDetails => 
            prevDetails.map((detail, idx) => 
                idx === index ? { ...detail, [field]: value } : detail
            )
        );
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addPignon({ ...pignon, fenetres: windowDetails, portes: doorDetails });
        navigate("/devisappdylan/mesure");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <input type="text" name="hauteurPignon" placeholder="Hauteur du pignon" value={pignon.hauteurPignon} onChange={handlePignonChange} />
            <input
                type="text"
                name="hauteurMur"
                placeholder="Hauteur du mur"
                value={pignon.hauteurMur}
                onChange={handlePignonChange}
            />
            <input
                type="text"
                name="longueurMur"
                placeholder="Longueur du mur"
                value={pignon.longueurMur}
                onChange={handlePignonChange}
            />
            <input
                type="text"
                name="nbPointsLumineux"
                placeholder="NB point lumineux"
                value={pignon.nbPointsLumineux}
                onChange={handlePignonChange}
            />
            <input
                type="text"
                name="nbVentilation"
                placeholder="NB ventilation"
                value={pignon.nbVentilation}
                onChange={handlePignonChange}
            />
            {/* More pignon fields */}
            <input type="number" name="nbFenetres" placeholder="Nombre de fenêtres" value={nbFenetres} onChange={handleNbFenetresChange} />
            {windowDetails.map((detail, index) => (
                <div key={index}>
                    <input type="text" placeholder={`Fenêtre ${index + 1} longueur`} value={detail.length} onChange={(e) => handleWindowDetailChange(index, 'length', e.target.value)} />
                    <input type="text" placeholder={`Fenêtre ${index + 1} largeur`} value={detail.width} onChange={(e) => handleWindowDetailChange(index, 'width', e.target.value)} />
                </div>
            ))}
            <input type="number" name="nbPortes" placeholder="Nombre de portes" value={nbPortes} onChange={handleNbPortesChange} />
            {doorDetails.map((detail, index) => (
                <div key={index}>
                    <input type="text" placeholder={`Porte ${index + 1} hauteur`} value={detail.height} onChange={(e) => handleDoorDetailChange(index, 'height', e.target.value)} />
                    <input type="text" placeholder={`Porte ${index + 1} largeur`} value={detail.width} onChange={(e) => handleDoorDetailChange(index, 'width', e.target.value)} />
                </div>
            ))}

            <button type="submit">Ajouter Pignon</button>
        </form>
    );
};

export default AddPignon;
