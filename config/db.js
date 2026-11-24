const db = require('../models');

async function connectToDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log(' Database Connection established successfully.');

        await db.sequelize.sync({ alter: true });
        console.log('Database synchronized');

