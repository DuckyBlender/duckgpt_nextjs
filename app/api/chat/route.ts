// import { MessageInterface } from "../../components/Message"
import { ModelFusionTextStream, asChatMessages } from "@modelfusion/vercel-ai";
import { Message, StreamingTextResponse } from "ai";
import { ollama, streamText } from "modelfusion";

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(request: Request) {
  // useChat will send a JSON with a messages property:
  const { messages }: { messages: Message[] } = await request.json();


  const model = ollama
    .ChatTextGenerator({ model: "tinyllama:1.1b-chat-v0.6-q8_0" })
    .withSettings({ temperature: 0.2 })
    .withChatPrompt();

  const prompt = {
    system: "You are an AI chatbot. Follow the user's instructions carefully.",

    // map Vercel AI SDK Message to ModelFusion ChatMessage:
    messages: asChatMessages(messages),
  };

  const textStream = await streamText({ model, prompt });


  // Return the result using the Vercel AI SDK:
  return new StreamingTextResponse(ModelFusionTextStream(textStream));
}