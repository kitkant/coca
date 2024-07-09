import styled from '@emotion/styled'
import CheckAccess from './UI/CheckAccess'
import Thunder from './UI/Thunder'
import CheckDisable from './UI/CheckDisable'
import Heart from './UI/Heart'
import Crown from './UI/Crown'

interface IProps {
	card: string
}

const CardPrice = ({ card }: IProps) => {
	return (
		<Container className={card === 'Popular' ? 'popular' : ''}>
			<WrapperTopIcons>
				<IconButton className={card === 'Popular' ? 'popular' : ''}>
				{card && card === 'Popular' ? <Thunder /> : '' +
					card && card === 'Started' ? <Heart /> : '' +
					card && card === 'Enterprise' ? <Crown /> : ''
					}
					
				</IconButton>
				{card === 'Popular' ? (
					<BestButton>
						<SpanBest>Best Offers 🔥</SpanBest>
					</BestButton>
				) : (
					<></>
				)}
			</WrapperTopIcons>
			<WrapperTitle>
				<Title className={card === 'Popular' ? 'text-[#fff]' : ''}>{card}</Title>
				<SubTitle >
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</SubTitle>
			</WrapperTitle>
			<WrapperPrice>
				<Price className={card === 'Popular' ? 'text-[#fff]' : ''}>
					
				{card && card === 'Popular' ? '$1400' : '' +
					card && card === 'Started' ? '$100' : '' +
					card && card === 'Enterprise' ? '$2100' : ''
					}
					</Price>
				<TimePrice className={card === 'Popular' ? 'text-[#fff]' : ''}>/mo</TimePrice>
			</WrapperPrice>
			<List>
				<Item>
						<ItemMain className={card === 'Popular' ? 'text-[#fff]' : ''}>
						What’s included:
						</ItemMain>
				</Item>
				<Item>
					<WrapperItems>
						<CheckAccess />
						<ItemSpanActive className={card === 'Popular' ? 'text-[#fff]' : ''}>Unlimited Upload</ItemSpanActive>
					</WrapperItems>
				</Item>
				<Item>
						<WrapperItems>
						<CheckAccess />
						<ItemSpanActive className={card === 'Popular' ? 'text-[#fff]' : ''}>Advanced Statistic</ItemSpanActive>
					</WrapperItems></Item>
				<Item>
						<WrapperItems>
						<CheckAccess />
						<ItemSpanActive className={card === 'Popular' ? 'text-[#fff]' : ''}>Profile Badge</ItemSpanActive>
					</WrapperItems></Item>
				<Item>
						<WrapperItems>
						<CheckAccess />
						<ItemSpanActive className={card === 'Popular' ? 'text-[#fff]' : ''}>Access to the community</ItemSpanActive>
					</WrapperItems></Item>
				<Item>
						<WrapperItems>
						{card !== 'Enterprise' ? <CheckDisable/> : <CheckAccess />}
						<ItemSpanActive className={card === 'Enterprise' ? '' : 'line-through text-[#7E8492]'}>History of all Liked Photos</ItemSpanActive>
					</WrapperItems></Item>
				<Item>
						<WrapperItems>
						{card === 'Started' ? <CheckDisable/> : <CheckAccess />}
						<ItemSpanActive 
						className={
							card === 'Started'  ? 'line-through text-[#7E8492]' : 'text-[#fff]' + 
							card === 'Enterprise' ? 'text-[#000]' : '' + 
							card === 'Popular' ? 'text-[#fff]' : ''
						}
						
						>Directory Listing</ItemSpanActive>
					</WrapperItems></Item>
				<Item>
						<WrapperItems>
						{card !== 'Enterprise' ? <CheckDisable/> : <CheckAccess />}
						<ItemSpanActive className={card === 'Enterprise' ? '' : 'line-through text-[#7E8492]'}>Customize Your Profile</ItemSpanActive>
					</WrapperItems></Item>
				<Item>
					
						<WrapperItems>
						{card !== 'Enterprise' ? <CheckDisable/> : <CheckAccess />}
						<ItemSpanActive className={card === 'Enterprise' ? '' : 'line-through text-[#7E8492]'}>Display Your Workshops</ItemSpanActive>
					</WrapperItems></Item>
			</List>
			<WrapperBtn>
				<Btn className={card === 'Popular' ? 'popular' : ''}>Chose Plan</Btn>
			</WrapperBtn>
	
		</Container>
	)
}

const Container = styled.div`
	max-height: 800px;
	max-width: 378px;
	position: relative;
	z-index: 2;
	padding: 40px 24px;
	border: 1px solid #7E8492;
	background-color: transparent;
	transition: all 0.3s ease;
	border-radius: 16px;
	margin-top: 64px;
	&.popular{
	margin-top: 0px;
		border: 1px solid #161a34;
		background-color: #161a34;
	}
`
const WrapperTopIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const IconButton = styled.div`
	position: relative;
	z-index: 2;
	background-color: #F5F5F5;
	padding: 8px;
	border-radius: 50%;
	&.popular{
		background-color: #1463ff;
	}
`
const BestButton = styled.div`
	padding: 6px 12px;
	background-color: #1463ff;
	border-radius: 100px;
	cursor: default;
	&popular:not {
		display: none;
	}
`
const SpanBest = styled.span`
	line-height: 20px;
	font-size: 14px;
	color: #fff;
`
const WrapperTitle = styled.div`
	flex-direction: column;
	gap: 8px;
	padding-top: 16px;
`
const Title = styled.h2`
	font-size: 24px;
	line-height: 34px;
	font-weight: 700;
 
`
const SubTitle = styled.p`
	font-size: 16px;
	line-height: 22px;
	color: #7e8492;
	letter-spacing: 0;
	font-weight: 500;
`
const Price = styled.span`
	font-size: 56px;
	line-height: 120%;
	letter-spacing: -2px;
	font-weight: 700;
	 
`
const WrapperPrice = styled.div`
	display: flex;
	gap: 8px;
	padding-top: 24px;
	align-items: end;
`
const TimePrice = styled.span`
	font-size: 16px;
	line-height: 26px;
	letter-spacing: 0;
	 
`
const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding-top: 24px;
`
const Item = styled.li`
	display: flex;
	gap: 5px;
`
const ItemSpan = styled.span``
const ItemSpanActive = styled.span`
	letter-spacing: 0;
	line-height: 26px;
	font-weight: 500;
`
const ItemMain = styled.span`
	line-height: 24px;
	letter-spacing: 0;
	font-weight: 800;
 
`
const WrapperItems = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`
const Btn = styled.button`
	padding: 16px 32px;
	line-height: 24px;
	letter-spacing: 0;
	font-weight: 800;
	color: #1D1E25;
	background-color: #fff;
	border-radius: 100px;
	&:not(.popular){
		border: 1px solid #7E8492;
	}
`
const WrapperBtn = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 40px;
`
export default CardPrice
