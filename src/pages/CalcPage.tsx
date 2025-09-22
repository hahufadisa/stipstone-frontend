import { Container, Tabs, Box, Title } from "@mantine/core";
import { motion } from "framer-motion";

import GeometryPage from "./calcPages/GeometryPage";
import MaterialPage from "./calcPages/MaterialPage";
import BoardsPage from "./calcPages/BoardsPage";
import WashesPage from "./calcPages/WashesPage";
import ExtraWorksPage from "./calcPages/ExtraWorksPage";

const CalcPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container size="xl" mt="xl">
        <Box className="calc-page">
          <Title order={2} mb="lg" ta="center">
            КАЛЬКУЛЯТОР
          </Title>

          <Tabs
            defaultValue="size"
            variant="pills"
            radius="md"
            keepMounted={false}
          >
            <Tabs.List grow>
              <Tabs.Tab value="size">Размер</Tabs.Tab>
              <Tabs.Tab value="material">Материал</Tabs.Tab>
              <Tabs.Tab value="edge">Кромка и бортик</Tabs.Tab>
              <Tabs.Tab value="sink">Мойка</Tabs.Tab>
              <Tabs.Tab value="extra">Доп. работы</Tabs.Tab>
              <Tabs.Tab value="result">Результат</Tabs.Tab>
            </Tabs.List>

            <GeometryPage />

            <Tabs.Panel value="material" pt="md">
              <MaterialPage />
            </Tabs.Panel>

            <Tabs.Panel value="edge" pt="md">
              <BoardsPage />
            </Tabs.Panel>

            <Tabs.Panel value="sink" pt="md">
              <WashesPage />
            </Tabs.Panel>

            <Tabs.Panel value="extra" pt="md">
              <ExtraWorksPage />
            </Tabs.Panel>

            <Tabs.Panel value="result" pt="md">
              Контент вкладки Результат
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Container>
    </motion.div>
  );
};

export default CalcPage;
