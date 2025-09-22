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
        <SimpleGrid cols={5} spacing="md">
          {kromki.map((k) => (
            <Card
              key={k.id}
              withBorder
              shadow={selectedKromka?.id === k.id ? "md" : "sm"}
              radius="md"
              padding="sm"
              onClick={() => selectKromka(k)}
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

      <Stack>
        <Title order={3}>Выберите бортик</Title>
        <SimpleGrid cols={5} spacing="md">
          {boards.map((b) => (
            <Card
              key={b.id}
              withBorder
              shadow={selectedBoard?.id === b.id ? "md" : "sm"}
              radius="md"
              padding="sm"
              onClick={() => selectBoard(b)}
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
