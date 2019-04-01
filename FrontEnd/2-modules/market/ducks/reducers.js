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
    {
      username: 'jamal412',
      title: 'Flowers',
      description: 'Really good preset for flowers',
    },
    {
      username: 'arbor',
      title: 'forests',
      description: 'Really good preset for flowers',
    },
    {
      username: 'jamal412',
      title: 'Orange',
      description: 'Really good preset for flowers',
    },
    {
      username: 'jamal412',
      title: 'asd',
      description: 'Really good preset for flowers',
    },
    {
      username: 'jamal412',
      title: 'fafa',
      description: 'Really good preset for flowers',
    },
    {
      username: 'jamal412',
      title: 'asdf',
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
