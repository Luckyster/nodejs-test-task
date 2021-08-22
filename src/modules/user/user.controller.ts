import { Router } from 'express';
import { userProfile } from '../../interfaces/user';
import { findById } from './user.service';

const router = Router();

router.get('/profile/:uid', async (req, res) => {
  const { uid } = req.params;
  const user: userProfile = await findById(uid);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  }
  const { id, firstName, lastName, photo } = user;
  res.status(200).json({ id, firstName, lastName, photo });
});

export default router;
