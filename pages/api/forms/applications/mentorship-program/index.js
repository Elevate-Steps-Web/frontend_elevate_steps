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
  const { fullname } = req.body;
  const tmpFilePath = `./.externalFiles/${fullname}/${fullname}.md`;

  const writeStream = fs.createWriteStream(
    `./.externalFiles/${fullname}/${fullname}.md`,
    { flags: 'a' },
  );

  //  parse the json entries into md
  let entry = json2md({ h1: `Application for ${fullname}` });
  writeStream.write(`${entry}\n`);
  Object.keys(req.body).forEach((key) => {
    entry = json2md([{ h2: _.startCase(key) }, { p: req.body[key] }]);
    writeStream.write(`${entry}\n`);
  });
  writeStream.end();
  const filePath = `./.externalFiles/${fullname}/${fullname}.pdf`;

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
        await cloudinary.uploader.upload(filePath, options);
      } catch (error) {
        console.error(error);
      }
    });
  res.status(200).json({ status: 'Alles Gucci' });
});

export default handler;
