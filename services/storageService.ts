import { ClassData } from '../types';

const STORAGE_KEY = 'rouletteGameState';

export const getClasses = (): ClassData[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load classes from localStorage", error);
    return [];
  }
};

export const saveClasses = (classes: ClassData[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
  } catch (error) {
    console.error("Failed to save classes to localStorage", error);
  }
};
