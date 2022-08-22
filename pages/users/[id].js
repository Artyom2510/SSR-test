import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const User = ({ user }) => {
	const { query } = useRouter();

	return (
		<Layout>
			<p>{query.id}</p>
			<p>{user.name}</p>
		</Layout>
	);
};

export default User;
// export async function getServerSideProps({ params }) {
export async function getServerSideProps(context) {
	console.log('context', context);
	const { params } = context;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	);
	const user = await response.json();
	return {
		props: { user } // will be passed to the page component as props
	};
}
