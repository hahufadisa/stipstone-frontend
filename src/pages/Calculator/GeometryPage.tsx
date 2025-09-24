import {
  Radio,
  Stack,
  Image,
  Text,
  Grid,
  Center,
  Tabs,
  NumberInput,
} from "@mantine/core";
import { shapes } from "../../Calculator/data";
import { useCalculatorStore } from "../../Calculator/store";

const GeometryPage = () => {
  const { geometry, updateGeometry, selectShape } = useCalculatorStore();
  const {
    selectedShape,
    width,
    height,
    sideA,
    sideB,
    sideC,
    sideD,
    pA,
    pB,
    pC,
    pD,
    pE,
    pF,
    radA,
    radB,
  } = geometry;

  const selectedShapeData = shapes.find((s) => s.value === selectedShape);

  const handleShapeSelect = (value: string | null) => {
    if (value) {
      selectShape(value);
    }
  };

  const setWidth = (value: number | undefined) => {
    updateGeometry({ width: value });
  };

  const setHeight = (value: number | undefined) => {
    updateGeometry({ height: value });
  };

  const setSideA = (value: number | undefined) => {
    updateGeometry({ sideA: value });
  };

  const setSideB = (value: number | undefined) => {
    updateGeometry({ sideB: value });
  };

  const setSideC = (value: number | undefined) => {
    updateGeometry({ sideC: value });
  };

  const setSideD = (value: number | undefined) => {
    updateGeometry({ sideD: value });
  };

  const setPA = (value: number | undefined) => {
    updateGeometry({ pA: value });
  };

  const setPB = (value: number | undefined) => {
    updateGeometry({ pB: value });
  };

  const setPC = (value: number | undefined) => {
    updateGeometry({ pC: value });
  };

  const setPD = (value: number | undefined) => {
    updateGeometry({ pD: value });
  };

  const setPE = (value: number | undefined) => {
    updateGeometry({ pE: value });
  };

  const setPF = (value: number | undefined) => {
    updateGeometry({ pF: value });
  };

  const setRadA = (value: number | undefined) => {
    updateGeometry({ radA: value });
  };

  const setRadB = (value: number | undefined) => {
    updateGeometry({ radB: value });
  };

  return (
    <Tabs.Panel value="size" pt="md">
      <Grid align="stretch">
        <Grid.Col span={2}>
          <Radio.Group value={selectedShape || ""} onChange={handleShapeSelect}>
            <Stack align="stretch" gap="md">
              {shapes.map((shape) => (
                <Radio.Card
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
                    {shape.price && (
                      <Text size="xs" c="dimmed">
                        {shape.price} ₽/м²
                      </Text>
                    )}
                  </Stack>
                </Radio.Card>
              ))}
            </Stack>
          </Radio.Group>
        </Grid.Col>

        <Grid.Col span={9}>
          <Center style={{ minHeight: 220, position: "relative" }}>
            {selectedShape ? (
              <>
                <Image
                  src={selectedShapeData?.image}
                  alt="Выбранная форма"
                  height={200}
                  fit="contain"
                  radius="md"
                />

                {selectedShape === "straight" && (
                  <>
                    <NumberInput
                      hideControls
                      placeholder="Длина (м)"
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
                      placeholder="Ширина (м)"
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

                {selectedShape === "g" && (
                  <>
                    <NumberInput
                      hideControls
                      placeholder="A (м)"
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
                      placeholder="B (м)"
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
                      placeholder="C (м)"
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
                      placeholder="D (м)"
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

                {selectedShape === "p" && (
                  <>
                    <NumberInput
                      hideControls
                      placeholder="A (м)"
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
                      placeholder="B (м)"
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
                      placeholder="C (м)"
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
                      placeholder="D (м)"
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
                      placeholder="E (м)"
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
                      placeholder="F (м)"
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

                {selectedShape === "radial" && (
                  <>
                    <NumberInput
                      hideControls
                      placeholder="A (м)"
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
                      placeholder="B (м)"
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
