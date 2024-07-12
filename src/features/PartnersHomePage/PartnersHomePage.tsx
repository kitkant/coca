import Counter from '@/compoents/Counter'
import styled from '@emotion/styled'
import Image from 'next/image'

const PartnersHomePage = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Hr></Hr>
				<Container>
					<WrapperPartners>
						<WrapperCounter>
							<ContainerCounter>
								<Counter end={890} />
								<span>+</span>
							</ContainerCounter>
							<Text>
								Some big companies that we work with, and trust us very much
							</Text>
						</WrapperCounter>
						<WrapperPartnersLogo>
							<ContainerPartnersLogo>
								<PartnerLogo>
									<Image alt='img' src={'/HomePage/partners/AirbnbLogo.svg'}  width={97} height={30}/>
								</PartnerLogo>
								<PartnerLogo>
										<Image alt='img' src={'/HomePage/partners/AmazonLogo.svg'}  width={97} height={30}/>
								</PartnerLogo>
								<PartnerLogo>
										<Image alt='img' src={'/HomePage/partners/FedExLogo.svg'}  width={94} height={28}/>
								</PartnerLogo>
								<PartnerLogo>
										<Image alt='img' src={'/HomePage/partners/MicrosoftLogo.svg'}  width={114} height={24}/>
								</PartnerLogo>
							</ContainerPartnersLogo>
							<ContainerPartnersLogo>
							<PartnerLogo>
									<Image alt='img' src={'/HomePage/partners/GoogleLogo.svg'}  width={89} height={30}/>
								</PartnerLogo>
								<PartnerLogo>
										<Image alt='img' src={'/HomePage/partners/OLAlogo.svg'}  width={92} height={32}/>
								</PartnerLogo>
								<PartnerLogo>
										<Image alt='img' src={'/HomePage/partners/WalmartLogo.svg'}  width={112} height={26}/>
								</PartnerLogo>
								<PartnerLogo>
										<Image alt='img' src={'/HomePage/partners/OYOLogo.svg'}  width={79} height={30}/>
								</PartnerLogo>
							</ContainerPartnersLogo>
						</WrapperPartnersLogo>
						<ContainerPartnersLogo></ContainerPartnersLogo>
					</WrapperPartners>
				</Container>
				<Hr></Hr>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`
const Hr = styled.div`
	width: 100%;
	height: 1px;
	border-top: 1px solid #ededed;
`
const Container = styled.div`
	padding: 86px 0;
`
const WrapperPartners = styled.div`
	display: flex;
	gap: 30px;
	justify-content: center;
`
const WrapperCounter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`
const ContainerCounter = styled.div`
	line-height: 120%;
	font-size: 56px;
	letter-spacing: -2px;
	font-weight: 700;
`
const Text = styled.p`
	font-size: 18px;
	line-height: 32px;
	letter-spacing: 0;
	font-weight: medium;
	color: #7e8492;
	max-width: 300px;
`
const WrapperPartnersLogo = styled.div`
	display: flex;
	flex-direction: column;
`
const ContainerPartnersLogo = styled.div`
	display: flex;
	gap: 30px;
`
const PartnerLogo = styled.div`
	width: 160px;
	height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export default PartnersHomePage
