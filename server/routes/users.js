import express from 'express';
const router = express.Router();
import { registerUser, loginUser, getMe, deleteUser, changePassword } from '../controllers/users.js';
import { protect } from '../middleware/authMiddleware.js';


router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.delete('/:id', protect, deleteUser)
router.put('/changepassword', protect, changePassword)

export default router;




































/*
router.route('/').get((req, res) => {
    UsersModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new UsersModel({ username });
    const newEmail = new UsersModel({ email });
    const newPassword = new UsersModel({ password });

    newEmail.save()
    newPassword.save()
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


const user = await UsersModel.findOne({ email: req.body.email });
if (user) {
    return res.status(400).send('That user already exists!')
} else {
    user = new User ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    await user.save()
    res.send(user);
}

export default router;
*/