import openai from '@/utils/openai';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const data = await request.json();
  const { messages } = data;

  const chatCompletion = await openai.chat.completions.create({
    messages,
    model: 'gpt-3.5-turbo',
  });

  return NextResponse.json(chatCompletion);
};
