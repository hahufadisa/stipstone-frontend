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
    image: "../../public/CalcImages/Brands/grandex.jpg",
  },
  {
    value: "staron",
    label: "Staron",
    image: "../../public/CalcImages/Brands/staron.jpg",
  },
  {
    value: "himacs",
    label: "Himacs",
    image: "../../public/CalcImages/Brands/himacs.jpg",
  },
  {
    value: "hanex",
    label: "Hyundai",
    image: "../../public/CalcImages/Brands/hanex.jpg",
  },
  {
    value: "akrilika",
    label: "Akrilka",
    image: "../../public/CalcImages/Brands/akrilika.png",
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
    <Grid align="stretch" gutter="lg">
      <Grid.Col span={2}>
        <Radio.Group value={brand} onChange={setBrand}>
          <Stack gap="md">
            {brands.map((b) => (
              <Radio.Card key={b.value} value={b.value} withBorder radius="md">
                <Stack align="center" gap={4}>
                  <Image
                    src={b.image}
                    alt={b.label}
                    height={50}
                    fit="contain"
                  />
                </Stack>
              </Radio.Card>
            ))}
          </Stack>
        </Radio.Group>
      </Grid.Col>

      <Grid.Col span={10}>
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
            <SimpleGrid cols={5} spacing="md">
              {filtered.map((mat) => (
                <Card
                  key={mat.id}
                  withBorder
                  shadow={selectedMaterial?.id === mat.id ? "md" : "sm"}
                  radius="md"
                  padding="sm"
                  onClick={() => selectMaterial(mat)}
                  style={{ cursor: "pointer" }}
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
  );
};

export default MaterialPage;
