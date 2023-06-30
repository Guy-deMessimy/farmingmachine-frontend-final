import { CategoriesProps, Category } from '../../../../models/CategoriesConfig';
import Card from '../../../../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import * as styled from './styles';
import './styles.css';

const Categories = (props: CategoriesProps) => {
  const { categoriesService, isLoading } = props;
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="category"
      >
        {categoriesService.map((categoriesService: Category) => {
          return (
            <SwiperSlide key={categoriesService.id}>
              <Card isLoading={isLoading}>
                <styled.CategoryLink to={categoriesService.id.toString()}>
                  <h3>{categoriesService.title}</h3>
                  <styled.CategoryImg src={categoriesService.file.fileUrl} />
                  <span>{categoriesService.description}</span>
                </styled.CategoryLink>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Categories;
