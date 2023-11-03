import {useEffect} from 'react';
import {Task} from '../interfaces/interfaces.ts';
import {useLocalStorage} from './useLocalStorage.ts';


export const useTask = (
	input: string,
	setInput: (value: string) => string,
	task: Task[],
	setTask: (tasks: Task[]) => Task[]
) => {
	const inputData: Task = {
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
	
	const {setLocalStorageTodo} = useLocalStorage('task', task);
	useEffect(() => {
		setLocalStorageTodo();
	}, [setLocalStorageTodo]);
	
	return {addTask};
};