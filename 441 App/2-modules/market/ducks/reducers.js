const initialState = {};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    default:
      return state;
  }
}
