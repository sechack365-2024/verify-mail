'use client';
import React, { useState, useContext } from 'react';
import { GHuntData } from '@/app/types/ghunt-data';

type GHuntContextType = {
    ghuntData: GHuntData;
    setGhuntData: React.Dispatch<React.SetStateAction<GHuntData>>;
};
  
const GHuntDataContext = React.createContext<GHuntContextType | undefined>(undefined);
  
const initGHuntData = {
    email: '',
    name: '',
    img: '',
    profile: ''
};
export const GHuntDataProvider = (
    { children }: { children: React.ReactNode }
) => {
    const [ghuntData, setGhuntData] = useState<GHuntData>(initGHuntData);
    return (
        <GHuntDataContext.Provider value={{ ghuntData, setGhuntData }}>
            {children}
        </GHuntDataContext.Provider>
    )
}
export const useGHuntDataState = () => {
    const context = useContext(GHuntDataContext);
    if (!context) {
        null
    }
  return context;
};
  



