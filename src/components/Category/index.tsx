import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesProps, Category } from '../../models/CategoriesConfig';

const Categories = (props: CategoriesProps) => {
  const { categoriesService } = props;
  return (
    <ul>
      {categoriesService.map((categoriesService: Category) => (
        <li key={categoriesService.id}>
          <Link to={categoriesService.id.toString()}>
            <h3>{categoriesService.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
