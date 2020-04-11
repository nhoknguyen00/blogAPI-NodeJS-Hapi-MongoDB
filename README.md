# blogAPI-NodeJS-Hapi-MongoDB
**Design the blog database:**
- Create the collection users (_id, firstName, lastName, age, occupation)

- Create the collection articles (_id, title, text ). The relationship is 1 article is only created by 1 user and 1 user can create multiple articles

- Create the collection comments (content)
1 article can have more than 1 comment. 

- Each comment is created by specific user (user_id)
1 comment can be voted by more than 1 user

- Write API to return all comments, and number of votes per comment

- Get all comments by specific user across all articles

- Update the article's content which created by specific user_id

- Delete all comments voted by specific user_id

**Other requirements:**
- Create Index for each collections if needed

- Validation

- Repository pattern

- Mongo migration to create users collection  data
