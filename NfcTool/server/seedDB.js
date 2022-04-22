const mongoose = require('mongoose');
const User = require('./models/users');
const Category = require('./models/categories');
const Feedback = require('./models/feedbacks');

const data = require('./data.js');
const config = require('./config/dev');

class DB {
  constructor() {
    this.feedbacks = data.feedbacks;
    this.users = data.users;
    this.categories = data.categories;
    this.models = [Feedback, User, Category];
  }

  async cleanDb() {
        for ( let model of this.models ) {
            await model.deleteMany({}, () => {})
            console.log(`Data for model ${model.collection.collectionName} Deleted!`)
        }
    }

  async pushDataToDb() {

    await this.categories.forEach(async (category) => {
        const newCategory = new Category(category);
        await newCategory.save(() => {});
    })

    await this.users.forEach(async user => {
      await (new User(user)).save(() => {})
    })

    await this.feedbacks.forEach(async feedback => {
      await (new Feedback(feedback)).save(() => {})
    })


    console.log('Database Populated!');
  }

  async seedDb() {
    await this.cleanDb();
    await this.pushDataToDb();
  }
}

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(async () => {
    const db = new DB();
    await db.seedDb();
    console.log('You can close connection now!')
  })
  .catch(err => console.log(err));
