import {
  Stack,
  Button,
  Title,
  Text,
  Card,
  Group,
  Divider,
  Box,
} from "@mantine/core";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useCalculatorStore } from "../../Calculator/store";
import { shapes } from "../../Calculator/data";

const ResultPage = () => {
  const {
    getCalculatorData,
    geometry,
    material,
    boards,
    wash,
    extraWorks,
    getArea,
    getShapePrice,
    getTotalShapePrice,
    getExtraWorksPrice,
    getTotalPrice,
  } = useCalculatorStore();

  const generatePDF = () => {
    // Создаем PDF в формате A4
    const doc = new jsPDF("p", "mm", "a4");

    // Функция для безопасного добавления текста
    const addText = (text: string, x: number, y: number) => {
      try {
        // Конвертируем в латиницу для отображения
        const latinText = convertToLatin(text);
        doc.text(latinText, x, y);
        return y;
      } catch (error) {
        console.warn("Ошибка добавления текста:", error);
        doc.text("Text error", x, y);
        return y;
      }
    };

    // Функция конвертации кириллицы в латиницу для PDF
    const convertToLatin = (text: string): string => {
      const cyrillicToLatin: { [key: string]: string } = {
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "E",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "Y",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "Ts",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sch",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "sch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
      };

      return text.replace(
        /[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]/g,
        (char) => {
          return cyrillicToLatin[char] || char;
        }
      );
    };

    let yPosition = 20;
    const lineHeight = 7;
    const leftMargin = 20;

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    addText("ZAKAZ KALKULYATORA STOLESHNITSY", leftMargin, yPosition);
    yPosition += lineHeight * 2;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    addText(
      `Data: ${new Date().toLocaleDateString("ru-RU")}`,
      leftMargin,
      yPosition
    );
    yPosition += lineHeight * 2;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    addText("GEOMETRIYA:", leftMargin, yPosition);
    yPosition += lineHeight;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    if (geometry.selectedShape) {
      const shapeLabel =
        shapes.find((s) => s.value === geometry.selectedShape)?.label ||
        geometry.selectedShape;
      addText(
        `Forma: ${convertToLatin(shapeLabel)}`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight;
    }
    if (geometry.width && geometry.height) {
      addText(
        `Razmery: ${geometry.width} x ${geometry.height} m`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight;
    }

    if (geometry.sideA || geometry.sideB || geometry.sideC || geometry.sideD) {
      addText(
        `G-forma: A=${geometry.sideA || 0}, B=${geometry.sideB || 0}, C=${
          geometry.sideC || 0
        }, D=${geometry.sideD || 0}`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight;
    }

    yPosition += lineHeight;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    addText("MATERIAL:", leftMargin, yPosition);
    yPosition += lineHeight;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    addText(
      `Brend: ${convertToLatin(material.brand)}`,
      leftMargin + 5,
      yPosition
    );
    yPosition += lineHeight;

    if (material.selectedMaterial) {
      addText(
        `Vybranniy material: ${convertToLatin(material.selectedMaterial.name)}`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight;
      addText(
        `Tsena: ${material.selectedMaterial.price} rub.`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight;
    }

    yPosition += lineHeight;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    addText("KROMKA I BORTIK:", leftMargin, yPosition);
    yPosition += lineHeight;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    if (boards.selectedKromka) {
      addText(
        `Kromka: ${convertToLatin(boards.selectedKromka.name)} - ${
          boards.selectedKromka.price
        } rub.`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight;
    }

    if (boards.selectedBoard) {
      addText(
        `Bortik: ${convertToLatin(boards.selectedBoard.name)} - ${
          boards.selectedBoard.price
        } rub.`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight;
    }

    yPosition += lineHeight;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    addText("MOYKA:", leftMargin, yPosition);
    yPosition += lineHeight;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    if (wash.selectedWash) {
      addText(
        `${convertToLatin(wash.selectedWash.name)} - ${
          wash.selectedWash.price
        } rub.`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight;
    } else {
      addText("Ne vybrana", leftMargin + 5, yPosition);
      yPosition += lineHeight;
    }

    yPosition += lineHeight;

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    addText("DOPOLNITELNYE RABOTY:", leftMargin, yPosition);
    yPosition += lineHeight;

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    if (extraWorks.selectedWorks.length > 0) {
      extraWorks.selectedWorks.forEach((work) => {
        addText(
          `• ${convertToLatin(work)} - 1000 rub.`,
          leftMargin + 5,
          yPosition
        );
        yPosition += lineHeight;
      });
      yPosition += lineHeight;
      doc.setFont("helvetica", "bold");
      addText(
        `Itogo dopolnitelnyh rabot: ${getExtraWorksPrice()} rub.`,
        leftMargin + 5,
        yPosition
      );
      yPosition += lineHeight * 2;

      // Общая стоимость
      doc.setFontSize(14);
      addText(
        `OBSHAYA STOIMOST: ${getTotalPrice().toFixed(2)} rub.`,
        leftMargin,
        yPosition
      );
    } else {
      addText("Ne vybrany", leftMargin + 5, yPosition);
      yPosition += lineHeight * 2;

      // Общая стоимость (без доп работ)
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      addText(
        `OBSHAYA STOIMOST: ${getTotalPrice().toFixed(2)} rub.`,
        leftMargin,
        yPosition
      );
    }

    // Сохранение PDF
    doc.save("calculator-order.pdf");
  };

  // Альтернативная функция с таблицами
  const generatePDFTable = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Функция конвертации кириллицы в латиницу для PDF
    const convertToLatin = (text: string): string => {
      const cyrillicToLatin: { [key: string]: string } = {
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "E",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "Y",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "Ts",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sch",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "y",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "sch",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
      };

      return text.replace(
        /[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]/g,
        (char) => {
          return cyrillicToLatin[char] || char;
        }
      );
    };

    let yPosition = 20;

    // Заголовок
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("CALCULATOR ORDER", 20, yPosition);
    yPosition += 10;

    // Дата
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${new Date().toLocaleDateString("en-US")}`, 20, yPosition);
    yPosition += 15;

    // Данные для таблицы
    const tableData: string[][] = [];

    // Геометрия
    if (geometry.selectedShape) {
      const shapeLabel =
        shapes.find((s) => s.value === geometry.selectedShape)?.label ||
        geometry.selectedShape;
      tableData.push(["Geometry", "Shape", convertToLatin(shapeLabel)]);
    }
    if (geometry.width && geometry.height) {
      tableData.push(["", "Size", `${geometry.width} x ${geometry.height} m`]);
    }

    // Материал
    tableData.push(["Material", "Brand", convertToLatin(material.brand)]);
    if (material.selectedMaterial) {
      tableData.push([
        "",
        "Selected",
        convertToLatin(material.selectedMaterial.name),
      ]);
      tableData.push(["", "Price", `${material.selectedMaterial.price} rub.`]);
    }

    // Кромка и бортик
    if (boards.selectedKromka) {
      tableData.push([
        "Edge",
        "Type",
        convertToLatin(boards.selectedKromka.name),
      ]);
      tableData.push(["", "Price", `${boards.selectedKromka.price} rub.`]);
    }
    if (boards.selectedBoard) {
      tableData.push([
        "Board",
        "Type",
        convertToLatin(boards.selectedBoard.name),
      ]);
      tableData.push(["", "Price", `${boards.selectedBoard.price} rub.`]);
    }

    // Мойка
    if (wash.selectedWash) {
      tableData.push(["Sink", "Type", convertToLatin(wash.selectedWash.name)]);
      tableData.push(["", "Price", `${wash.selectedWash.price} rub.`]);
    }

    // Дополнительные работы
    if (extraWorks.selectedWorks.length > 0) {
      extraWorks.selectedWorks.forEach((work, index) => {
        tableData.push([
          index === 0 ? "Extra Works" : "",
          convertToLatin(work),
          "1000 rub.",
        ]);
      });
      tableData.push([
        "",
        "Total Extra Works:",
        `${getExtraWorksPrice()} rub.`,
      ]);
    }

    // Общая стоимость
    tableData.push([
      "TOTAL",
      "FINAL PRICE:",
      `${getTotalPrice().toFixed(2)} rub.`,
    ]);

    // Создание таблицы
    autoTable(doc, {
      head: [["Category", "Parameter", "Value"]],
      body: tableData,
      startY: yPosition,
      theme: "grid",
      styles: {
        fontSize: 9,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [71, 85, 105],
        textColor: 255,
        fontStyle: "bold",
      },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 40 },
        2: { cellWidth: "auto" },
      },
    });

    doc.save("calculator-order-table.pdf");
  };

  const downloadJSON = () => {
    const data = getCalculatorData();
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "calculator-data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Stack>
      <Title order={3}>Результат калькулятора</Title>

      <Card withBorder padding="lg">
        <Stack gap="md">
          {/* Геометрия */}
          <Box>
            <Text fw={600} size="lg">
              Геометрия
            </Text>
            <Divider my="xs" />
            {geometry.selectedShape && (
              <>
                <Text size="sm">
                  Форма:{" "}
                  {shapes.find((s) => s.value === geometry.selectedShape)
                    ?.label || geometry.selectedShape}
                </Text>
                {(() => {
                  const selectedShapeData = shapes.find(
                    (s) => s.value === geometry.selectedShape
                  );
                  const area = getArea();
                  const shapePrice = getShapePrice();
                  const totalShapePrice = getTotalShapePrice();

                  return (
                    <>
                      {selectedShapeData && (
                        <Text size="sm">Цена за м²: {shapePrice} ₽</Text>
                      )}
                      {area > 0 && (
                        <>
                          <Text size="sm">Площадь: {area.toFixed(3)} м²</Text>
                          <Text size="sm" fw={600} c="blue">
                            Стоимость по форме: {totalShapePrice.toFixed(2)} ₽
                          </Text>
                        </>
                      )}
                    </>
                  );
                })()}
              </>
            )}
            {geometry.width && geometry.height && (
              <Text size="sm">
                Размеры: {geometry.width} x {geometry.height} м
              </Text>
            )}
          </Box>

          {/* Материал */}
          <Box>
            <Text fw={600} size="lg">
              Материал
            </Text>
            <Divider my="xs" />
            <Text size="sm">Бренд: {material.brand}</Text>
            {material.selectedMaterial && (
              <>
                <Text size="sm">
                  Материал: {material.selectedMaterial.name}
                </Text>
                <Text size="sm">Цена: {material.selectedMaterial.price} ₽</Text>
              </>
            )}
          </Box>

          {/* Кромка и бортик */}
          <Box>
            <Text fw={600} size="lg">
              Кромка и бортик
            </Text>
            <Divider my="xs" />
            {boards.selectedKromka && (
              <Text size="sm">
                Кромка: {boards.selectedKromka.name} -{" "}
                {boards.selectedKromka.price} ₽
              </Text>
            )}
            {boards.selectedBoard && (
              <Text size="sm">
                Бортик: {boards.selectedBoard.name} -{" "}
                {boards.selectedBoard.price} ₽
              </Text>
            )}
          </Box>

          {/* Мойка */}
          <Box>
            <Text fw={600} size="lg">
              Мойка
            </Text>
            <Divider my="xs" />
            {wash.selectedWash ? (
              <Text size="sm">
                {wash.selectedWash.name} - {wash.selectedWash.price} ₽
              </Text>
            ) : (
              <Text size="sm" c="dimmed">
                Не выбрана
              </Text>
            )}
          </Box>

          {/* Дополнительные работы */}
          <Box>
            <Text fw={600} size="lg">
              Дополнительные работы
            </Text>
            <Divider my="xs" />
            {extraWorks.selectedWorks.length > 0 ? (
              <>
                <Stack gap="xs">
                  {extraWorks.selectedWorks.map((work, index) => (
                    <Group key={index} justify="space-between">
                      <Text size="sm">• {work}</Text>
                      <Text size="sm" c="dimmed">
                        1000 ₽
                      </Text>
                    </Group>
                  ))}
                </Stack>
                <Divider my="xs" />
                <Group justify="space-between">
                  <Text size="sm" fw={600}>
                    Итого дополнительных работ:
                  </Text>
                  <Text size="sm" fw={600} c="blue">
                    {getExtraWorksPrice()} ₽
                  </Text>
                </Group>
              </>
            ) : (
              <Text size="sm" c="dimmed">
                Не выбраны
              </Text>
            )}
          </Box>

          {/* Общая стоимость */}
          <Box
            style={{
              backgroundColor: "#f8f9fa",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <Group justify="space-between" align="center">
              <Text fw={700} size="lg">
                ОБЩАЯ СТОИМОСТЬ:
              </Text>
              <Text fw={700} size="xl" c="green">
                {getTotalPrice().toFixed(2)} ₽
              </Text>
            </Group>
          </Box>
        </Stack>
      </Card>

      <Group justify="center" gap="md">
        <Button onClick={generatePDF} size="lg" variant="filled">
          Скачать PDF (текст)
        </Button>

        <Button
          onClick={generatePDFTable}
          size="lg"
          variant="filled"
          color="blue"
        >
          Скачать PDF (таблица)
        </Button>

        <Button onClick={downloadJSON} size="lg" variant="outline">
          Скачать JSON
        </Button>
      </Group>
    </Stack>
  );
};

export default ResultPage;
