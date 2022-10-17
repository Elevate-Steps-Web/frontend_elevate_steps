import _ from 'lodash';
import nextConnect from 'next-connect';
import middleware from '../../../../utils/middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  const { name, email, program } = req.body;

  console.log(`${name} ${email} ${_.kebabCase(program)}`);

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `bearer ${process.env.STRAPI_API_TOKEN}`);

  const raw = JSON.stringify({
    data: {
      name: name[0],
      email_address: email[0],
    },
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('http://localhost:1337/api/signups-elevate-talks', requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));

  res.status(200).json({ status: 'Alles Gucci' });
});

export default handler;
