import Knex from 'knex';
import path from 'path';

const db = Knex({
    client: 'aqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;