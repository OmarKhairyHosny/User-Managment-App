# ikigai Interview task for Angular developer 

You are given a fairly simple application to demonstrate your skills on it. The application is used to manage a users list.

### Running the application

Run the application as an Angular application
 
```
ng serve
```

The application is depending on backend **https://ikigai-interview-app.herokuapp.com/api/** and you can find a list of backend APIs on **https://ikigai-interview-app.herokuapp.com/api/swagger/**.

Keep in mind that this is a shared backend, data may be changed.

### Assignment

You are given the following three-parts assignment:

1. **Refactor/redesign this code and project structure so that**
    * The code is easier to read and understand.
    * The code is following best practices, conventions and unit tested.

2. **Fix the following issues**
    * Navigation to a specific page is not working (i.e: visiting http://localhost:8080/users). Any solution is accepted even if the url will be changed.
    * Delete user functionality is not working.
    * No indication about communicating with backend, a loading icon or similar indication should be there.

3. **Implement/add new features**
    * Updating specific user.
    * Replace bootstrap with flex layout (preferably https://github.com/angular/flex-layout).
    * Implement a login feature which allow only authenticated users to add, update and delete. An unauthenticated user can only view. login api already there and returning a dummy token.
	* Add proper validations for input parameters.
	* Enhance the ui design to follow designs located in **readme-images** folder.
	
### Score

Your solution will be judged on (in order of importance)

1. Code quality, readability, maintainability (if someone needed to refactor this later, how easy would it be to do so (e.g. modularity))
    * Quality includes: Testability (how well tested is the code and its edge cases (e.g. unit tests)).
    * This also includes quality/readability of the tests themselves (e.g. use AssertJ or similar framework).
2. Learning ability (how well you were able to learn a new technology and make full use of it correctly).
3. Creativity, problem solving, thinking outside the box.
4. Correctness (how bug-free the code is; how well you handled edge cases).
5. Documentation (clear, concise, and straight to the point; too much documentation is also not good).
    * This includes how often you commit, how modular your commits are, and how clear are your commit messages.
6. Speed / Time (how long did it take you to complete this. Though this is taken into account, the above values are more important).

For someone already familiar with the technologies used, this assignment can be easily completed in a working day (8 hours). It is assumed that some of these may be new to you though, so feel free to take longer if it means not compromising on the above values.
