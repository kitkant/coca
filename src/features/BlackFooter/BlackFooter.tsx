import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import Instagram from './components/UI/Instagram'
import Linkedin from './components/UI/Linkedin'
import Twitter from './components/UI/Twitter'
import Facebook from './components/UI/facebook'

const BlackFooter = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<WrapperLine>
						<Line></Line>
						<Line></Line>
						<Line></Line>
						<Line></Line>
						<Line></Line>
					</WrapperLine>
					<WrapperText>
						<Title>Think beyond the wave</Title>
						<WrapperSubTitle>
							<SubTitle>
								Ask about Sans products, pricing, implementation, or anything
								else. Our highly trained reps are standing by, ready to help
							</SubTitle>
						</WrapperSubTitle>
					</WrapperText>

					<Btn>Try for free</Btn>
				</Container>
				<WrapperNavigation>
					<WrapperLogo>
						<Image alt='logo' width={140} height={66} src={'/LogoDark.svg'} />
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
									<Link href='#'>About</Link>
								</Item>
								<Item>
									<Link href='#'>Pricing</Link>
								</Item>
								<Item>
									<Link href='#'>Jobs</Link>
								</Item>
								<Item>
									<Link href='#'>Blog</Link>
								</Item>
							</List>
						</WrapperList>
						<WrapperList>
							<Span>Product</Span>
							<List>
								<Item>
									<Link href='#'>Sales Software</Link>
								</Item>
								<Item>
									<Link href='#'>Marketplace</Link>
								</Item>
								<Item>
									<Link href='#'>Terms & Conditions</Link>
								</Item>
								<Item>
									<Link href='#'>Privacy Policy</Link>
								</Item>
							</List>
						</WrapperList>
						<WrapperList>
							<Span>Discover</Span>
							<List>
								<Item>
									<Link href='#'>CRM Comparision</Link>
								</Item>
								<Item>
									<Link href='#'>Partner Program</Link>
								</Item>
								<Item>
									<Link href='#'>What is CRM</Link>
								</Item>
								<Item>
									<Link href='#'>Resource</Link>
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
				<WrapperTextBottom>
				<WrapperSocialAndPolicy>
				
					<WrapperSocialMedia>
						<SocialBtn>
							<Link href={'/'}>
								<Facebook />
							</Link>
						</SocialBtn>
						<SocialBtn>
							<Link href={'/'}>
								<Twitter />
							</Link>
						</SocialBtn>
						<SocialBtn>
							<Link href={'/'}>
								<Instagram />
							</Link>
						</SocialBtn>
						<SocialBtn>
							<Link href={'/'}>
								<Linkedin />
							</Link>
						</SocialBtn>
					</WrapperSocialMedia>
					<WrapperPolicy>
						<Link href={'/'}>
							<Policy>Privacy Policy</Policy>
						</Link>
						<Link href={'/'}>
							<Policy>Terms & Conditions</Policy>
						</Link>
						<Link href={'/'}>
							<Policy>Support</Policy>
						</Link>
					</WrapperPolicy>
					</WrapperSocialAndPolicy>
					<Copyright>
					© Copyright 2023 All Rights Reserved
					</Copyright>
					
				</WrapperTextBottom>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: #1d1e25;
	display: flex;
	justify-content: center;
	padding: 112px 0 56px 0;
`
const Container = styled.div`
	position: relative;
	z-index: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const WrapperLine = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	z-index: 1;
	width: 100%;
	top: -112px;
`
const Line = styled.div`
	height: 777px;
	border-right: 1px dashed #242949;
`
// copy
const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	position: relative;
	z-index: 3;
`

const Title = styled.h3`
	font-size: 64px;
	line-height: 120%;
	font-weight: 700;
	color: #fff;
`
const SubTitle = styled.p`
	font-size: 18px;
	line-height: 32px;
	font-weight: 500;
	max-width: 520px;
	color: #afb3bb;
`

const WrapperSubTitle = styled.div`
	display: flex;
	gap: 24px;
`
const Btn = styled.button`
	padding: 16px 32px;
	background-color: #fff;
	color: #1d1e25;
	line-height: 24px;
	font-weight: 700;
	letter-spacing: 0;
	border-radius: 100px;
	transition: all 0.3s ease-out;
	&:hover {
		opacity: 0.9;
	}
	position: relative;
	z-index: 3;
`
const WrapperNavigation = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	z-index: 4;
	padding-top: 134px;
`
const WrapperLogo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	max-width: 290px;
	img {
		position: relative;
		z-index: 3;
	}
`
const Text = styled.p`
	line-height: 26px;
	font-weight: 500;
	color: #7e8492;
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
const Item = styled.li`
	a {
		color: #7e8492;
	}
	a:hover {
		opacity: 0.9;
	}
`
const Span = styled.span`
	font-weight: 500;
	line-height: 24px;
	color: #fff;
`
const LineBottom = styled.div`
	width: 100%;
	border-top: 1px solid #ced1d8;
	margin-top: 56px;
`
const WrapperTextBottom = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 40px;
	color: #afb3bb;
	position: relative;
	z-index: 3;
	width: 100%;
`
const WrapperSocialMedia = styled.div`
	display: flex;
	gap: 24px;
`
const SocialBtn = styled.button`
	&:hover{
		opacity: 0.9;
	}
`
const WrapperPolicy = styled.div`
	display: flex;
	max-width: 360px;
	justify-content: space-between;
	width: 100%;
`
const Policy = styled.span`
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0;
	color: #fff;
	&:hover{
		opacity: 0.9;
	}
`
const WrapperSocialAndPolicy = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 584px;
	width: 100%;	

`
const Copyright = styled.span`
	font-size: 14px;
	line-height: 20px;
	color: #fff;	
	display: flex;
	align-items: center;
`

export default BlackFooter
