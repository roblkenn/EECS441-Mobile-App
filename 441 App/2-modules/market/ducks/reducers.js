const initialState = {
  products: [
    {
      username: 'bearb',
      title: 'Sunsets',
      description: 'Really good preset for sunsets',
    },
    {
      username: 'susy123',
      title: 'Portraits',
      description: 'Really good preset for portraits',
    },
    {
      username: 'jamal412',
      title: 'Flowers',
      description: 'Really good preset for flowers',
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
