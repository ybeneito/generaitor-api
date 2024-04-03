import OpenAI from 'openai';
import * as dotenv from 'dotenv';
dotenv.config();

export const openai = new OpenAI({
  apiKey: process.env.api_key,
  dangerouslyAllowBrowser: true,
});