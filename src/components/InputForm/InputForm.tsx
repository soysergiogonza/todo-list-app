import styles from './InputForm.module.css';
import {ChangeEvent, FormEvent} from 'react';
import {useTask} from '../../../hooks/useTask.tsx';
import {useTodoContext} from '../../../hooks/useTodoContext.tsx';

export const InputForm = () => {
	const {input, setInput, task, setTask} = useTodoContext();
	const {addTask} = useTask(input, setInput, task, setTask);
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		setInput(event.target.value);
	};
	
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setTask(addTask);
	};
	
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				aria-label="Agregar tarea"
				onChange={handleChange}
				className={styles.input}
				type="text"
				placeholder="Agregar tarea"
				value={input}
				required
			/>
			<button className={styles.button}>Agregar Tarea</button>
		</form>
	);
};
