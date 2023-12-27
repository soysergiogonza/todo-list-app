import {ContextValues} from '../interfaces/interfaces';
import {useContext} from 'react';
import {Context} from '../src/context/TodoContext';

export const useTodoContext = (): ContextValues => {
	const context = useContext(Context);
	
	if (!context) {
		throw new Error('Context must be used within a Provider');
	}
	
	return context;
};