import styled from '@emotion/styled'
import Image from 'next/image'

const Item = () => {
	return (
		<Wrapper>
			<Image alt='slide' src={'/AboutPage/slides/slide1.png'} style={{objectFit: "contain", maxWidth: '502px'}} width={502} height={630}/>
		</Wrapper>
	);
};

	const Wrapper = styled.div`
	
	`

export default Item;