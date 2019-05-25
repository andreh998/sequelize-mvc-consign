const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('teste', 'root', 'andre@123', {
  host: '192.168.5.120',
  dialect: 'mysql'
});

const loadModels = (sequelize) => {
    const dir = path.join(__dirname, '../app/models');
    //console.log(dir);
    let models = [];
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file),
        model = sequelize.import(modelDir);
        models[model.name] = model;
    });
    //console.log(models);
    return models;
};

database = {sequelize, Sequelize, models: loadModels(sequelize)};

Object.keys(database.models).forEach(key => {
    database.models[key].associate(database.models);
});

module.exports = database;