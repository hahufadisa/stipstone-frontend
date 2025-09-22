import { useState } from "react";
import {
  Checkbox,
  Stack,
  Image,
  Text,
  Grid,
  Center,
  Tabs,
  NumberInput,
} from "@mantine/core";
import { shapes } from "../../calc/data";

const GeometryPage = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const last = selected[selected.length - 1];

  // Состояния для размеров
  const [width, setWidth] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();

  // Для Г-образной формы
  const [sideA, setSideA] = useState<number | undefined>();
  const [sideB, setSideB] = useState<number | undefined>();
  const [sideC, setSideC] = useState<number | undefined>();
  const [sideD, setSideD] = useState<number | undefined>();

  // П-образная форма
  const [pA, setPA] = useState<number | undefined>();
  const [pB, setPB] = useState<number | undefined>();
  const [pC, setPC] = useState<number | undefined>();
  const [pD, setPD] = useState<number | undefined>();
  const [pE, setPE] = useState<number | undefined>();
  const [pF, setPF] = useState<number | undefined>();

  // Радиальная форма
  const [radA, setRadA] = useState<number | undefined>();
  const [radB, setRadB] = useState<number | undefined>();
  const selectedShape = shapes.find((s) => s.value === last);

  return (
    <Tabs.Panel value="size" pt="md">
      <Grid align="stretch">
        {/* Левая колонка с чекбоксами */}
        <Grid.Col span={2}>
          <Checkbox.Group value={selected} onChange={setSelected}>
            <Stack align="stretch" gap="md">
              {shapes.map((shape) => (
                <Checkbox.Card
                  key={shape.value}
                  value={String(shape.value)}
                  radius="md"
                  p="md"
                  withBorder
                  style={{ width: 120 }}
                >
                  <Stack align="center" gap="xs">
                    <Image
                      src={shape.icon}
                      alt={shape.label}
                      height={50}
                      fit="contain"
                      radius="sm"
                      loading="lazy"
                    />
                    <Text size="sm" fw={500}>
                      {shape.label}
                    </Text>
                  </Stack>
                </Checkbox.Card>
              ))}
            </Stack>
          </Checkbox.Group>
        </Grid.Col>

        {/* Правая колонка — картинка с абсолютными инпутами */}
        <Grid.Col span={9}>
          <Center style={{ minHeight: 220, position: "relative" }}>
            {last ? (
              <>
                <Image
                  src={selectedShape?.image}
                  alt="Выбранная форма"
                  height={200}
                  fit="contain"
                  radius="md"
                />

                {/* Абсолютные инпуты только для прямой формы */}
                {last === "straight" && (
                  <>
                    <NumberInput
                      hideControls
                      placeholder="Длина"
                      value={width}
                      onChange={(val) =>
                        setWidth(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "11%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="Ширина"
                      value={height}
                      onChange={(val) =>
                        setHeight(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "60%",
                        left: "5%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />
                  </>
                )}
                {/* Абсолютные инпуты для Г-образной формы */}
                {last === "g" && (
                  <>
                    <NumberInput
                      hideControls
                      placeholder="A"
                      value={sideA}
                      onChange={(val) =>
                        setSideA(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "8%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder=" B"
                      value={sideB}
                      onChange={(val) =>
                        setSideB(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "5%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="C"
                      value={sideC}
                      onChange={(val) =>
                        setSideC(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "93%",
                        left: "28%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="D"
                      value={sideD}
                      onChange={(val) =>
                        setSideD(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "36%",
                        left: "95%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />
                  </>
                )}
                {/* П-образная форма */}
                {last === "p" && (
                  <>
                    <NumberInput
                      hideControls
                      placeholder="A"
                      value={pA}
                      onChange={(val) =>
                        setPA(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "6%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="B"
                      value={pB}
                      onChange={(val) =>
                        setPB(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "5%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="C"
                      value={pC}
                      onChange={(val) =>
                        setPC(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "93%",
                        left: "25%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="D"
                      value={pD}
                      onChange={(val) =>
                        setPD(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "93%",
                        left: "75%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="E"
                      value={pE}
                      onChange={(val) =>
                        setPE(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "95%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="F"
                      value={pF}
                      onChange={(val) =>
                        setPF(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "36%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />
                  </>
                )}
                {/* Радиальная форма */}
                {last === "radial" && (
                  <>
                    <NumberInput
                      hideControls
                      placeholder="A"
                      value={radA}
                      onChange={(val) =>
                        setRadA(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "6%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />

                    <NumberInput
                      hideControls
                      placeholder="B"
                      value={radB}
                      onChange={(val) =>
                        setRadB(typeof val === "number" ? val : undefined)
                      }
                      style={{
                        position: "absolute",
                        top: "74%",
                        left: "9%",
                        transform: "translate(-50%, -50%)",
                        width: 80,
                      }}
                    />
                  </>
                )}
              </>
            ) : (
              <Text c="dimmed">Выберите форму слева</Text>
            )}
          </Center>
        </Grid.Col>
      </Grid>
    </Tabs.Panel>
  );
};

export default GeometryPage;
