import _ from 'lodash';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import json2md from 'json2md';
import markdownpdf from 'markdown-pdf';
import nextConnect from 'next-connect';
import middleware from '../../../../../utils/middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  secure: true,
});

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  const writeStream = fs.createWriteStream('./tmp/temp.md', { flags: 'a' });
  const { fullname } = req.body;

  //  parse the json entries into md
  let entry = json2md({ h2: `Application for ${fullname}` });
  writeStream.write(`${entry}\n`);
  Object.keys(req.body).forEach((key) => {
    entry = json2md([{ h2: _.startCase(key) }, { p: req.body[key] }]);
    writeStream.write(`${entry}\n`);
  });
  writeStream.end();
  const filePath = `./tmp/${fullname}.pdf`;
  const tmpFilePath = './tmp/temp.md';

  markdownpdf()
    .from(tmpFilePath)
    .to(filePath, async () => {
      console.log(`Application PDF for ${fullname} created.`);
      try {
        // Upload the file
        const options = {
          use_filename: true,
          unique_filename: false,
          overwrite: true,
          folder: 'applications/mentorship-program/candidates',
          resource_type: 'auto',
        };
        await cloudinary.uploader.upload(filePath, options).then(() => {
          // console.log(result);
          // delete both files on the server
          [tmpFilePath, filePath].forEach((file) => {
            fs.unlink(file, (err) => {
              if (err) throw err;
              console.log(`${file} deleted`);
            });
          });
        });
      } catch (error) {
        console.error(error);
      }
    });
  res.status(200).json({ status: 'Alles Gucci' });
});

export default handler;
