import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export interface IPignon {
    hauteurPignon: string;
    hauteurMur: string;
    longueurMur: string;
    nbFenetres: string;
    nbPortes: string;
    nbPointsLumineux: string;
    nbVentilation: string;
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
    removePignon: (index: number) => void; // Déclaration ajoutée
}

const defaultState: IFormState = {
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
};

const FormContext = createContext<IFormContext | undefined>(undefined);

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};

export const FormProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [formState, setFormState] = useState<IFormState>(defaultState);

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
