import { useState } from "react";
import { Checkbox, Stack, Image, Text, Group, Box, Tabs } from "@mantine/core";
import { shapes } from "../../calc/data";

const GeometryPage = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Tabs.Panel value="size" pt="md">
      <Group align="flex-start" grow>
        <Checkbox.Group
          //   label="Выберите форму изделия"
          //   description="Можно выбрать несколько вариантов"
          value={selected}
          onChange={setSelected}
        >
          <Stack align="stretch" gap="md" w="50%">
            {shapes.map((shape) => (
              <Checkbox.Card
                key={shape.value}
                value={String(shape.value)}
                radius="md"
                p="md"
                withBorder
              >
                <Stack align="center" gap="xs">
                  <Image
                    src={shape.icon}
                    alt={shape.label}
                    height={80}
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

        {/* Правая часть с картинкой выбранного shape */}
        <Box w="50%" ta="center">
          {selected.length > 0 ? (
            <Image
              src={
                shapes.find((s) => s.value === selected[selected.length - 1])
                  ?.image
              }
              alt="Выбранная форма"
              height={200}
              fit="contain"
              radius="md"
            />
          ) : (
            <Text c="dimmed">Выберите форму слева</Text>
          )}
        </Box>
      </Group>
    </Tabs.Panel>
  );
};

export default GeometryPage;
