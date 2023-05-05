import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { Task } from '../types/task';
import { GET_TASKS } from '../queries/taskQueries';

const TodoList: FC = () => {
  const { data, loading } = useQuery<{ getTasks: Task[] }>(GET_TASKS, {
    variables: { id: 1 },
  });

  return loading ? (
    <p>loading...</p>
  ) : (
    <ul>
      {data?.getTasks.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
