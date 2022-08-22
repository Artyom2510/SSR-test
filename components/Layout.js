import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title = 'SSR test' }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/users'>
				<a>Users</a>
			</Link>

			<>{children}</>
		</>
	);
};

export default Layout;
