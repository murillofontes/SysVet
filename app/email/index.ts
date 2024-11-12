
import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
//import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
//app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu_email@gmail.com',
    pass: 'sua_senha'
  }
});

interface EmailRequest {
  to: string;
  subject: string;
  text: string;
}

app.post('/send-email', (req: Request<{}, {}, EmailRequest>, res: Response) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'seu_email@gmail.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao enviar e-mail' });
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.status(200).send({ message: 'E-mail enviado com sucesso!' });
    }
  });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
