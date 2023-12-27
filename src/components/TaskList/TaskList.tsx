import {Todo} from '../Todo/Todo.tsx';
import {Task} from '../../../interfaces/interfaces.ts';
import {useTodoContext} from '../../../hooks/useTodoContext.tsx';

export const TaskList = () => {
	
	const {task} = useTodoContext();
	
	return (
		<section>
			{task.map((todo: Task) => (
				<Todo key={todo.id} todo={todo}/>
			))}
		</section>
	);
};
