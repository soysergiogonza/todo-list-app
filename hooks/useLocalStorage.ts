import {Task} from '../interfaces/interfaces';

export const useLocalStorage = (key: string, task?: Task[] | undefined) => {
	const getLocalStorageTodo = (): string | Task[] => {
		const list = localStorage.getItem(key);
		
		if (!list) {
			localStorage.setItem(key, JSON.stringify([]));
			return [];
		}
		if (list) {
			return JSON.parse(list);
		}
		return list;
	};
	
	const setLocalStorageTodo = () => {
		localStorage.setItem(key, JSON.stringify(task));
	};
	
	return {getLocalStorageTodo, setLocalStorageTodo};
};
