import { Box, Loader, Text, Stack } from "@mantine/core";

const LoadingSpinner = () => (
  <Box
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
      width: "100%"
    }}
  >
    <Stack align="center" gap="md">
      <Loader size="xl" color="red" />
      <Text size="lg" fw={500}>
        Загрузка...
      </Text>
    </Stack>
  </Box>
);

export default LoadingSpinner;
