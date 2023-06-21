import React from 'react';
import { Link } from 'react-router-dom';
import { CategoriesProps, Category } from '../../models/CategoriesConfig';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Categories = (props: CategoriesProps) => {
  const { categoriesService } = props;
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
              <Link to={categoriesService.id.toString()}>
                <h3>{categoriesService.title}</h3>
                <img src={categoriesService.file.fileUrl} />
                <span>{categoriesService.description}</span>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Categories;
