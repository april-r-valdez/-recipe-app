# Database Research

## Reasons for creating database

- We want our user's data entries and generated recipes to be stored in a secure system that provides both scalability and accessibility

## Learning opportunities

- How to effectively store and retrieve data from database
- Understand CRUD (Create, Read, Update, Delete) operations in MySQL
- Understand the type of database we want to manage (relational vs non-relational)

## Expectations

- We expect to implement mySQL into our project's backend code

## Some potential databases to use

- [MySQL] MySQL is a relational database that organizes and stores data in well-defined tables with rows and columns
- [CloudFireStore] Cloud Firestore is a non relational, flexible, scalable database from Firebase and Google Cloud

## Associated Jira tasks related to database

- As a user, I want to save my recipes so I can look at them later

## Options for Database to by used
- [MongoDB] MongoDB can be integrated with a React application by creating a backend server (typically using Node.js) to handle database operations and then connecting your React frontend to this server
    - Pros:
        - MongoDB is a NoSQL database that allows for a flexible schema, making it easier to work with evolving data structures.
        - MongoDB is an open-source database, which means you have more control over your data and are not locked into a specific vendor
        - MongoDB can scale horizontally and vertically, giving you more control over the scalability of your application.

    - Cons:
        -  MongoDB can have a steeper learning curve, especially if you're new to NoSQL databases and need to design your data models.
        - Unlike Firebase, MongoDB doesn't provide hosting or serverless functions out of the box, so you'll need to set up these components separately.
        
- [Firebase] Firebase can be used in a React application to provide a wide range of services such as authentication, real-time database, cloud functions, hosting, and more
    - Pros
        - Firebase's Realtime Database offers real-time synchronization, which means any changes to the data are immediately reflected in the application without the need for manual updates or polling.
        - Firebase provides built-in authentication solutions, making it easy to set up user registration and login functionality.
        - Hosting and Functions: Firebase offers hosting for your web application and serverless functions, allowing you to deploy your React app and server-side logic in one place

    - Cons:
        - Firebase's query capabilities are less powerful than traditional databases like MongoDB, which may limit your ability to perform complex queries.
        - Firebase's Realtime Database uses a JSON-like structure, which may not be ideal for all types of data.
