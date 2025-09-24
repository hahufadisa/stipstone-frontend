import { Stack, Checkbox, Title, Divider, Group, Text } from "@mantine/core";
import { useCalculatorStore } from "../../Calculator/store";

const extraWorksData = [
  "Каплесборник (пропил)",
  "Изготовление каменного подгиба",
  "Усиленная сплошная подложка из фанеры",
  "Вырез для варочной панели",
  "Вырез для смесителя (до 50мм)",
  "Вырезы для розетки (до 100мм)",
  "Проточки для слива воды",
  "Монтаж варочной панели накладного типа",
  "Демонтаж подоконников /столешниц",
  "Обработка криволинейности (термоформинг)",
  "Установка кронштейна/опоры",
  "Вентиляционные сквозные проточки",
  "Бесшовная склейка элементов изделия (стыки)",
  "Бесшовная склейка элементов изделия в ус (стыки)",
  "Монтаж",
  "Доставка (в пределах города Москва)",
  "Удалённость от города",
];

const ExtraWorksPage = () => {
  const { extraWorks, updateExtraWorks } = useCalculatorStore();
  const { selectedWorks } = extraWorks;

  const toggleOption = (option: string) => {
    if (selectedWorks.includes(option)) {
      updateExtraWorks({
        selectedWorks: selectedWorks.filter((o) => o !== option),
      });
    } else {
      updateExtraWorks({
        selectedWorks: [...selectedWorks, option],
      });
    }
  };

  return (
    <Stack>
      <Title order={3}>Выберите дополнительные работы</Title>
      <Stack>
        {extraWorksData.map((work, index) => (
          <div key={work}>
            {index === extraWorksData.length - 3 && (
              <Divider my="sm" labelPosition="center" />
            )}
            <Group justify="space-between" align="center">
              <Checkbox
                label={work}
                checked={selectedWorks.includes(work)}
                onChange={() => toggleOption(work)}
                style={{ flex: 1 }}
              />
              <Text
                size="sm"
                c="dimmed"
                style={{ minWidth: "80px", textAlign: "right" }}
              >
                1000 ₽
              </Text>
            </Group>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default ExtraWorksPage;
