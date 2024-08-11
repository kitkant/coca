import React from 'react';
import styled from '@emotion/styled'
import { down } from '@/styles/utils/breakpoints'

interface IProps{
	Icon: any
	title: string
	subTitle: string
	className: string | undefined
	size: string
}

const Item = ({Icon, title, subTitle, className, size} : IProps)  => {
	return (
		<Wrapper className={className}>
			<Icon size={size}/>
			<Title>
				{title}
			</Title>
			<SubTitle>
				{subTitle}
			</SubTitle>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	&.div1{
		grid-area: 1 / 1 / 3 / 3;
	}
	&.div2{
		grid-area: 4 / 1 / 6 / 3;
	}
	&.div3{
		grid-area: 1 / 4 / 3 / 6;
	}
	&.div4{
		grid-area: 4 / 4 / 6 / 6;
	}
			${down('xlg')}{					
			gap: 20px;
	}
`
const Title = styled.h3`
	max-width: 249px;
	font-size: 32px;
	letter-spacing: -1px;
	line-height: 42px;
	font-weight: 600;
	color: #fff;
	white-space: pre-line;
		${down('xlg')}{					
			font-size: 28px;
	}
`
const SubTitle = styled.p`
	max-width: 446px;
	color: #7E8492;
	letter-spacing: 0;
	line-height: 24px;
	white-space: pre-line;
`
export default Item;