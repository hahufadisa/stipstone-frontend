import { useState } from "react";
import { Stack, Image, Text, SimpleGrid, Card, Title } from "@mantine/core";
import { boards, kromki } from "../../calc/data"; // импорт массивов

const BoardsPage = () => {
  const [selectedKromka, setSelectedKromka] = useState<string>("0");
  const [selectedBoard, setSelectedBoard] = useState<string>("0");

  return (
    <Stack>
      {/* Блок: Выберите кромку */}
      <Stack>
        <Title order={3}>Выберите кромку</Title>
        <SimpleGrid cols={5} spacing="md">
          {kromki.map((k) => (
            <Card
              key={k.id}
              withBorder
              shadow={selectedKromka === k.id ? "md" : "sm"}
              radius="md"
              padding="sm"
              onClick={() => setSelectedKromka(k.id)}
              style={{ cursor: "pointer" }}
            >
              <Stack align="center" gap="xs">
                <Image src={k.image} alt={k.name} height={80} fit="contain" />
                <Text fw={500} size="sm">
                  {k.name}
                </Text>
                <Text size="xs" c="dimmed">
                  {k.price} ₽
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>

      {/* Блок: Выберите бортик */}
      <Stack>
        <Title order={3}>Выберите бортик</Title>
        <SimpleGrid cols={5} spacing="md">
          {boards.map((b) => (
            <Card
              key={b.id}
              withBorder
              shadow={selectedBoard === b.id ? "md" : "sm"}
              radius="md"
              padding="sm"
              onClick={() => setSelectedBoard(b.id)}
              style={{ cursor: "pointer" }}
            >
              <Stack align="center" gap="xs">
                <Image src={b.image} alt={b.name} height={80} fit="contain" />
                <Text fw={500} size="sm">
                  {b.name}
                </Text>
                <Text size="xs" c="dimmed">
                  {b.price} ₽
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default BoardsPage;
