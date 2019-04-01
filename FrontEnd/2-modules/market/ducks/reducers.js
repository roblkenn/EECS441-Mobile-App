const initialState = {
  products: [
    {
      username: 'bearb',
      title: 'Sunsets',
      description: 'Really good preset for sunsets',
      price: '$15.00'
    },
    {
      username: 'crolfes',
      title: 'Portraits',
      description: 'Really good preset for portraits',
      price: '$1.00'
    },
    {
      username: 'jamal412',
      title: 'Flowers',
      description: 'Really good preset for flowers',
      price: '$115.00'
    },
    {
      username: 'arbor',
      title: 'forests',
      description: 'Really good preset for flowers',
      price: '$1335.00'
    },
    {
      username: 'jamal412',
      title: 'Orange',
      description: 'Really good preset for flowers',
      price: '$154.00'
    },
    {
      username: 'jamal412',
      title: 'asd',
      description: 'Really good preset for flowers',
      price: '$15.00'
    },
    {
      username: 'jamal412',
      title: 'fafa',
      description: 'Really good preset for flowers',
      price: '$15.00'
    },
    {
      username: 'jamal412',
      title: 'asdf',
      description: 'Really good preset for flowers',
      price: '$15.00'
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
