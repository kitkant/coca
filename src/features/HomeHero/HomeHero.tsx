import styled from '@emotion/styled'
import Image from 'next/image'

const HomeHero = () => {
	return (
		<Wrapper>
			<WrapperContainer className='container'>
				<OrangeCircle></OrangeCircle>
				<BlueCircle></BlueCircle>
				<HeroContainer>
					<Title>Digitally forward creative</Title>
					<WrapperSubTitle>
						<SubTitleLine></SubTitleLine>
						<SubTitle>
							When it comes to interactive marketing, we&apos;ve got you
							covered. Be where the world is going
						</SubTitle>
					</WrapperSubTitle>
					<WrapperInput>
						<Input placeholder='Enter your email'></Input>
						<Btn>Try for free</Btn>
					</WrapperInput>
				</HeroContainer>
				<WrapperImage>
					<ImageContainerGrowth>
						<Image
							alt='img'
							width={213.21}
							height={220.63}
							src={'HomePage/CustomerGrowthLight.svg'}
						/>
					</ImageContainerGrowth>

					<ImageContainerSales>
						<Image
							alt='img'
							width={419}
							height={346}
							src={'/HomePage/SalesLight.svg'}
						/>
					</ImageContainerSales>
					<ImageContainerStatistic>
						<Image
							alt='img'
							width={419}
							height={119}
							src={'/HomePage/StatisticLight.svg'}
						/>
					</ImageContainerStatistic>
				</WrapperImage>
				
			</WrapperContainer>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 87px;
`
const WrapperContainer = styled.div`
	position: relative;
	z-index: 1;
	padding-bottom: 135px;
	display: flex;
	justify-content: space-between;
`
const Title = styled.h1`
	font-weight: 700;
	font-size: 81px;
	max-width: 750px;
	position: relative;
	z-index: 2;
	letter-spacing: -3.2px;
	line-height: 115%;
`
const OrangeCircle = styled.div`
	filter: blur(180px);
	background-color: rgba(250, 117, 21, 0.13);
	height: 551px;
	width: 551px;
	position: absolute;
	left: 51px;
	top: 13px;
	border-radius: 50%;
	z-index: 0;
`
const BlueCircle = styled.div`
	filter: blur(180px);
	background-color: rgba(226, 248, 240, 0.7);
	height: 525px;
	width: 525px;
	position: absolute;
	left: 959px;
	top: 185px;
	border-radius: 50%;
	z-index: 0;
`
const WrapperSubTitle = styled.div`
	padding-top: 114px;
	display: flex;
	gap: 27px;
	position: relative;
	z-index: 2;
`
const SubTitleLine = styled.div`
	height: 0px;
	width: 76px;
	border-bottom: 1px solid black;
	margin-top: 22px;
`
const SubTitle = styled.div`
	font-weight: 600;
	font-size: 32px;
	letter-spacing: -1px;
	line-height: 42px;
	max-width: 500px;
`
const HeroContainer = styled.div`
	position: relative;
	z-index: 2;
`
const WrapperInput = styled.div`
	padding-top: 70px;
	gap: 16px;
	display: flex;
	align-items: end;
`
const Input = styled.input`
	background-color: transparent;
	border-bottom: 1px solid #d6d6d6;
	height: 47px;
	max-width: 280px;
	width: 100%;
	position: relative;
	&::placeholder {
		position: absolute;
		top: 0;
	}
`
const Btn = styled.button`
	padding: 16px 43.5px;
	background-color: #1d1e25;
	color: #fff;
	border-radius: 100px;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	transition: all 0.3s ease-out;
	&:hover{
		opacity: 0.9;
	}
`
const WrapperImage = styled.div`
	position: relative;
	z-index: 3;
	height: 100%;
	width: 50%;
`
const ImageContainerGrowth = styled.div`
	position: absolute;
	z-index: 5;
	right: -67px;
	top: 26px;
	filter: drop-shadow(20px 40px 24px rgba(45,51,81, 0.12));
`
const ImageContainerSales = styled.div`
	position: absolute;
	z-index: 4;
	right: 61px;
	top: 76px;
	filter: drop-shadow(20px 40px 24px rgba(45,51,81, 0.12));
` 
const ImageContainerStatistic = styled.div`
	position: absolute;
	z-index: 4;
	right: 61px;
	top: 438px;
	filter: drop-shadow(20px 40px 24px rgba(45,51,81, 0.12));
`

export default HomeHero
