import styled from '@emotion/styled'

const PowerfulAboutPage = () => {
	return (
		<Wrapper>
			<div className='container'>
				<Container>
				<Line></Line>
				<WrapperText>
					<Title>Powerful ideas & sales acceleration</Title>
					<Text>
						We are a software development firm specializing in digital products.
						We build beautiful, functional and cross-platform solutions that are
						accessible to all.
					</Text>
				</WrapperText>
				<Line></Line>
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
	display: flex;
	flex-direction: column;
	gap: 80px;

`
const Line = styled.div`
	width: 100%;
	border-top: 1px solid #ededed;
`
const WrapperText = styled.div`
	display: flex;
	justify-content: space-between;
`
const Title = styled.h2`
	max-width: 480px;
	font-size: 56px;
	font-weight: 700;
	letter-spacing: -2px;
	line-height: 120%;
`
const Text = styled.p`
	line-height: 150%;
	letter-spacing: 0;
	font-weight: 700;
	font-size: 24px;
	max-width: 500px;
`
export default PowerfulAboutPage
