import { FileInterface } from './FileConfig';

export interface CategoriesProps {
  categoriesService: [];
  isLoading: boolean;
}

export interface Category {
  id: number;
  title: string;
  description: string;
  file: FileInterface;
}
