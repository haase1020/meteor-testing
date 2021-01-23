import React from 'react';

const tasks = [
  {_id: 1, text: 'Dare greatly'},
  {_id: 2, text: 'Love passionately'},
  {_id: 3, text: 'Rejoice in the Lord!!'},
];

export const Task = ({ task })=> {
    return <li>{task.text}</li>
}