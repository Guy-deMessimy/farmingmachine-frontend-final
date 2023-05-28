import React from 'react';
import { Link } from 'react-router-dom';
import { CategoriesProps, Category } from '../../models/CategoriesConfig';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Categories = (props: CategoriesProps) => {
  const { categoriesService } = props;
  console.log('categoriesService', categoriesService);
  const slides = () => {
    <ul></ul>;
  };

  console.log('slides', slides);
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
        {categoriesService.map((categoriesService: Category) => (
          <SwiperSlide key={categoriesService.id}>
            <Link to={categoriesService.id.toString()}>
              <h3>{categoriesService.title}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Categories;
