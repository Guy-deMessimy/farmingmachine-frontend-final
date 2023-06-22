import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../GraphQL/CategoryQuery';
import Categories from '../../components/Category';

const CategoriesPage = () => {
  const { data: categoriesData, loading, error } = useQuery(GET_CATEGORIES);
  const [categories, setCategories] = useState<[]>([]);
  useEffect(() => {
    if (categoriesData && categoriesData.getCategories) {
      setCategories(categoriesData.getCategories);
    }
  }, [categoriesData]);

  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Categories categoriesService={categories} isLoading={loading} />
    </>
  );
};

export default CategoriesPage;
