import Link from 'next/link';
import Layout from '../components/Layout';

const Users = ({ users }) => {
	return (
		<Layout>
			<ul>
				{users.map(({ name, id }) => (
					<li key={id}>
						<Link href={`/users/${id}`}>
							<a>{name}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default Users;
export async function getStaticProps() {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const users = await response.json();

	return {
		props: { users } // will be passed to the page component as props
	};
}
