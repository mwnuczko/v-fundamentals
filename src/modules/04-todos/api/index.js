import localforage from 'localforage';

const localStore = localforage.createInstance({ name: 'todosApp' });

const initialData = [
  { id: 100, title: 'Buy milk', description: '2 cartons' },
  { id: 101, title: 'Walk the dog' },
  { id: 102, title: 'Do Homework', description: 'Math, physics' },
];

const KEY = 'todos';

const initStoreIfEmpty = (reset) => {
  localStore.getItem(KEY).then((items) => {
    if (reset || !items || items.length === 0) {
      return localStore.setItem(KEY, initialData);
    }
  }).catch((err) => {
    console.log(err);
  });
};

initStoreIfEmpty();

let nextId = 200;

const api = {
  getAll() {
    return localStore.getItem(KEY);
  },

  getById(id) {
    return localStore.getItem(KEY).then((todos) => {
      for (let i = 0; i < todos.length; i += 1) {
        const todo = todos[i];
        if (todo.id === id) {
          return todo;
        }
      }
    });
  },

  create({ title, description }) {
    return this.getAll().then((todos) => {
      nextId += 1;
      const createdTodo = { id: nextId, title, description };
      return localStore.setItem(KEY, [...todos, createdTodo]).then(() => {
        return createdTodo;
      });
    });
  },

  delete(id) {
    return this.getAll().then((todos) => {
      const modified = [];
      for (let i = 0; i < todos.length; i += 1) {
        const todo = todos[i];
        if (todo.id !== id) {
          modified.push(todo);
        }
      }
      return localStore.setItem(KEY, modified).then(() => {
        return modified;
      });
    });
  },

  resetDb() {
    return localStore.getItem(KEY).then(() => {
      return localStore.setItem(KEY, initialData);
    }).then(() => {
      return this.getAll();
    });
  },

};

export default api;
