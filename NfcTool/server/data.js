const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

const feedback1Id = mongoose.Types.ObjectId();
const feedback2Id = mongoose.Types.ObjectId();
const feedback3Id = mongoose.Types.ObjectId();
const feedback4Id = mongoose.Types.ObjectId();

const category1Id = mongoose.Types.ObjectId();
const category2Id = mongoose.Types.ObjectId();
const category3Id = mongoose.Types.ObjectId();
const category4Id = mongoose.Types.ObjectId();
const category5Id = mongoose.Types.ObjectId();

module.exports = {
  "feedbacks": [
    {
      "_id": feedback1Id,
      "title": "Food Logo design",
      "image": "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/04/FOOD_LOGOS_jpg_Mli5RiFN.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces",
      "description": "Some description of this feedback demand. I dont know what to choose",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "timeDeadline": moment().add(2, 'days').toISOString(),
      "calendlyLink": "https://google.com",
      "helperPeopleCount": 1,
      "status": "active",
      "category": category4Id,
      "helperPeople": [user2Id],
      "feedbackCreator": user1Id
    },
    {
      "_id": feedback2Id,
      "title": "Travel app design",
      "image": "https://i.pinimg.com/originals/86/71/48/867148a5a56884c83876c213a4115214.jpg",
      "description": "Some description of this feedback demand. I dont know what to choose",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "timeDeadline": moment().add(7, 'days').toISOString(),
      "calendlyLink": "https://google.com",
      "helperPeopleCount": 2,
      "status": "active",
      "category": category1Id,
      "helperPeople": [user1Id, user3Id],
      "feedbackCreator": user2Id
    },
    {
      "_id": feedback3Id,
      "title": "Cooper Car design",
      "image": "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/04/FOOD_LOGOS_jpg_Mli5RiFN.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces",
      "description": "Some description of this feedback demand. I dont know what to choose",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "timeDeadline": moment().add(2, 'days').toISOString(),
      "calendlyLink": "https://google.com",
      "helperPeopleCount": 2,
      "status": "active",
      "category": category2Id,
      "helperPeople": [user1Id, user3Id],
      "feedbackCreator": user2Id
    },
  ],
  "users": [
    {
      "_id": user1Id,
      "email": "theo@gmail.com",
      "firstname": "Theo",
      "surname": "Geiller",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "password": "testtest",
    },
    {
      "_id": user2Id,
      "email": "peter@gmail.com",
      "firstname": "Peter",
      "surname": "Green",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "password": "testtest1",
    },
    {
      "_id": user3Id,
      "email": "kevin@gmail.com",
      "firstname": "Kevin",
      "surname": "Rock",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "password": "testtest2",
    }
  ],
  "categories": [
    {
      "_id": category1Id,
      "name": "Product Design",
      "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      "_id": category2Id,
      "name": "Industrial Design",
      "image": "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
    },
    {
      "_id": category3Id,
      "name": "Motion Design",
      "image": "https://images.unsplash.com/photo-1527786560821-46037fab26b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      "_id": category4Id,
      "name": "Visual Design",
      "image": "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80"
    },
    {
      "_id": category5Id,
      "name": "Interior Design",
      "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2689&q=80"
    }
  ]
};
