import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import Instagram from '../UI/Instagram/Instagram'
import Linkedin from '../UI/Linkedin/Linkedin'
import Twitter from '../UI/Twitter/Twitter'

interface Props {
	img: string
	name: string
	position: string
	twitter: string
	linkedin: string
	instagram: string
}

const People = ({
	img,
	name,
	position,
	twitter,
	linkedin,
	instagram,
}: Props) => {
	return (
		<Wrapper>
			<Image alt='person' width={434} height={379} src={img} />
			<WrapperContent>
				<WrapperText>
					<Name>{name}</Name>
					<SubName>{position}</SubName>
				</WrapperText>
				<WrapperLinks>
					<Link href={twitter}>
						<CircleLinks>
							<Twitter />
						</CircleLinks>
					</Link>
					<Link href={linkedin}>
						<CircleLinks>
							<Linkedin />
						</CircleLinks>
					</Link>
					<Link href={instagram}>
						<CircleLinks>
							<Instagram />
						</CircleLinks>
					</Link>
				</WrapperLinks>
			</WrapperContent>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`
const WrapperContent = styled.div`
	display: flex;
	justify-content: space-between;
`
const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`
const Name = styled.span`
	font-size: 24px;
	line-height: 150%;
	letter-spacing: 0;
	font-weight: 700;
`
const SubName = styled.span`
	font-size: 18px;
	line-height: 150%;
	letter-spacing: 0;
	color: #7e8492;
`
const WrapperLinks = styled.div`
	display: flex;
	gap: 8px;
`
const CircleLinks = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #dbdbf8;
	&:hover {
		opacity: 0.9;
	}
`
export default People
