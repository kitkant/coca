import React from 'react';
import styled from '@emotion/styled'
import Image from 'next/image'

interface Props{
	image: any
	Icon: any
	title: string
	subTitle: string
}

const Items = ({image, Icon, title, subTitle} : Props) => {
	return (
		<Wrapper>
			<WrapperImg>
				<Image src={image} alt='img' style={{objectFit: "contain"}} fill={true}/>
				<Circle>
					<Icon/>
				</Circle>
			</WrapperImg>
			<WrapperText>
				<Title>
				{title}
				</Title>
				<SubTitle>
				{subTitle}
				</SubTitle>
			</WrapperText>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	gap: 60px;
	max-width: 568px;
`
const WrapperImg = styled.div`
	position: relative;
	height: 273px;
	width: 240px;
`
const Circle = styled.div`
	position: absolute;
	right: 12px;
	top: 12px;
	padding: 16px;
	background-color: rgba(22, 26, 52, 0.6);
	border-radius: 50%;
`
const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	max-width: 268px;
	justify-content: center;
`
const Title = styled.h3`
	font-size: 32px;
	letter-spacing: -1px;
	line-height: 42px;
	font-weight: 700;
	max-width: 256px;
`
const SubTitle = styled.p`
	line-height: 26px;
	color: #7E8492;
`
export default Items;