import {Task} from '../Task/Task.tsx';

export const TaskList = ({task, setTask}) => {
	
	
	return (
		<section>
			{
				task.map((todo) => {
					return (<Task key={todo.id} todo={todo} setTask={setTask} allTasks={task}/>);
				})
			}
		</section>
	);
};
