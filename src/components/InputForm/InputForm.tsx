import styles from './InputForm.module.css';
import {ChangeEvent, FormEvent, useEffect} from 'react';
import {Task} from '../../../interfaces/interfaces.ts';

interface Props {
	input: string;
	setInput: (value: string) => string;
	task: Task[];
	setTask: (taskList: (string | Task)[]) => void;
}


export const InputForm = ({input, setInput, task, setTask}: Props) => {
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		setInput(event.target.value);
	};
	
	const inputData = {
		id: new Date().getTime(),
		title: input,
		completed: false,
	};
	
	const addTask = () => {
		if (input) {
			setTask([inputData, ...task]);
			setInput('');
		}
	};
	
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setTask(addTask);
	};
	
	useEffect(() => {
		localStorage.setItem('task', JSON.stringify(task));
	}, [task]);
	
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
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
