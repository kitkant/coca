import styled from '@emotion/styled'
import Pin from './components/Pin'
import WorldMap from './components/WorldMap'

const ContactsContactsPage = () => {
	const MapContact = [
		{
			title: 'Support',
			subTitle: 'Our friendly team is here to help.',
			options: 'support@sans.com',
		},
		{
			title: 'Sales',
			subTitle: 'Questions or queries? Get in touch!',
			options: 'sales@sans.com',
		},
		{
			title: 'Phone',
			subTitle: 'Mon-Fri from 8am to 5pm.',
			options: '+1 (435) 345-7655',
		},
	]

	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<Title>Contact our team to find out more</Title>
					<WrapperMap>
						<ContainerMap>
							<WorldMap />
							<WrapperPin>
								<ContainerLocations>
									<TitleLocations>Yogja, INA</TitleLocations>
									<SubTitleLocations>
										100 Smith Street Collingwood VIC 3066 AU
									</SubTitleLocations>
								</ContainerLocations>
								<Pin />
							</WrapperPin>
						</ContainerMap>
						<ContainerOptions>
							{MapContact.map((item, index) => {
								return (
									<WrapperItem key={index}>
										<WrapperItemTitle>
											<ItemTitle>{item.title}</ItemTitle>
											<ItemSubTitle>{item.subTitle}</ItemSubTitle>
										</WrapperItemTitle>
										<ItemOptions>{item.options}</ItemOptions>
									</WrapperItem>
								)
							})}
						</ContainerOptions>
					</WrapperMap>
				</Container>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 90px;
	padding-bottom: 85px;
`
const Title = styled.h1`
	font-size: 72px;
	line-height: 120%;
	letter-spacing: -3px;
	font-weight: 800;
	max-width: 750px;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 100px;
`
const WrapperMap = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
const ContainerMap = styled.div`
	position: relative;
	z-index: 0;
`
const WrapperPin = styled.div`
	position: absolute;
	z-index: 1;
	right: 70px;
	bottom: 135px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const ContainerLocations = styled.div`
	padding: 12px 16px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 180px;
	background-color: #fff;
	filter: drop-shadow(0 10px 5px rgba(126, 132, 146, 0.2));
`
const TitleLocations = styled.h3`
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0;
	font-weight: 700;
`
const SubTitleLocations = styled.p`
	color: #7e8492;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: 0;
`
const ContainerOptions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`
const WrapperItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-bottom: 32px;
	border-bottom: 1px solid #afb3bb;
	max-width: 176px;
`
const WrapperItemTitle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`
const ItemTitle = styled.span`
	font-size: 24px;
	line-height: 32px;
	letter-spacing: 0;
	font-weight: 800;
`
const ItemSubTitle = styled.p`
	color: #7e8492;
	line-height: 24px;
	letter-spacing: 0;
`
const ItemOptions = styled.span`
	line-height: 26px;
	letter-spacing: 0;
	font-weight: 500;
`
export default ContactsContactsPage
