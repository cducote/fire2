const functions = require('firebase-functions');
const cors = require('cors')
const app = require('express')();
const auth = require('./util/auth');

app.use(cors({ origin: true }));

const {
    getAllTodos,
    getOneTodo,
    postOneTodo,
    deleteTodo,
    editTodo,
} = require('./APIs/todos')

const {
    loginUser,
    signUpUser,
    getUserDetail,
    updateUserDetails,
    uploadProfilePhoto,
} = require('./APIs/users')

// Todos
app.get('/todos',auth, getAllTodos);
app.get('/todo/:todoId', auth, getOneTodo);
app.post('/todo', auth, postOneTodo)
app.delete('/todo/:todoId', auth, deleteTodo)
app.put('/todo/:todoId', auth, editTodo)


// Users
app.get('/user', auth, getUserDetail);
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user', auth, updateUserDetails);
app.post('/user/image', auth, uploadProfilePhoto);

exports.api = functions.https.onRequest(app)