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
  const cwd = process.env.PWD;
  const { fullname } = req.body;
  const dirname = `${cwd}/externalFiles/${fullname}/`;
  const mdFilePath = `${dirname}/${fullname}.md`;
  const pdfFilePath = `${dirname}/${fullname}.pdf`;

  try {
    const content = [];
    //  parse the json entries into md
    const headerEntry = json2md({ h1: `Application for ${fullname}` });
    content.push(headerEntry);

    Object.keys(req.body).forEach((key) => {
      const entry = json2md([{ h2: _.startCase(key) }, { p: req.body[key] }]);
      content.push(`${entry}\n`);
    });

    // create the directory for the applicant's files and save md data
    fs.mkdirSync(dirname);
    fs.writeFileSync(mdFilePath, content.join('\n'), (err) => {
      if (err) {
        throw err;
      }
    });

    markdownpdf()
      .from(mdFilePath)
      .to(pdfFilePath, async () => {
        console.log(`Application PDF for ${fullname} created.`);
        // Upload the file
        const options = {
          use_filename: true,
          unique_filename: false,
          overwrite: true,
          folder: 'applications/mentorship-program/candidates',
          resource_type: 'auto',
        };
        await cloudinary.uploader.upload(pdfFilePath, options);
      });
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', error });
  }
});

export default handler;
