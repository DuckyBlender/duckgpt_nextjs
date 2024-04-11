import Navbar from "./components/common/Navbar"
import StartChatButton from "./components/root/StartChatButton"

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow text-center p-4">
        <h1 className="text-3xl mb-4">Welcome to DuckGPT: DuckyBlender's custom models.</h1>
        <p className="mb-4">Warning: There are models which can be extremely offensive. They are labeled as NSFW</p>
        <StartChatButton />
      </main>

      <footer className="p-4 text-center text-gray-500">
        Made by DuckyBlender
      </footer>
    </div>
  )
}