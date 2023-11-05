# Firebase Security Rules Research

## What is Firebase Security Rule?
- A set of declarative rules that define how the database can be accessed and manipulated by users and client applications.
- We can write security rules to specify who can read from and write to our Recipe database
- These rules can be accessed and set up in our Firebase console
- [Firebase Security Rules documentation](https://firebase.google.com/docs/rules)

## Some security rule patterns to be considered
1. Allows anyone to read and write to the database (should only be used in development)
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
``` 
2. Allows all authenticated users to read and write to the database (should only be used in development)
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
3. Allows only the owner of the recipes to read and write to the recipes (more restricted)
```
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow only authenticated content owners access
    match /some_collection/{userId}/{documents=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId
    }
  }
}
```
4. allows anyone to read, but restricts the ability to create or modify data to the authenticated owner only (suitable for our apps)
```
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access, but only content owners can write
    match /some_collection/{document} {
      allow read: if true
      allow create: if request.auth.uid == request.resource.data.author_uid;
      allow update, delete: if request.auth.uid == resource.data.author_uid;
    }
  }
}
```

## Conclusion
For development, we could consider pattern 1, which allows anyone to read and write to the database, since we might want relatively open access to our data. However, once our application is ready for production, we will switch to pattern 4, which allows anyone to read the data, but only allows authenticated owners to modify the data.


## Firebase Security Rules for Sprint 2
Since our application is still in the development stage, and to make it easy for testing purposes, the security rules have been set such that anyone could read from and write to our Firestore database and Firebase Storage:
```
allow read, write: if true;
```
The rules will be changed in the next sprint (after we enable authentication for users) in that anyone could read data from our database, but only authenticated users can create or modify the data in it.