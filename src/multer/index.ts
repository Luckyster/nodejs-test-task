import multer from 'multer';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const fileExtension = file.mimetype.split('/')[1];
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

    cb(null, `${file.fieldname}-${uniqueSuffix}.${fileExtension}`);
  },
});
const upload = multer({ storage });

export function uploadSingle(name: string) {
  return upload.single(name);
}
