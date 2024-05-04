const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('phongtro', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('kết nối database thành công');
    } catch (error) {
        console.error('kết nối database thất bại:', error);
    }
}

export default connectDatabase