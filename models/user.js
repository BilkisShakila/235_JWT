module.export = (sequelize, DataTypes) => {
    const user = sequelize.define("User",{
        id: {
            type: DataTypes.INTEGER,
            PrimaryKey: true,
            autoIncrement: true
        },


