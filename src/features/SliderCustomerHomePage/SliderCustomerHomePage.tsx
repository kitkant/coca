import styled from '@emotion/styled'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Slide from './component/Slide/Slide'

const SliderCustomerHomePage = () => {
	const arr = [
		{
			text: '',
			name: '',
			position: '',
		},
		{
			text: '',
			name: '',
			position: '',
		},
		{
			text: '',
			name: '',
			position: '',
		},
		{
			text: '',
			name: '',
			position: '',
		},
	]
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<WrapperText>
						<Title>What our customer are saying</Title>
						<SubTitle>
							We are trusted numerous companies from different business to meet
							their needs
						</SubTitle>
					</WrapperText>

					<div>
						<Swiper
							className='homeCustomer'
							modules={[Navigation, A11y]}
							slidesPerView={1}
							navigation
							loop
							noSwiping={true}
							noSwipingClass={'slidedonttouch'}
						>
							{arr.map((item, index) => {
								return (
									<SwiperSlide className='slidedonttouch' key={index}>
										<WrapperSlides>
											<Slide
												text={item.text}
												name={item.name}
												position={item.position}
											/>
										</WrapperSlides>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</Container>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 70px 0 160px 0;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
`
const WrapperText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Title = styled.h3`
	max-width: 530px;
	font-size: 56px;
	letter-spacing: -2px;
	line-height: 120%;
	font-weight: 700;
`
const SubTitle = styled.p`
	color: #7e8492;
	font-size: 18px;
	line-height: 32px;
	max-width: 340px;
`
const WrapperSlides = styled.div`
	position: relative;
	z-index: 0;
`
export default SliderCustomerHomePage
