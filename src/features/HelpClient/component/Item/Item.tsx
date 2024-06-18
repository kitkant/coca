import React from 'react';
import styled from '@emotion/styled'

interface IProps{
	Icon: any
	title: string
	subTitle: string
	className: string | undefined
}

const Item = ({Icon, title, subTitle, className} : IProps)  => {
	return (
		<Wrapper className={className}>
			<Icon/>
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
`
const Title = styled.h3`
	max-width: 249px;
	font-size: 32px;
	letter-spacing: -1px;
	line-height: 42px;
	font-weight: 600;
	color: #fff;
	white-space: pre-line;
`
const SubTitle = styled.p`
	max-width: 446px;
	color: #7E8492;
	letter-spacing: 0;
	line-height: 24px;
	white-space: pre-line;
`
export default Item;