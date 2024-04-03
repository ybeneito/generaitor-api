import { openai } from './ai.js';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors())
app.use(express.json())


app.post('/ai',async (req, res) => {
    const prompt = req.body.prompt    
    const response = await openai.chat.completions.create({
        messages: [
          { role: 'system', content:`Tu crées des sites avec Tailwind, ton but est de générer du code HTML utilisant Tailwind en fonction du prompt de l'utilisateur. 
          Tu renvoies uniquement du code HTML sans aucun texte avant ou après, celui ci doit être valide et dans les standards et tu n'y rajoutes jamais de syntaxe markdown
          Tu ne renvoies que l'intérieur de la partie <body></body>` },
          { role: 'user', content: prompt },
        ],
        model: 'gpt-3.5-turbo',
      })
     res.send(response.choices[0].message.content)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})