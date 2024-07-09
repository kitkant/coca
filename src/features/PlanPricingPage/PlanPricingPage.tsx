import styled from '@emotion/styled'
import { Fragment } from 'react'
import CardPrice from './components/CardPrice'

const PlanPricingPage = () => {
	const arrCard = ['Started', 'Popular', 'Enterprise']

	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<WrapperTitle>
						<Span>Pricing plans</Span>
						<Title>Choose a plan for a more advanced business</Title>
					</WrapperTitle>
					<WrapperSwitch>
						<label className='switchPricing'>
							<input type='checkbox' />
							<span className='sliderPricing roundPricing'></span>
						</label>
						<AnnualPricing>Annual pricing (save 20%)</AnnualPricing>
					</WrapperSwitch>
					<WrapperCards>
						{arrCard.map((_, index) => {
							return (
								<Fragment key={index}>
									<CardPrice card={_} />
								</Fragment>
							)
						})}
					</WrapperCards>

					<OrangeCircle></OrangeCircle>
					<BlueCircle></BlueCircle>
				</Container>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`
const Container = styled.div`
	padding-top: 90px;
	padding-bottom: 122px;
	display: flex;
	flex-direction: column;
	gap: 56px;
	align-items: center;
	position: relative;
	z-index: 0;
`
const WrapperTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	position: relative;
	z-index: 2;
`
const Span = styled.span`
	padding: 4px 12px;
	border-radius: 16px;
	background-color: rgba(20, 99, 255, 0.1);
	color: #1463ff;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 0;
	line-height: 24px;
`
const Title = styled.h1`
	font-size: 72px;
	line-height: 120%;
	letter-spacing: -3px;
	font-weight: 800;
	max-width: 900px;
	text-align: center;
`
const WrapperSwitch = styled.div`
	display: flex;
	gap: 24px;
	position: relative;
	z-index: 2;
`
const AnnualPricing = styled.span`
	font-size: 16px;
	line-height: 26px;
	letter-spacing: 0;
	color: #7e8492;
`
const OrangeCircle = styled.div`
	filter: blur(180px);
	background-color: rgba(250, 117, 21, 0.13);
	height: 551px;
	width: 551px;
	position: absolute;
	left: 51px;
	top: 0;
	border-radius: 50%;
	z-index: 1;
`
const BlueCircle = styled.div`
	filter: blur(180px);
	background-color: rgba(226, 248, 240, 0.7);
	height: 525px;
	width: 525px;
	position: absolute;
	right: -57px;
	top: 185px;
	border-radius: 50%;
	z-index: 1;
`
const WrapperCards = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`
export default PlanPricingPage
