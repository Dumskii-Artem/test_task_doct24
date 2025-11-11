// src\pages\productDetailsPage\ProductDetailsPage.tsx
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product details (/products/:id)</h1>
      <p>Product id: {id}</p>
    </div>
  );
};

export default ProductDetailsPage;