1. Blog website - Helds Dashboard, Home , Create and Edit page
2. Home - Approved blogs - Listed blogs which has been approved from Dashboard
3. Dashboard - Created blogs will be listed out in the table with ststus and actions - Axios - Get method used
5. Create - Blogs can be created here - Axios - post method used
6. Edit - Blogs can be edited - Axios - put method used
7. Delete - Axios - delete method used
8. All hooks has been used here except useLocation
9. Dependencies need to be install - Axios , Toastify , react-bootstrap, react-router-dom
10. Routes are used in the form of array with createBrowserRoutes


-> Redux tool used here
-> Implementing React Redux

1. npm install @reduxjs/toolkit react-redux
2. Creating the Store
3. Provide the Redux Store to React in main.jsx
4. Create a Redux State Slice 
    a. Set Name, Initial state
    b. Define all your reducers 
    c. Export the Actions and Reducer of the State Slice
5. Import reducer and add it in the store
6. Install Redux dev tools in chrome as extentions
7. Use the reducers wherever required in component
8. Use useSelector to get your state
9. Use useDispatch to call your actions