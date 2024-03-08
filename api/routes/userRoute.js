import express from 'express';
import { deleteUser, getUser, getUsers, test, updateUser } from '../controllers/userController.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.get('/',test)
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);

export default router;