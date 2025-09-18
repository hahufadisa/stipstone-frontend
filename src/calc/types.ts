// Формы изделия
export type ProductShape = "straight" | "g" | "p" | "radial";

// Толщина
export type Thickness =
  | 12
  | 20
  | 24
  | 30
  | 36
  | 38
  | 40
  | 45
  | 50
  | 60
  | 70
  | 80
  | 90
  | "100plus";

// Универсальная опция (без дженерика, универсально)
export interface Option {
  value: string | number;
  label: string;
  image?: string;
  icon?: string;
}

// Вкладка калькулятора
export interface CalcTab {
  id: string;
  label: string;
}
