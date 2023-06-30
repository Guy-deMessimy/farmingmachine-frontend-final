import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../GraphQL/CategoryQuery';
import Categories from './components/Category';
import * as styled from './styles';
import { TITLE } from '../../utils/text-enum';

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
    <styled.CategoryWrapper>
      <styled.CategoryTitle>{TITLE.CATEGORY_TITLE}</styled.CategoryTitle>
      <styled.SliderWrapper>
        <Categories categoriesService={categories} isLoading={loading} />
      </styled.SliderWrapper>
    </styled.CategoryWrapper>
  );
};

export default CategoriesPage;
