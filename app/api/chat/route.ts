// import { MessageInterface } from "../../components/Message"
import { ModelFusionTextStream, asChatMessages } from "@modelfusion/vercel-ai";
import { Message, StreamingTextResponse } from "ai";
import { ChatMessage, Schema, ollama, streamText } from "modelfusion";

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(request: Request) {
  // useChat will send a JSON with a messages property:
  const { messages }: { messages: Message[] } = await request.json();

  const model = ollama
    .ChatTextGenerator({ model: "tinyllama" })
    .withSettings({ temperature: 0.2, maxGenerationTokens: 512, })
    .withChatPrompt();

  const prompt = {
    system: "You are an AI chatbot. Follow the user's instructions carefully.",

    // map Vercel AI SDK Message to ModelFusion ChatMessage:
    messages: asChatMessages(messages),
  };

  const textStream = await streamText({ model, prompt });


  // Return the result using the Vercel AI SDK:
  return new StreamingTextResponse(
    ModelFusionTextStream(
      textStream,
      // optional callbacks:
      {
        onStart() {
          console.log("onStart");
        },
        onToken(token) {
          console.log("onToken", token);
        },
        onCompletion: () => {
          console.log("onCompletion");
        },
        onFinal(completion) {
          console.log("onFinal", completion);
        },
      }
    )
  );
}