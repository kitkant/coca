import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import Item from './components/Item/Item'

const SliderAboutPage = () => {
	return (
	<Wrapper>
		<div className="container">
		<Swiper
			slidesPerView={2}
			spaceBetween={32}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="downHeroAboutPage"
			style={{ overflow: 'visible'}}
		>
			<SwiperSlide style={{maxWidth: '502px'}}><Item/></SwiperSlide>
			<SwiperSlide style={{maxWidth: '502px'}}><Item/></SwiperSlide>
			<SwiperSlide style={{maxWidth: '502px'}}><Item/></SwiperSlide>

		</Swiper>
		</div>
	</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 135px;
	padding-bottom: 50px;
	overflow: 'hidden'
`

export default SliderAboutPage;