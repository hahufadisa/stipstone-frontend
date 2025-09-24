import {
  Grid,
  Stack,
  Image,
  Text,
  Radio,
  Select,
  SimpleGrid,
  Card,
  Group,
} from "@mantine/core";
import {
  materialsAkrilka,
  materialsStaron,
  materialsHimacs,
  materialsGrandex,
  materialsHyundai,
} from "../../Calculator/data";
import { Materials } from "../../Calculator/types";
import { useCalculatorStore } from "../../Calculator/store";

const brands = [
  {
    value: "grandex",
    label: "Grandex",
    image: "../../CalcImages/Brands/grandex.jpg",
  },
  {
    value: "staron",
    label: "Staron",
    image: "../../CalcImages/Brands/staron.jpg",
  },
  {
    value: "himacs",
    label: "Himacs",
    image: "../../CalcImages/Brands/himacs.jpg",
  },
  {
    value: "hanex",
    label: "Hyundai",
    image: "../../CalcImages/Brands/hanex.jpg",
  },
  {
    value: "akrilika",
    label: "Akrilka",
    image: "../../CalcImages/Brands/akrilika.png",
  },
];

const fakturaOptions = [
  { value: "any", label: "Любая" },
  { value: "монотонный", label: "Монотонный" },
  { value: "мелкие вкрапления", label: "Мелкие вкрапления" },
  { value: "крупные вкрапления", label: "Крупные вкрапления" },
  { value: "разводы", label: "Разводы" },
];

const colorOptions = [
  { value: "any", label: "Любой" },
  { value: "белый", label: "Белый" },
  { value: "светлосерый", label: "Светло-серый" },
  { value: "бежевый", label: "Бежевый" },
  { value: "коричневый", label: "Коричневый" },
  { value: "черный", label: "Черный" },
];

const materialsByBrand: Record<string, Materials[]> = {
  akrilika: materialsAkrilka,
  hanex: materialsHyundai,
  staron: materialsStaron,
  himacs: materialsHimacs,
  grandex: materialsGrandex,
};

const MaterialPage = () => {
  const { material, updateMaterial } = useCalculatorStore();
  const { brand, faktura, color, selectedMaterial } = material;

  const setBrand = (value: string) => {
    updateMaterial({ brand: value });
  };

  const setFaktura = (value: string) => {
    updateMaterial({ faktura: value });
  };

  const setColor = (value: string) => {
    updateMaterial({ color: value });
  };

  const selectMaterial = (mat: Materials) => {
    updateMaterial({ selectedMaterial: mat });
  };

  const filtered = (brand ? materialsByBrand[brand] : []).filter(
    (mat) =>
      (faktura === "any" || mat.faktura === faktura) &&
      (color === "any" || mat.color === color)
  );

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <Grid align="stretch" gutter="lg">
        <Grid.Col span={{ base: 12, sm: 4, md: 3, lg: 2 }}>
          <Radio.Group value={brand} onChange={setBrand}>
            <Stack gap="md">
              {brands.map((b) => (
                <Radio.Card
                  key={b.value}
                  value={b.value}
                  withBorder
                  radius="md"
                  p="md"
                  style={{
                    border:
                      brand === b.value
                        ? "3px solid #339AF0"
                        : "1px solid #dee2e6",
                    backgroundColor: brand === b.value ? "#E3F2FD" : "white",
                    transition: "all 0.2s ease-in-out",
                    minHeight: "100px",
                  }}
                >
                  <Stack align="center" gap="xs">
                    <Image
                      src={b.image}
                      alt={b.label}
                      height={60}
                      fit="contain"
                      radius="sm"
                    />
                    <Text size="sm" fw={500} ta="center">
                      {b.label}
                    </Text>
                  </Stack>
                </Radio.Card>
              ))}
            </Stack>
          </Radio.Group>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 8, md: 9, lg: 10 }}>
          <Stack gap="md">
            <Group grow>
              <Select
                label="Фактура"
                data={fakturaOptions}
                value={faktura}
                onChange={(val) => setFaktura(val || "any")}
              />
              <Select
                label="Цвет"
                data={colorOptions}
                value={color}
                onChange={(val) => setColor(val || "any")}
              />
            </Group>

            <div style={{ maxHeight: 700, overflowY: "auto" }}>
              <SimpleGrid
                cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 5 }}
                spacing="md"
              >
                {filtered.map((mat) => (
                  <Card
                    key={mat.id}
                    withBorder
                    shadow={selectedMaterial?.id === mat.id ? "lg" : "sm"}
                    radius="md"
                    padding="sm"
                    onClick={() => selectMaterial(mat)}
                    style={{
                      cursor: "pointer",
                      border:
                        selectedMaterial?.id === mat.id
                          ? "3px solid #339AF0"
                          : "1px solid #dee2e6",
                      backgroundColor:
                        selectedMaterial?.id === mat.id ? "#E3F2FD" : "white",
                      // transform:
                      //   selectedMaterial?.id === mat.id
                      //     ? "scale(1.05)"
                      //     : "scale(1)",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <Stack align="center" gap="xs">
                      <Image
                        src={mat.image}
                        alt={mat.name}
                        height={80}
                        fit="contain"
                      />
                      <Text fw={500} size="sm">
                        {mat.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {mat.price} ₽
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
            </div>
          </Stack>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default MaterialPage;
