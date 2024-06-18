/// <reference types="vite/client" />

interface IBoards {
  name: string;
  columns: {
    name: string;
    tasks: {
      title: string;
      description: string;
      status: string;
      subtasks: {
        title: string;
        isCompleted: boolean;
        id: string;
      }[];
    }[];
  }[];
}
[];

interface ITask {
  name: string;
  tasks: {
    title: string;
    description: string;
    status: string;
    subtasks: {
      title: string;
      isCompleted: boolean;
      id: string;
    }[];
  }[];
}

interface IContent {
  title: string;
  description: string;
  status: string;
  subtasks: {
    title: string;
    isCompleted: boolean;
    id: string;
  }[];
}

interface ISubstukc {
  id: string;
  title: string;
  isCompleted: boolean;
}
