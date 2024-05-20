import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export interface IWindowDetails {
    length: string;
    width: string;
}

export interface IDoorDetails {
    height: string;
    width: string;
}


export interface IPignon {
    hauteurPignon: string;
    hauteurMur: string;
    longueurMur: string;
    nbPortes: string;
    nbPointsLumineux: string;
    nbVentilation: string;
    fenetres: IWindowDetails[];
    portes: IDoorDetails[]; // Add this line for door details
}

export interface IClient {
    nom: string;
    prenom: string;
    adresse: string;
    codePostal: string;
    ville: string;
    telephone: string;
    email: string;
}

export interface IFormState {
    pignons: IPignon[];
    client: IClient;
}

export interface IFormContext {
    formState: IFormState;
    setFormState: Dispatch<SetStateAction<IFormState>>;
    addPignon: (pignon: IPignon) => void;
    removePignon: (index: number) => void;
}

const FormContext = createContext<IFormContext | undefined>(undefined);

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) throw new Error('useFormContext must be used within a FormProvider');
    return context;
};

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formState, setFormState] = useState<IFormState>({
        pignons: [],
        client: {
            nom: '',
            prenom: '',
            adresse: '',
            codePostal: '',
            ville: '',
            telephone: '',
            email: ''
        }
    });

    const addPignon = (pignon: IPignon) => {
        setFormState(prevState => ({
            ...prevState,
            pignons: [...prevState.pignons, pignon]
        }));
    };

    const removePignon = (index: number) => {
        setFormState(prevState => ({
            ...prevState,
            pignons: prevState.pignons.filter((_, i) => i !== index)
        }));
    };

    return (
        <FormContext.Provider value={{ formState, setFormState, addPignon, removePignon }}>
            {children}
        </FormContext.Provider>
    );
};
