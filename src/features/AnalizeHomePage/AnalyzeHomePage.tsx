import React from 'react';
import styled from '@emotion/styled'
import Items from './component/Item/Items'
import { Smile } from './UI/Smile'
import { ArrowAnalyze } from './UI/ArrowAnalyze'
import { Group } from './UI/Group'
import { down } from '@/styles/utils/breakpoints'
import { Dashboard } from './UI/Dashboard'

const AnalyzeHomePage = () => {

	const items = [{
		image: '/HomePage/analyze/1.png',
		icon: Smile,
		title: 'Lead happiness for customers',
		subTitle: 'Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster'
	},
	{
		image: '/HomePage/analyze/2.png',
		icon: ArrowAnalyze,
		title: 'Mutually support each other',
		subTitle: 'Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster'
	},
	{
		image: '/HomePage/analyze/3.png',
		icon: Group,
		title: 'Have fun growing together',
		subTitle: 'Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster'
	},
	{
		image: '/HomePage/analyze/4.png',
		icon: Dashboard,
		title: 'Make Your Business Grow',
		subTitle: 'Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster'
	}]

	return (
		<Wrapper>
			<div className='container'>
				<Container>
						<WrapperText>
							<Title>
							Advertise, analyze, and optimize! We do it all for you
							</Title>
							<SubTitle>
							Build more meaningful and lasting relationships - better understand their needs, identify new opportunities to help address any problems faster
							</SubTitle>
						</WrapperText>
						<WrapperGrid>
						{items.map(item=>{
								return <Items key={item.image} image={item.image} Icon={item.icon} title={item.title} subTitle={item.subTitle}/>
						})}
						</WrapperGrid>
						
						
				</Container>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 160px;
	padding-bottom: 100px;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 80px;
`
const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	max-width: 610px;
`
const Title = styled.h2`
	font-size: 56px;
	line-height: 120%;
	letter-spacing: -2px;
	font-weight: 700;
		${down('xlg')}{					
		font-size: 48px;
		max-width: 550px;
}
`
const SubTitle = styled.p`
	font-size: 18px;
	line-height: 32px;
	color:#7E8492;
	max-width: 410px;
		${down('xlg')}{					
		font-size: 16px;
    line-height: 28px;
		max-width: 380px;
}
`
const WrapperGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 56px 64px;
`
export default AnalyzeHomePage;