import styled from '@emotion/styled'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Item from './components/Item/Item'
import BelieverItem from './components/BelieverItem/BelieverItem'
import GirlsItem from './components/GirlItem/GirlsItem'
import Circle from './components/Circle/Circle'


const SliderAboutPage = () => {
	return (
		<Wrapper>
			<Container>
				<Swiper
					className='aboutBeliever'
					modules={[Navigation, A11y]}
					slidesPerView={2.5}
					spaceBetween={30}
					navigation
					noSwiping={true}
					noSwipingClass={'slidedonttouch'}
				>
					<SwiperSlide
						className='slidedonttouch'
						style={{ maxWidth: '502px', marginLeft: '120px' }}
					>
						<Item />
					</SwiperSlide>
					<SwiperSlide className='slidedonttouch' style={{ maxWidth: '502px' }}>
						<BelieverItem />
					</SwiperSlide>
					<SwiperSlide className='slidedonttouch' style={{ maxWidth: '502px' }}>
						<GirlsItem />
					</SwiperSlide>
				</Swiper>
				<Circle />
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 135px;
	padding-bottom: 160px;
	overflow: 'hidden';
	position: relative;
	z-index: 0;
`
const Container = styled.div`
	width: 100%;
	max-width: 1440px;
	position: relative;
	z-index: 0;
`
const WrapperCircle = styled.div`
	position: relative;
	z-index: 0;
`
export default SliderAboutPage
