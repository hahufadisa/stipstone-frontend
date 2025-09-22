import { useState } from "react";
import { Stack, Checkbox, Title, Divider } from "@mantine/core";

const extraWorks = [
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
  // теперь отделяемые три последних
  "Монтаж",
  "Доставка (в пределах города Москва)",
  "Удалённость от города",
];

const ExtraWorksPage = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <Stack>
      <Title order={3}>Выберите дополнительные работы</Title>
      <Stack>
        {extraWorks.map((work, index) => (
          <div key={work}>
            {/* Вставляем Divider перед последними 3 элементами */}
            {index === extraWorks.length - 3 && (
              <Divider my="sm" labelPosition="center" />
            )}
            <Checkbox
              label={work}
              checked={selected.includes(work)}
              onChange={() => toggleOption(work)}
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default ExtraWorksPage;
