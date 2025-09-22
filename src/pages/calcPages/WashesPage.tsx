import { useState } from "react";
import { Stack, Image, Text, SimpleGrid, Card, Title } from "@mantine/core";
import { washes } from "../../calc/data"; // импорт массива Washes

const WashesPage = () => {
  const [selectedWash, setSelectedWash] = useState<string>("_0");

  // Флаг, разрешающий выбирать плитки после первой группы
  const allowSecondGroup = washes.find(
    (w) => w.name === "Интегрированная мойка из камня" && selectedWash === w.id
  );

  return (
    <Stack>
      {/* Первая группа: первые 5 плиток */}
      <Stack>
        <Title order={3}>Выберите вариант мойки</Title>
        <SimpleGrid cols={5} spacing="md">
          {washes.slice(0, 5).map((w) => (
            <Card
              key={w.id}
              withBorder
              shadow={selectedWash === w.id ? "md" : "sm"}
              radius="md"
              padding="sm"
              onClick={() => setSelectedWash(w.id)}
              style={{ cursor: "pointer" }}
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
          ))}
        </SimpleGrid>
      </Stack>

      {/* Отступ */}
      <div style={{ height: 20 }} />

      {/* Вторая группа: все остальные плитки */}
      <Stack>
        <SimpleGrid cols={5} spacing="md">
          {washes.slice(5).map((w) => {
            const disabled = !allowSecondGroup;
            return (
              <Card
                key={w.id}
                withBorder
                shadow={selectedWash === w.id ? "md" : "sm"}
                radius="md"
                padding="sm"
                onClick={() => !disabled && setSelectedWash(w.id)}
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
