import {JSX} from 'react';

interface Props {
	children: JSX.Element;
}

export const Layout = ({children}: Props) => {
	return (
		<section style={{
			maxWidth: '800px',
			margin: '0 auto',
			display: 'flex',
			flexDirection: 'column',
			gap: '1.5rem'
		}}>
			{children}
		</section>
	);
};
