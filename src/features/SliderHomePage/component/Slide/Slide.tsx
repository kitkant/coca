import styled from '@emotion/styled'
import Image from 'next/image'

interface Props {
	img: string
	data: string
	author: string
	title: string
}

const Slide = ({ img, data, author, title}: Props) => {
	return (
		<Wrapper>
			<WrapperImg>
					<Image alt='img' src={img} width={582} height={332}/>
			</WrapperImg>
			<WrapperData>
				<DataAuthor>{data}</DataAuthor>
				<DataAuthor>by : {author}</DataAuthor>
			</WrapperData>
			<Title onClick={()=>console.log('click')}>
			{title}
			</Title>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	
`

const WrapperImg = styled.div`

`
const WrapperData = styled.div`
	display: flex;
	justify-content: space-between;
`
const DataAuthor = styled.div`
	font-size: 14px;
	line-height: 150%;
	color: #7E8492;
`
const Title = styled.h3`
	font-size: 32px;
	letter-spacing: -2px;
	line-height: 150%;
	font-weight: 700;
	cursor: pointer;
`
export default Slide
