const initialState = {
  products: [
    {
      username: 'bearb',
      title: 'Sunsets',
      description: 'Really good preset for sunsets',
    },
    {
      username: 'crolfes',
      title: 'Portraits',
      description: 'Really good preset for portraits',
    },
  ],
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    default:
      return state;
  }
}