const { sequelize } = require('./models')

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결')
  })
  .catch((err) => {
    console.log(err)
  })