import { Card, Stack, Box, Text, Button, Image } from "@mantine/core";
import { Product } from "../../../public";
import { textContent } from "../../../public/data";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" className="product-card">
      <Stack gap="md">
        <Box className="product-image">
          <Image
            src={product.image}
            alt={`${product.title} - изделия из камня в Зеленограде | ${product.description}`}
            fit="cover"
            loading="lazy"
          />
        </Box>

        <Text size="lg" fw={700}>
          {product.title}
        </Text>

        <Text size="sm" className="product-description">
          {product.description}
        </Text>

        <Text size="md" fw={600}>
          {product.price}
        </Text>

        <Link to={`/catalog`}>
          <Button color="red" variant="outline" fullWidth size="sm">
            {textContent.products.buttonText}
          </Button>
        </Link>
      </Stack>
    </Card>
  );
};

export default ProductCard;
