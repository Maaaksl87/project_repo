module.exports = {
  port: 3000,
  routes: [
    {
      method: 'GET',
      path: '/api/posts',
      response: [{ id: 1, title: 'Post One' }]
    },
    {
      method: 'POST',
      path: '/api/posts',
      response: { id: 2, title: 'New Post' }
    }
  ]
};
