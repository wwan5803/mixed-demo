export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const addTodo = (content) => {
    return{
        type: "ADD_TODO",
        payload: content
    }
}

export const setStatus = filter => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    };
};
