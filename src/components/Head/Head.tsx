import head from './Head.module.css';

export const Head = () => {
	return (
		<section className={head.head}>
			<h1>Lista de Tareas</h1>
			<span>Se han completado 2 de 5 tareas</span>
		</section>
	);
};
