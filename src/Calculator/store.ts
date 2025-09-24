import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Materials, Washes, Kromki, Boards } from './types';
import { calculateArea, shapes } from './data';

// Интерфейс для данных геометрии
interface GeometryData {
    selectedShape?: string; // Изменено на одну форму
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
    selectShape: (shape: string) => void; // Новый метод для выбора формы с сбросом
    updateMaterial: (data: Partial<MaterialData>) => void;
    updateBoards: (data: Partial<BoardData>) => void;
    updateWash: (data: Partial<WashData>) => void;
    updateExtraWorks: (data: Partial<ExtraWorksData>) => void;
    getCalculatorData: () => object;
    getArea: () => number;
    getShapePrice: () => number;
    getTotalShapePrice: () => number;
    getExtraWorksPrice: () => number; // Новая функция для расчета стоимости доп работ
    getTotalPrice: () => number; // Новая функция для общей стоимости
    clearAll: () => void;
}

const initialGeometry = {
    selectedShape: undefined,
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
};

const initialState = {
    geometry: initialGeometry,
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

            // Новый метод для выбора формы с сбросом всех измерений
            selectShape: (shape) =>
                set(() => ({
                    geometry: {
                        ...initialGeometry,
                        selectedShape: shape
                    }
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

            getArea: () => {
                const state = get();
                const { geometry } = state;
                const selectedShape = geometry.selectedShape;

                switch (selectedShape) {
                    case 'straight':
                        return calculateArea.straight(geometry.width, geometry.height);
                    case 'g':
                        return calculateArea.g(geometry.sideA, geometry.sideB, geometry.sideC, geometry.sideD);
                    case 'p':
                        return calculateArea.p(geometry.pA, geometry.pB, geometry.pC, geometry.pD, geometry.pE, geometry.pF);
                    case 'radial':
                        return calculateArea.radial(geometry.radA, geometry.radB);
                    default:
                        return 0;
                }
            },

            getShapePrice: () => {
                const state = get();
                const { geometry } = state;
                const selectedShape = geometry.selectedShape;
                const shape = shapes.find(s => s.value === selectedShape);
                return shape?.price || 0;
            },

            getTotalShapePrice: () => {
                const state = get();
                const area = state.getArea();
                const pricePerSqm = state.getShapePrice();
                return area * pricePerSqm;
            },

            // Функция для расчета стоимости дополнительных работ
            getExtraWorksPrice: () => {
                const state = get();
                const { extraWorks } = state;
                return extraWorks.selectedWorks.length * 1000; // 1000₽ за каждую услугу
            },

            // Функция для расчета общей стоимости всего заказа
            getTotalPrice: () => {
                const state = get();
                const shapePrice = state.getTotalShapePrice();
                const extraWorksPrice = state.getExtraWorksPrice();
                return shapePrice + extraWorksPrice;
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
