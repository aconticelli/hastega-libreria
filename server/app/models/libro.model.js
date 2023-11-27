module.exports = (sequelize, Sequelize) => {
  return sequelize.define("libro", {
    title: { type: Sequelize.STRING },
    author: { type: Sequelize.STRING },
    isbn: { type: Sequelize.STRING },
    addedAt: { type: Sequelize.STRING },
    deletedAt: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    completedReadings: { type: Sequelize.INTEGER },
  });
};