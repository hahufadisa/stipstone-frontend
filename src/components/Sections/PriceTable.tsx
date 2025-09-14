import React from "react";
import { Table, Box } from "@mantine/core";

interface PriceTableProps {
  type?: "main" | "additional" | "services";
}

const PriceTable: React.FC<PriceTableProps> = ({ type = "main" }) => {
  // Основная таблица цен на материалы и базовые работы
  const mainPriceData = [
    {
      material: "Монотонная фактура",
      materialCost: "от 9540 руб. м2",
      manufacturingCost: "от 8500 руб. м2",
      finishedProductCost: "от 18040 руб. м2",
    },
    {
      material: "Гранитная фактура (вкрапления)",
      materialCost: "от 10240 руб. м2",
      manufacturingCost: "от 8500 руб. м2",
      finishedProductCost: "от 18740 руб. м2",
    },
    {
      material: "Мраморная фактура (разводы)",
      materialCost: "от 13720 руб. м2",
      manufacturingCost: "от 8500 руб. м2",
      finishedProductCost: "от 22220 руб. м2",
    },
    {
      material: "Мраморная фактура (прожилки)",
      materialCost: "от 14490 руб. м2",
      manufacturingCost: "от 8500 руб. м2",
      finishedProductCost: "от 22990 руб. м2",
    },
  ];

  // Дополнительные работы
  const additionalWorksData = [
    {
      name: "Обработка углов (раскрой)",
      unit: "ШТ",
      acrylic: "400 руб.",
      quartz: "400 руб.",
    },
    {
      name: "Обработка лицевой кромки (базовая)",
      unit: "МП",
      acrylic: "бесплатно",
      quartz: "1000 руб.",
    },
    {
      name: "Обработка лицевой кромки (фигурная)",
      unit: "МП",
      acrylic: "от 1500 руб.",
      quartz: "от 3600 руб.",
    },
    {
      name: "Накладной прямой борт",
      unit: "МП",
      acrylic: "700 руб.",
      quartz: "1600 руб.",
    },
    {
      name: "Интегрированный плавный борт",
      unit: "МП",
      acrylic: "2500 руб.",
      quartz: "—",
    },
    {
      name: "Обработка криволинейных элементов",
      unit: "МП",
      acrylic: "3000 руб.",
      quartz: "4000 руб.",
    },
    {
      name: "Вырез для накладной мойки",
      unit: "ШТ",
      acrylic: "1000 руб.",
      quartz: "3000 руб.",
    },
    {
      name: "Вырез для подстольной мойки",
      unit: "ШТ",
      acrylic: "2500 руб.",
      quartz: "6000 руб.",
    },
    {
      name: "Вклейка мойки",
      unit: "ШТ",
      acrylic: "1000 руб.",
      quartz: "1000 руб.",
    },
    {
      name: "Интегрированная мойка из камня в ванную",
      unit: "ШТ",
      acrylic: "от 14700 руб.",
      quartz: "от 35000 руб.",
    },
    {
      name: "Интегрированная мойка из камня в кухню",
      unit: "ШТ",
      acrylic: "от 18700 руб.",
      quartz: "от 35000 руб.",
    },
    {
      name: "Вырез для варочной панели",
      unit: "ШТ",
      acrylic: "3000 руб.",
      quartz: "3000 руб.",
    },
    {
      name: "Вырез для смесителя",
      unit: "ШТ",
      acrylic: "500 руб.",
      quartz: "500 руб.",
    },
  ];

  // Дополнительные услуги
  const additionalServicesData = [
    {
      name: "Каменный подгиб",
      unit: "МП",
      price1: "1300 руб.",
      price2: "2500 руб.",
    },
    {
      name: "Усиленная сплошная подложка",
      unit: "м2",
      price1: "2500 руб.",
      price2: "2500 руб.",
    },
    {
      name: "Вентиляционные проточки",
      unit: "шт",
      price1: "800 руб.",
      price2: "2000 руб.",
    },
    {
      name: "Замер в пределах КАД",
      unit: "шт",
      price1: "3000 руб. / (акция - 0 руб.)",
      price2: "3000 руб. / (акция - 0 руб.)",
    },
    {
      name: "Замер с изготовлением шаблона",
      unit: "шт",
      price1: "4000 руб.",
      price2: "4000 руб.",
    },
    {
      name: "Удалённость от города",
      unit: "KM",
      price1: "40 руб.",
      price2: "40 руб.",
    },
    {
      name: "Доставка до подъезда",
      unit: "шт",
      price1: "4000 руб.",
      price2: "4000 руб.",
    },
    {
      name: "Ручной подъём изделий",
      unit: "м2",
      price1: "450 руб. 1 этаж",
      price2: "700 руб. 1этаж",
    },
    {
      name: "Демонтаж старых изделий",
      unit: "м2",
      price1: "от 1000 руб.",
      price2: "от 1000 руб.",
    },
    {
      name: "Установка столешницы (изделия глубиной более 400 мм)",
      unit: "м2",
      price1: "6000 руб.",
      price2: "6000 руб.",
    },
    {
      name: "Установка подоконников (изделия глубиной менее 400 мм)",
      unit: "МП",
      price1: "2400 руб.",
      price2: "2400 руб.",
    },
    {
      name: "Склейка элементов изделия",
      unit: "шт",
      price1: "3000 руб.",
      price2: "3000 руб.",
    },
    {
      name: "Установка кронштейнов и т.п.",
      unit: "шт",
      price1: "4000 руб.",
      price2: "4000 руб.",
    },
    {
      name: "Повторный выезд для замера или доставки изделия по вине заказчика",
      unit: "шт",
      price1: "4000 руб.",
      price2: "4000 руб.",
    },
    {
      name: "Хранение готового изделия на складе подрядчика",
      unit: "день",
      price1: "50 руб./м2",
      price2: "50 руб./м2",
    },
  ];

  const renderMainTable = () => (
    <Table className="price-table main-price-table">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>АКРИЛОВЫЙ КАМЕНЬ</Table.Th>
          <Table.Th>стоимость материала</Table.Th>
          <Table.Th>стоимость базового изготовления</Table.Th>
          <Table.Th>стоимость готового изделия</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {mainPriceData.map((row, index) => (
          <Table.Tr key={index}>
            <Table.Td>{row.material}</Table.Td>
            <Table.Td>{row.materialCost}</Table.Td>
            <Table.Td>{row.manufacturingCost}</Table.Td>
            <Table.Td>{row.finishedProductCost}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );

  const renderAdditionalWorksTable = () => (
    <Table className="price-table additional-works-table">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>НАИМЕНОВАНИЕ</Table.Th>
          <Table.Th>ЕД. ИЗМ.</Table.Th>
          <Table.Th>АКРИЛ</Table.Th>
          <Table.Th>КВАРЦ</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {additionalWorksData.map((row, index) => (
          <Table.Tr key={index}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.unit}</Table.Td>
            <Table.Td>{row.acrylic}</Table.Td>
            <Table.Td>{row.quartz}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );

  const renderServicesTable = () => (
    <Table className="price-table services-table">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>НАИМЕНОВАНИЕ</Table.Th>
          <Table.Th>ЕД. ИЗМ.</Table.Th>
          <Table.Th>ЦЕНА 1</Table.Th>
          <Table.Th>ЦЕНА 2</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {additionalServicesData.map((row, index) => (
          <Table.Tr key={index}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.unit}</Table.Td>
            <Table.Td>{row.price1}</Table.Td>
            <Table.Td>{row.price2}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );

  return (
    <Box className="price-table-container">
      {type === "main" && renderMainTable()}
      {type === "additional" && renderAdditionalWorksTable()}
      {type === "services" && renderServicesTable()}
    </Box>
  );
};

export default PriceTable;
