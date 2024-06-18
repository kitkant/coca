import styled from '@emotion/styled'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Slide from './component/Slide/Slide'


const SliderHomePage = () => {


	const arr = [
		{
			img: '/HomePage/slider/slide1.png',
			data: 'Published in Insight Jan 30, 2021',
			author: 'Albert Sans',
			title:
				'What makes an authentic employee profile, and why does it matter ?',
		},
		{
			img: '/HomePage/slider/slide2.png',
			data: 'Published in Insight Jan 30, 2021',
			author: 'Albert Sans',
			title: 'How to build a Kaylen relationship with a good company',
		},
		{
			img: '/HomePage/slider/slide1.png',
			data: 'Published in Insight Jan 30, 2021',
			author: 'Albert Sans',
			title:
				'What makes an authentic employee profile, and why does it matter ?',
		},
		{
			img: '/HomePage/slider/slide2.png',
			data: 'Published in Insight Jan 30, 2021',
			author: 'Albert Sans',
			title: 'How to build a Kaylen relationship with a good company',
		},
	]

	return (
		<Wrapper>
			<div className='container'>
				<Swiper className='home'
					modules={[Navigation, A11y]}
					spaceBetween={32}
					slidesPerView={2}
					navigation
					loop
					noSwiping={true}
					noSwipingClass={'slidedonttouch'}
				>
					{arr.map((item, index) => {
						return (
							<SwiperSlide key={index} className='slidedonttouch'>
								<WrapperSlides>
									<Slide
										img={item.img}
										author={item.author}
										data={item.data}
										title={item.title}
									/>
								</WrapperSlides>
							</SwiperSlide>
						)
					})}
					<Circle></Circle>
				</Swiper>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 60px 0 90px 0;
`
const WrapperSlides = styled.div`
	position: relative;
	z-index: 0;
`
const Circle = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #fff;
	position: absolute;
	top: 126px;
	left: calc(50% - 40px);
	z-index: 2;
`

export default SliderHomePage
