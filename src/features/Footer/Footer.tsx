import styled from '@emotion/styled'
import Image from 'next/image'
import { down } from '@/styles/utils/breakpoints'

const Footer = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<WrapperText>
						<Title>Think beyond the wave</Title>
						<WrapperSubTitle>
							<Line></Line>
							<SubTitle>
								Ask about Sans products, pricing, implementation, or anything
								else. Our highly trained reps are standing by, ready to help
							</SubTitle>
						</WrapperSubTitle>
					</WrapperText>
					<Circle></Circle>
					<Btn>Try for free</Btn>
				</Container>
				<WrapperNavigation>
					<WrapperLogo>
						<Image alt='logo' width={140} height={66} src={'/Logo.svg'} />
						<Text>
							We built an elegant solution. Our team created a fully integrated
							sales and marketing solution for SMBs
						</Text>
					</WrapperLogo>
					<ContainerNavigation>
						<WrapperList>
							<Span>Company</Span>
							<List>
								<Item>
									<a href='#'>About</a>
								</Item>
								<Item>
									<a href='#'>Pricing</a>
								</Item>
								<Item>
									<a href='#'>Jobs</a>
								</Item>
								<Item>
									<a href='#'>Blog</a>
								</Item>
							</List>
						</WrapperList>
						<WrapperList>
							<Span>Product</Span>
							<List>
								<Item>
									<a href='#'>Sales Software</a>
								</Item>
								<Item>
									<a href='#'>Marketplace</a>
								</Item>
								<Item>
									<a href='#'>Terms & Conditions</a>
								</Item>
								<Item>
									<a href='#'>Privacy Policy</a>
								</Item>
							</List>
						</WrapperList>
						<WrapperList>
							<Span>Discover</Span>
							<List>
								<Item>
									<a href='#'>CRM Comparision</a>
								</Item>
								<Item>
									<a href='#'>Partner Program</a>
								</Item>
								<Item>
									<a href='#'>What is CRM</a>
								</Item>
								<Item>
									<a href='#'>Resource</a>
								</Item>
							</List>
						</WrapperList>
						<WrapperList>
							<Span>Help Center</Span>
							<List>
								<Item>
									<a href='#'>Community</a>
								</Item>
								<Item>
									<a href='#'>Knowledge Base</a>
								</Item>
								<Item>
									<a href='#'>Academy</a>
								</Item>
								<Item>
									<a href='#'>Support</a>
								</Item>
							</List>
						</WrapperList>
					</ContainerNavigation>
				</WrapperNavigation>
				<LineBottom></LineBottom>
				<TextBottom>© Copyright 2023 All Rights Reserved</TextBottom>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 112px 0 59px 0;
	overflow: hidden;
	height: 851px;
`
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 3;
`
const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`
const Circle = styled.div`
	width: 621px;
	height: 621px;
	border-radius: 50%;
	background-color: rgba(250, 117, 21, 0.13);
	top: -69px;
	left: 54px;
	position: absolute;
	z-index: 1;
	filter: blur(220px);
`
const Title = styled.h3`
	font-size: 64px;
	line-height: 120%;
	font-weight: 700;
			${down('xlg')}{					
		font-size: 60px;
}
`
const SubTitle = styled.p`
	font-size: 24px;
	line-height: 34px;
	font-weight: 700;
	max-width: 553px;
		${down('xlg')}{					
		font-size: 20px;
}
`
const Line = styled.div`
	width: 76px;
	border-top: 1px solid #000;
	margin-top: 20px;
`
const WrapperSubTitle = styled.div`
	display: flex;
	gap: 24px;
`
const Btn = styled.button`
	padding: 16px 32px;
	background-color: #1d1e25;
	color: #fff;
	line-height: 24px;
	font-weight: 600;
	border-radius: 100px;
	transition: all 0.3s ease-out;
	&:hover {
		opacity: 0.9;
	}
`
const WrapperNavigation = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	z-index: 3;
	padding-top: 130px;
`
const WrapperLogo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	max-width: 290px;
`
const Text = styled.p`
	line-height: 26px;
	font-weight: 500;
`
const ContainerNavigation = styled.div`
	display: flex;
	gap: 90px;
`
const WrapperList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`
const List = styled.ul`
	display: flex;
	gap: 16px;
	flex-direction: column;
`
const Item = styled.li``
const Span = styled.span`
	font-weight: 500;
	line-height: 24px;
`
const LineBottom = styled.div`
	width: 100%;
	border-top: 1px solid #ced1d8;
	margin-top: 79px;
`
const TextBottom = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 46px;
	color: #afb3bb;
`
export default Footer
