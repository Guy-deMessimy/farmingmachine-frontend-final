import { Link } from 'react-router-dom';
import { CategoriesProps, Category } from '../../models/CategoriesConfig';
import Card from '../Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Categories = (props: CategoriesProps) => {
  const { categoriesService, isLoading } = props;
  return (
    <>
      <Swiper
        slidesPerView={7}
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
                  <h3>{categoriesService.title}</h3>
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
