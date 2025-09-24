import { Stack, Image, Text, SimpleGrid, Card, Title } from "@mantine/core";
import { boards, kromki } from "../../Calculator/data"; // импорт массивов
import { useCalculatorStore } from "../../Calculator/store";
import { Kromki, Boards } from "../../Calculator/types";

const BoardsPage = () => {
  const { boards: boardsState, updateBoards } = useCalculatorStore();
  const { selectedKromka, selectedBoard } = boardsState;

  const selectKromka = (kromka: Kromki) => {
    updateBoards({ selectedKromka: kromka });
  };

  const selectBoard = (board: Boards) => {
    updateBoards({ selectedBoard: board });
  };

  return (
    <Stack>
      <Stack>
        <Title order={3}>Выберите кромку</Title>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 5 }} spacing="md">
          {kromki.map((k) => (
            <Card
              key={k.id}
              withBorder
              shadow={selectedKromka?.id === k.id ? "lg" : "sm"}
              radius="md"
              padding="sm"
              onClick={() => selectKromka(k)}
              style={{
                cursor: "pointer",
                border:
                  selectedKromka?.id === k.id
                    ? "3px solid #40C057"
                    : "1px solid #dee2e6",
                backgroundColor:
                  selectedKromka?.id === k.id ? "#E8F5E8" : "white",
                // transform:
                //   selectedKromka?.id === k.id ? "scale(1.05)" : "scale(1)",
                transition: "all 0.2s ease-in-out",
              }}
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

      <Stack>
        <Title order={3}>Выберите бортик</Title>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4, lg: 5 }} spacing="md">
          {boards.map((b) => (
            <Card
              key={b.id}
              withBorder
              shadow={selectedBoard?.id === b.id ? "lg" : "sm"}
              radius="md"
              padding="sm"
              onClick={() => selectBoard(b)}
              style={{
                cursor: "pointer",
                border:
                  selectedBoard?.id === b.id
                    ? "3px solid #FD7E14"
                    : "1px solid #dee2e6",
                backgroundColor:
                  selectedBoard?.id === b.id ? "#FFF4E6" : "white",
                transform:
                  selectedBoard?.id === b.id ? "scale(1.05)" : "scale(1)",
                transition: "all 0.2s ease-in-out",
              }}
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
