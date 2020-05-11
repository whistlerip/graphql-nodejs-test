const users = [
    { id: 1, name: 'Joao', email: 'teste@gmail.com' },
    { id: 2, name: 'Eliandro', email: 'teste2@gmail.com' }
];

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    }
};