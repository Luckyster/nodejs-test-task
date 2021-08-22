import path from 'path';
import imageSize from 'image-size';
import fs from 'fs';
import sharp from 'sharp';

import { multerImage } from '../interfaces/image';

export async function resizeImage(file: multerImage | undefined) {
  if (!file) return '';

  const { path: pathToFile, destination, filename } = file;
  const fileDimentions = imageSize(pathToFile);
  const left = Math.round(((fileDimentions.width || 200) - 200) / 2);
  const top = Math.round(((fileDimentions.height || 200) - 200) / 2);
  await sharp(pathToFile)
    .toFormat('png')
    .extract({ left: left, top: top, width: 200, height: 200 })
    .png({ quality: 90 })
    .toFile(path.resolve(destination, `resized-${filename}`));

  fs.unlinkSync(pathToFile);
}
