import { Option } from "./types";

// Формы изделия
export const shapes: Option[] = [
  {
    value: "straight",
    label: "Прямая",
    image: "../CalcImages/Geometry/straight.jpg",
    icon: "../CalcImages/Geometry/straightIcon.jpg",
  },
  {
    value: "g",
    label: "Г-образная",
    image: "../CalcImages/Geometry/gForm.jpg",
    icon: "../CalcImages/Geometry/gFormIcon.jpg",
  },
  {
    value: "p",
    label: "П-образная",
    image: "../CalcImages/Geometry/pForm.jpg",
    icon: "../CalcImages/Geometry/pFormIcon.jpg",
  },
  {
    value: "radial",
    label: "Радиальная",
    image: "../CalcImages/Geometry/radForm.jpg",
    icon: "../CalcImages/Geometry/radFormIcon.jpg",
  },
];

// Толщины
export const thicknesses: Option[] = [
  { value: 12, label: "12 мм" },
  { value: 20, label: "20 мм" },
  { value: 24, label: "24 мм" },
  { value: 30, label: "30 мм" },
  { value: 36, label: "36 мм" },
  { value: 38, label: "38 мм" },
  { value: 40, label: "40 мм" },
  { value: 45, label: "45 мм" },
  { value: 50, label: "50 мм" },
  { value: 60, label: "60 мм" },
  { value: 70, label: "70 мм" },
  { value: 80, label: "80 мм" },
  { value: 90, label: "90 мм" },
  { value: "100plus", label: "Свыше 100 мм" },
];
