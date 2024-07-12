import BlackFooter from '@/features/BlackFooter/BlackFooter'
import ContactsContactsPage from '@/features/ContactsContactsPage/ContactsContactsPage'
import FormContactsPage from '@/features/FormContactsPage/FormContactsPage'
import PartnersHomePage from '@/features/PartnersHomePage/PartnersHomePage'
import Layout from '@/layout/Layout/Layout'

const Contacts = () => {
	return (
		<Layout>
			<ContactsContactsPage />
			<PartnersHomePage />
			<FormContactsPage /> 
			<BlackFooter />
		</Layout>
	)
}

export default Contacts
