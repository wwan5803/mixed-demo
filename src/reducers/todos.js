// const mockData = [
//   { id: 1, completed: !!0, content: "a" },
//   { id: 2, completed: !!0, content: "b" },
//   { id: 3, completed: !!1, content: "c" }
// ];

const todos = (state = [], action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "ADD_TODO":
      return [
        ...state,
        { id: state.length, completed: !!0, content: action.payload }
      ];
    default:
      return state;
  }
};

export default todos;
