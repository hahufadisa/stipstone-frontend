import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Materials, Washes, Kromki, Boards } from './types';

// Интерфейс для данных геометрии
interface GeometryData {
    selectedShapes: string[];
    width?: number;
    height?: number;
    sideA?: number;
    sideB?: number;
    sideC?: number;
    sideD?: number;
    pA?: number;
    pB?: number;
    pC?: number;
    pD?: number;
    pE?: number;
    pF?: number;
    radA?: number;
    radB?: number;
}

interface MaterialData {
    brand: string;
    faktura: string;
    color: string;
    selectedMaterial?: Materials;
}

interface BoardData {
    selectedKromka?: Kromki;
    selectedBoard?: Boards;
}

interface WashData {
    selectedWash?: Washes;
}

interface ExtraWorksData {
    selectedWorks: string[];
}

interface CalculatorState {
    geometry: GeometryData;
    material: MaterialData;
    boards: BoardData;
    wash: WashData;
    extraWorks: ExtraWorksData;

    updateGeometry: (data: Partial<GeometryData>) => void;

    updateMaterial: (data: Partial<MaterialData>) => void;

    updateBoards: (data: Partial<BoardData>) => void;

    updateWash: (data: Partial<WashData>) => void;

    updateExtraWorks: (data: Partial<ExtraWorksData>) => void;

    getCalculatorData: () => object;

    clearAll: () => void;
}

const initialState = {
    geometry: {
        selectedShapes: [],
        width: undefined,
        height: undefined,
        sideA: undefined,
        sideB: undefined,
        sideC: undefined,
        sideD: undefined,
        pA: undefined,
        pB: undefined,
        pC: undefined,
        pD: undefined,
        pE: undefined,
        pF: undefined,
        radA: undefined,
        radB: undefined,
    },
    material: {
        brand: 'grandex',
        faktura: 'any',
        color: 'any',
        selectedMaterial: undefined,
    },
    boards: {
        selectedKromka: undefined,
        selectedBoard: undefined,
    },
    wash: {
        selectedWash: undefined,
    },
    extraWorks: {
        selectedWorks: [],
    },
};

export const useCalculatorStore = create<CalculatorState>()(
    persist(
        (set, get) => ({
            ...initialState,

            updateGeometry: (data) =>
                set((state) => ({
                    geometry: { ...state.geometry, ...data }
                })),

            updateMaterial: (data) =>
                set((state) => ({
                    material: { ...state.material, ...data }
                })),

            updateBoards: (data) =>
                set((state) => ({
                    boards: { ...state.boards, ...data }
                })),

            updateWash: (data) =>
                set((state) => ({
                    wash: { ...state.wash, ...data }
                })),

            updateExtraWorks: (data) =>
                set((state) => ({
                    extraWorks: { ...state.extraWorks, ...data }
                })),

            getCalculatorData: () => {
                const state = get();
                return {
                    timestamp: new Date().toISOString(),
                    geometry: state.geometry,
                    material: state.material,
                    boards: state.boards,
                    wash: state.wash,
                    extraWorks: state.extraWorks,
                };
            },

            clearAll: () => set(initialState),
        }),
        {
            name: 'calculator-storage',
            storage: {
                getItem: (name) => {
                    const str = sessionStorage.getItem(name);
                    if (!str) return null;
                    return JSON.parse(str);
                },
                setItem: (name, value) => {
                    sessionStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: (name) => sessionStorage.removeItem(name),
            },
        }
    )
);
