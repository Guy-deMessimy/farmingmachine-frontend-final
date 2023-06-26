import { Link } from 'react-router-dom';
import { CategoriesProps, Category } from '../../models/CategoriesConfig';
import Card from '../Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import * as styled from './styles';

const Categories = (props: CategoriesProps) => {
  const { categoriesService, isLoading } = props;
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categoriesService.map((categoriesService: Category) => {
          return (
            <SwiperSlide key={categoriesService.id}>
              <Card isLoading={isLoading}>
                <Link to={categoriesService.id.toString()}>
                  <styled.Page>{categoriesService.title}</styled.Page>
                  <img src={categoriesService.file.fileUrl} />
                  <span>{categoriesService.description}</span>
                </Link>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Categories;
