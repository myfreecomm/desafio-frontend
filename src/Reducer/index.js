export const reduce = (state, action) => {
  switch (action.type) {
    case "allUsers":
      return { ...state, users: action.payload, filter: action.payload };
    case "search":
      const newUsers = state.users.filter((user) =>
        user.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, filter: newUsers };
    default:
      return state;
  }
};

export const initialState = {
  users: [],
  filter: [],
};
