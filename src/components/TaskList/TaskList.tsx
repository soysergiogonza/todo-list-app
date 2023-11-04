import {Todo} from '../Todo/Todo.tsx';
import {ComponentProps, Task} from '../../../interfaces/interfaces.ts';

export const TaskList = ({task, setTask, input, setInput}: ComponentProps) => {
	return (
		<section>
			{
				task.map((todo: Task) => {
					return (
						<Todo key={todo.id} todo={todo} setTask={setTask} input={input} setInput={setInput} task={task}/>);
				})
			}
		</section>
	);
};
