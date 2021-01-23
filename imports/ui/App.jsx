import React from 'react';
import { Task } from './Task';

const tasks = [
  {_id: 1, text: 'Dare greatly'},
  {_id: 2, text: 'Love passionately'},
  {_id: 3, text: 'Rejoice in the Lord!!'},
];

export const App = () => (
  <div>
    <h1>Have a blessed day!</h1>
    <ul>
      { tasks.map(task => <Task key={ task._id} task={ task} />)}
    </ul>
  </div>
);
