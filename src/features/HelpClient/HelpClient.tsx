import styled from '@emotion/styled'
import { HeroiconsOutlineCalendar } from './UI/HeroiconsOutlineCalendar'
import { ShieldCheck } from './UI/ShieldCheck'
import { TabletCheck } from './UI/TabletCheck'
import { TabletTasks } from './UI/TabletTasks'
import Item from './component/Item/Item'

const HelpClient = () => {
	const items = [
		{
			icon: HeroiconsOutlineCalendar,
			title: 'Build your date fundamental',
			subTitle: `Build access to date, develop valuable business insights\n and drive revenue while maintaining full control over\n access and use of date at all times.`,
		},
		{
			icon: TabletCheck,
			title: 'Measure more effective',
			subTitle: `Effectively measure people-based campaigns with\n the freedom to choose from best-of breed partners\n to optimize and drive media innovation.`,
		},
		{
			icon: TabletTasks,
			title: `Activate your\n date`,
			subTitle: `Accurately address your specific audiences at scale across\n any channel, platform, publisher or network and safely\n translate date between identity space to improve results.`,
		},
		{
			icon: ShieldCheck,
			title: 'Strengthen consumer privacy',
			subTitle: `Protect your customer date with leading privacy-preserving\n technologies and advanced techniques to minimize date\n movement while still enabling insight generation.`,
		},
	]

	return (
		<Wrapper>
			<div className='container'>
				<Container>
					<WrapperTitle>
						<Title>
							Coca help our client solve complex customer problems with date
							that does more.
						</Title>
						<SubTitle>
							Our platform offers the modern enterprise full control of how date
							can be access and used with industry leading software solutions
							for identity, activation, and date collaboration
						</SubTitle>
					</WrapperTitle>
					<WrapperGrid>
						{items.map((item, index) => {
							let itemClass;
							switch (index) {
									case 0:
											itemClass = "div1";
											break;
									case 1:
											itemClass = "div2";
											break;
									case 2:
											itemClass = "div3";
											break;
									case 3:
											itemClass = "div4";
											break;
									default:
											// Handle additional items if needed
											break;
							}
							return (
								<Item
									key={index}
									Icon={item.icon}
									title={item.title}
									subTitle={item.subTitle}
									className={itemClass}
								/>
							)
						})}
					</WrapperGrid>
				</Container>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: #0f0f0f;
	padding: 100px 0;
	position: relative;
	z-index: 3;
	display: flex;
	justify-content: center;
`
const WrapperTitle = styled.div`
	display: flex;
	gap: 24px;
	flex-direction: column;
`
const Title = styled.h1`
	color: #ffffff;
	font-size: 56px;
	letter-spacing: -2px;
	line-height: 120%;
	font-weight: 600;
	max-width: 700px;
`
const SubTitle = styled.p`
	max-width: 600px;
	color: #878787;
	line-height: 150%;
	font-weight: medium;
	font-size: 18px;
`
const Container = styled.div`
	display: flex;
	gap: 80px;
	flex-direction: column;
`
const WrapperGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(2, 1fr) 56px repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`
export default HelpClient
