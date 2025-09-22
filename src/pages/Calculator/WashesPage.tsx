import { Stack, Image, Text, SimpleGrid, Card, Title } from "@mantine/core";
import { washes } from "../../Calculator/data"; // импорт массива Washes
import { useCalculatorStore } from "../../Calculator/store";
import { Washes } from "../../Calculator/types";

const WashesPage = () => {
  const { wash, updateWash } = useCalculatorStore();
  const { selectedWash } = wash;

  const selectWash = (washItem: Washes) => {
    updateWash({ selectedWash: washItem });
  };

  const allowSecondGroup = washes.find(
    (w) =>
      w.name === "Интегрированная мойка из камня" && selectedWash?.id === w.id
  );

  return (
    <Stack>
      <Stack>
        <Title order={3}>Выберите вариант мойки</Title>
        <SimpleGrid cols={5} spacing="md">
          {washes.slice(0, 5).map((w) => (
            <Card
              key={w.id}
              withBorder
              shadow={selectedWash?.id === w.id ? "md" : "sm"}
              radius="md"
              bg={selectedWash?.id === w.id ? "white" : "gray.1"}
              padding="sm"
              onClick={() => selectWash(w)}
              style={{ cursor: "pointer" }}
            >
              <Stack align="center" gap="xs">
                <Image
                  src={w.image}
                  alt={w.name}
                  height={80}
                  fit="contain"
                  radius={"xs"}
                />
                <Text fw={500} size="sm">
                  {w.name}
                </Text>
                <Text size="xs" c="dimmed">
                  {w.price} ₽
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>

      <div style={{ height: 20 }} />

      <Stack>
        <SimpleGrid cols={5} spacing="md">
          {washes.slice(5).map((w) => {
            const disabled = !allowSecondGroup;
            return (
              <Card
                key={w.id}
                withBorder
                shadow={selectedWash?.id === w.id ? "md" : "sm"}
                radius="md"
                padding="sm"
                onClick={() => !disabled && selectWash(w)}
                style={{
                  cursor: disabled ? "not-allowed" : "pointer",
                  opacity: disabled ? 0.4 : 1,
                }}
              >
                <Stack align="center" gap="xs">
                  <Image src={w.image} alt={w.name} height={80} fit="contain" />
                  <Text fw={500} size="sm">
                    {w.name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {w.price} ₽
                  </Text>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default WashesPage;
