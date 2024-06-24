import styled from '@emotion/styled'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import People from './components/People/People'

const team = [
	{
		img: '/AboutPage/teamSlides/team1.png',
		name: 'Arlyne Stefano',
		position: 'Founder & CEO',
		links: {
			twitter: '/',
			linkedin: '/',
			instagram: '/',
		},
	},
	{
		img: '/AboutPage/teamSlides/team2.png',
		name: 'Katy Cristy',
		position: 'Chief Technology Officer',
		links: {
			twitter: '/',
			linkedin: '/',
			instagram: '/',
		},
	},
	{
		img: '/AboutPage/teamSlides/team3.png',
		name: 'Roger Dzawin',
		position: 'Chief Technology Officer',
		links: {
			twitter: '/',
			linkedin: '/',
			instagram: '/',
		},
	},
	{
		img: '/AboutPage/teamSlides/team1.png',
		name: 'Arlyne Stefano',
		position: 'Founder & CEO',
		links: {
			twitter: '/',
			linkedin: '/',
			instagram: '/',
		},
	},
]

const OurTeamAboutPage = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<WrapperText>
						<Title>
							Meet our team of creators, designers, and world-class problem
							solvers
						</Title>
						<Text>
							To become the company that customers want, it takes a group of
							passionate people. Get to know the people who lead
						</Text>
					</WrapperText>
					<Swiper
						className='OurTeamAboutPage'
						modules={[Navigation, A11y, Pagination]}
						spaceBetween={32}
						slidesPerView={3}
						navigation
						loop
						noSwiping={true}
						noSwipingClass={'slidedonttouch'}
					>
						{team.map((item, index) => {
							return (
								<SwiperSlide key={index} className='slidedonttouch'>
									<People
										img={item.img}
										twitter={item.links.twitter}
										linkedin={item.links.linkedin}
										instagram={item.links.instagram}
										name={item.name}
										position={item.position}
									/>
								</SwiperSlide>
							)
						})}

						<Circle></Circle>
					</Swiper>
					<WrapperBottomText>
						<TitleBottom>
							Join our team, The one with the master touch
						</TitleBottom>
						<WrapperSubTitle>
							<SubTitleBottom>
								We believe it takes great people to make a great product. That’s
								why we hire not only the perfect professional fits, but people
								who embody our company values.
							</SubTitleBottom>
							<WrapperLink>
								<Link href={'/'}>
									<LinkBottom>See Open Position</LinkBottom>
									<Icon icon='radix-icons:arrow-right' />
								</Link>
							</WrapperLink>
						</WrapperSubTitle>
					</WrapperBottomText>
					<CircleBlue></CircleBlue>
				</Container>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 160px 0;
`
const Container = styled.div`
	position: relative;
	z-index: 0;
`
const WrapperText = styled.div`
	display: flex;
	gap: 24px;
	flex-direction: column;
	padding-bottom: 80px;
`
const Title = styled.h2`
	font-size: 56px;
	letter-spacing: -2px;
	line-height: 120%;
	font-weight: 700;
	max-width: 860px;
`
const Text = styled.p`
	font-size: 18px;
	letter-spacing: 0;
	line-height: 32px;
	font-weight: 600;
	color: #7e8492;
	max-width: 506px;
`
const Circle = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #fff;
	position: absolute;
	top: 126px;
	left: calc(33% - 40px);
	z-index: 2;
`
const WrapperBottomText = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 100px;
	align-items: center;
`
const TitleBottom = styled.h2`
	font-size: 56px;
	letter-spacing: -2px;
	line-heigh: 120%;
	max-width: 620px;
	font-weight: 700;
`
const SubTitleBottom = styled.p`
	font-size: 18px;
	letter-spacing: 0;
	line-height: 32px;
	color: #7e8492;
	max-width: 470px;
`
const WrapperLink = styled.div`
	a {
		display: flex;
		gap: 5px;
		align-items: center;
	}
	a:hover {
		opacity: 0.9;
	}
	a > svg {
		margin-top: 4px;
	}
`
const LinkBottom = styled.span`
	font-size: 16px;
	line-heigh: 24px;
	letter-spacing: 0;
	font-weight: 700;
`
const WrapperSubTitle = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	width: 100%;
	gap: 24px;
`
const CircleBlue = styled.div`
	width: 525px;
	height: 525px;
	border-radius: 50%;
	background-color: rgba(226, 248, 240, 0.7);
	filter: blur(180px);
	position: absolute;
	top: 10px;
	right: -51px;
	z-index: -1;
`
export default OurTeamAboutPage
