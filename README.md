## Project Introduction: 
* [The Muse]() is a professional, full-featured and
high performance e-commerce full-stack website!  You can install it in your
computer within 5 minutes and can adapt, extend, overwrite
and customize anything to your needs.


### Technologies Used:
1. React for Front End
2. Redux for state management
3. Firebase for the cloud firestore and realtime database

* What the application does?
    
    `Users can shop for different musical instruments and equipments on this website, users can add items using the shopping carts, and make payments using their credit card, users can also collaborate with other artists available, and, a community feature is provided for users to chat with each other in different channels to enhance user experience`
    
* Feature List:
    * Email/Password Registration and logout
    * Google SignIn Authentication
    * Shopping features allow users to shop by categories
    * Each category has a individual page and sorting feature to show users the corresponding items accordingly
    * Shopping page organizes items into categories to offer users a better view over all items
    * Clear frontend structure on the main page to make it easy for users to navigate through all categories
    * Multiple tabs on the top bar for users to switch to each features easily
    * Hover function over all items offers easy view for users to add items to the shopping cart
    * Shopping cart features shows the added items instantly when users add items, it also has an individual page which offers change amount feature to allow users to add and reduce the amount of each item or even delete items at ease
    * Shopping cart icon on the top right corner shows how many items are in the cart real time
    * Payment features made with Stripe allows users to make credit card payments
    * Community features allow customers to enhance interactions among customers and make the services more sticky and addictive
    * Direct messages in community feature makes it easy for customers to chat privately with other customers
    * Sending and receiving messages instantly with the real-time Firebase Database
    * Sending Direct Messages to other users in our chat
    * State management with Redux, with simple, straightforward patterns
    * Creating stunning user interfaces with Semantic UI React
    * Essential features of React Router 4 (Switch component, withRouter HOC, history object)
    * Tons of work with ES6 / 7
    * Helpful browser tools such as React / Redux Dev Tools
    * Securing our application with Firebase Rules
    * And more!
    
## Sample Demo Screenshots

![Home Page](client/src/assets/Homepage.PNG?raw=true "Title")

![SignUp and SignIn](client/src/assets/SignUpSignIn.PNG?raw=true "Title")

![Chat Bot](client/src/assets/ChatBot.PNG?raw=true "Title")

![Category Example](client/src/assets/CategoryExample.PNG?raw=true "Title")

![Shopping Page](client/src/assets/ShoppingPage.PNG?raw=true "Title")

![Shopping Cart Page](client/src/assets/ShoppingCartPage.PNG?raw=true "Title")

![Credit Card Payment](client/src/assets/CreditCardPayment.PNG?raw=true "Title")
    
    
## Pre-requisites Set Up

List of Resources to Configure in the Cloud Account:
* Firebase Configuration: 

    `
      const firebaseConfig = {
          apiKey: "",
          authDomain: "",
          databaseURL: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: "",
          measurementId: ""
    };
    `
    

    
List of Required Software To Download Locally:
* NPM
* React v16.12.0
* Visual Studio Code (Suggested)
    
Local Configuration:
* Simply update NPM and React to the newest version
* There is no need to make extra configuration on Firebase and AWS in our project as both are already set up and read to use
    
    
    
## How to set up and run project locally?
For Windows or Mac:
1. On command line, cd to the folder you wish to store the application, clone the project from this GitHub repository

    ```
    git clone https://github.com/AkankshaGehlot/TheMuse.git
    ```
    
2. Open the project in a code editor, such as Microsoft Visual Studio Code, then stay at the root folder of the project hierachy, run the server by using the following code:

    ```
    npm install
    ```
    
    then,
    
    ```
    npm start
    ```

    
    Now the backend server is ready
    
3. On the command line, go to client folder by typing

    ```
    cd client
    ```
    
    at client folder, run the front end by typing
    
    ```
    npm install
    ```
    
    then,
    
    ```
    npm start
    ```
    
    Now the front end React app is running.
    
4. Now the website should automatically pop up on the browser.
    
    

#### Technology List:
1. React
2. Google Firebase for Realtime Database and Cloud Firestore
    * Firebase Refresher
3. User Authentication via both Email and Google Account
    * Email/Password Registration
    * Google Signin Authentication
4. React Router and Routing
    * Routing for Each Page
    * Nested Routing in Shop Page
     * Collection Routing and Selector
    * Currying
5. User Information Storage
6. Redux 
    * Redux Actions and Reducers
    * Directory State Into Redux
    * Collection State Into Redux
    * Collection Overview Component
    * Asyncronous Redux
    * Observables
    * Promise Pattern
    * Redux Thunk
    * Redux Saga
    * Root Saga
7. User Redirect and User Action Type
8. Shopping Cart:
    * Card Dropdown Component
    * Card Item Reducer and Adder
    * Add Multiple Items To Cart 
    * Cart Item Memorization
    * Cart CSS Styles
    * Items Being Shown Real Time
9. Selectors in Redux
10. Reselect Library
11. Checkout Page
    * Checkout Items
    * Remove Items At Checkout
12. Local Storage and Session Storage
    * Website Cache
    * Redux Persist
13. State Normalization
14. Stripe Payment
15. WithSpinner HOC
16. Container Pattern
17. React Hooks
    * Hook Rules
    * Custom Hooks
18. Backend
    * Stripe
    * Build a Basic Server
    * Backend Payment Route
    * Connect Client To Server
19. Context API
    * Context Provider
    * Cart Context
20. Mobile Responsiveness
21. React Performance
    * Code Splitting
    * React Lazy
    * Suspense
    * Memo
    * Gzipping and Compression



