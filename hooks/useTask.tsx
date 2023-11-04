import {useEffect} from 'react';
import {Task} from '../interfaces/interfaces.ts';
import {useLocalStorage} from './useLocalStorage.ts';


export const useTask = (
	input: string,
	setInput: (value: string) => string,
	task: Task[],
	setTask: (tasks: Task[] | (() => void)) => Task[],
	todo?: Task,
	editedText?: string
) => {
	const inputData: Task = {
		id: new Date().getTime(),
		title: input,
	};
	
	const addTask = () => {
		if (input) {
			setTask([inputData, ...task]);
			setInput('');
		}
	};
	
	const removeTask = () => {
		return task.filter(({id}): boolean => id !== todo?.id);
	};
	
	
	const updateTask = () => {
		return (task.map((taskItem) => {
			if (taskItem.id === todo?.id) {
				return {...taskItem, title: editedText};
			}
			return taskItem;
		}));
	};
	
	const {setLocalStorageTodo} = useLocalStorage('task', task);
	useEffect(() => {
		setLocalStorageTodo();
	}, [setLocalStorageTodo]);
	
	return {addTask, removeTask, updateTask};
};