import styled from '@emotion/styled'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
	const router = useRouter()

	const handleClick = (e: any) => {
		e.preventDefault()
		router.push('/')
	} 
	return (
		<Wrapper>
			<div className='container'>
				<WrapperContainer>
					<Btn onClick={handleClick}>
						<Image src={'/Logo.svg'} width={140} height={66} alt='logo' />
					</Btn>
					<Navigation>
						<List>
							<Item>
								<Link href='/'>Home</Link>
							</Item>
							<Item>
								<Link href='/about'>About</Link>
							</Item>
							<Item>
								<Link href='/blog'>Blog</Link>
							</Item>
							<Item>
								<Link href='/pricing'>Pricing</Link>
							</Item>
							<Item>
								<Link href='/contacts'>Contact Us</Link>
								<Icon icon="radix-icons:arrow-right" />
							</Item>
						</List>
					</Navigation>
				</WrapperContainer>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 26px 0 22px 0;
`
const Btn = styled.button`
`
const WrapperContainer = styled.div`
	display: flex;
	justify-content: space-between;
`
const Navigation = styled.nav`
	display: flex;
	align-items: center;
`
const List = styled.ul`
	display: flex;
	gap: 32px;


`			
const Item = styled.li`

display: flex;
align-items: center;
	a{
		color: #0F0F0F;
		font-size: 16px;
		font-weight:   500;
		line-height: 24px;
letter-spacing: 0;
	};
	&:last-of-type{
	margin-left: 36px;
	
	gap: 5px;
	
	border-bottom: 1px solid #000;
	padding-bottom: 6px;
	a{
		color: #000;
		font-weight:  bold;
	}
}
`

export default Header
