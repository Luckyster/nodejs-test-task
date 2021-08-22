import { Router } from 'express';
import { create } from '../user/user.service';
import { uploadSingle } from '../../multer';

import { userSignupInput } from '../../interfaces/user';
import { generateLink } from '../../utils/generateLinkToFile';

import { userSignupInputValidator } from '../../validator/user.validator';
import Validator from '../../utils/validateObj';
import { resizeImage } from '../../image/resize';
const router = Router();

router.post('/signup', uploadSingle('photo'), async (req, res) => {
  try {
    const data = req.body;
    const file = req.file;

    await resizeImage(file);
    console.log(file, ' file');

    const linkToPhoto = generateLink(file?.filename);
    const fullData = { ...data, photo: linkToPhoto };

    await Validator<userSignupInput, typeof userSignupInputValidator>(
      fullData,
      userSignupInputValidator
    );

    const userId = await create(fullData);

    res.status(200).json({ id: userId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
