import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/tasks'; // Update this URL according to your backend server

const getAllTasks = () => {
  return axios.get(BASE_URL);
};

const addTask = (task) => {
  return axios.post(BASE_URL, task);
};

const deleteTask = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const TaskService = {
  getAllTasks,
  addTask,
  deleteTask
};

export default TaskService;
