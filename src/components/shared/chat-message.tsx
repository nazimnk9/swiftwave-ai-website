// "use client"

// import type React from "react"

// interface ChatMessageProps {
//   message: {
//     role: "user" | "assistant"
//     content: string
//   }
// }

// const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
//   const isUser = message.role === "user"

//   return (
//     <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
//       <div
//         className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-sm ${
//           isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
//         }`}
//       >
//         <p className="whitespace-pre-wrap break-words">{message.content}</p>
//       </div>
//     </div>
//   )
// }

// export default ChatMessage


"use client"

import type React from "react"

interface ChatMessageProps {
  message: {
    role: "user" | "assistant"
    content: string
  }
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-sm ${
          isUser ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground" // AI Assistant messages now use accent color (focus color)
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
      </div>
    </div>
  )
}

export default ChatMessage

