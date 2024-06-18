import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const HeroAboutPage = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<Title>
						Everything you need to get the attention of your audience
					</Title>
					<WrapperSubTitle>
					<ContainerSubTitle>
						<Line></Line>
						<SubTitle>
							Our digital agency helps clients develop, implement and maintain
							successful digital marketing strategies across all channels. Also
							work with you to build your website and create online businesses
							that grow.
						</SubTitle>
					</ContainerSubTitle>
					
						<Link style={{
							position: 'relative',
					
						}} href={'/'}><Image className='rotating' alt='link' src={'/AboutPage/LinkedPath.svg'} width={162} height={162}/>
						<Image style={{
							position: 'absolute',
							top: 'calc(50% - 20px)',
							left: 'calc(50% - 20px)'
						}} alt='link' src={'/AboutPage/arrow.svg'} width={40} height={40}/>
						</Link>
					
					</WrapperSubTitle>
					
				</Container>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 105px;
`
const Title = styled.h1`
	font-size: 72px;
	line-height: 120%;
	letter-spacing: -3px;
	font-weight: 700;
	max-width: 900px;
`
const SubTitle = styled.div`
	font-size: 32px;
	letter-spacing: -1px;
	font-weight: 700;
	line-height: 42px;
	max-width: 700px;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 118px;
`
const Line = styled.div`
	width: 76px;
	border-top: 1px solid #000;
	margin-top: 10px;
`
const WrapperSubTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const ContainerSubTitle = styled.div`
	display: flex;
	gap: 24px;
`
export default HeroAboutPage
