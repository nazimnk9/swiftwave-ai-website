// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import ChatMessage from "./chat-message"
// import { useSessionStorage } from "@/hooks/use-session-storage"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// interface Message {
//   role: "user" | "assistant"
//   content: string
// }

// interface ChatbotDialogProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useSessionStorage<Message[]>("ai-steve-messages", [])
//   const [inputValue, setInputValue] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!inputValue.trim()) return

//     // Add user message
//     const userMessage: Message = { role: "user", content: inputValue }
//     const updatedMessages = [...messages, userMessage]
//     setMessages(updatedMessages)
//     setInputValue("")
//     setIsLoading(true)
//     setError(null)

//     try {
//       const response = await fetch("https://api.swiftwave.ai/api/v1/public/ask-steve/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           messages: updatedMessages,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to get response from AI")
//       }

//       const data = await response.json()

//       // Add assistant message
//       const assistantMessage: Message = {
//         role: "assistant",
//         content: data.reply,
//       }

//       const finalMessages = [...updatedMessages, assistantMessage]
//       setMessages(finalMessages)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred")
//       // Remove the user message if API call failed
//       setMessages(messages)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

//       {/* Dialog */}
//       <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl flex flex-col w-full max-w-md h-96 sm:h-[500px]">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-border p-4">
//           <h2 className="text-lg font-semibold">Ask AI Steve</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             aria-label="Close chat"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Messages Container */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {messages.length === 0 ? (
//             <div className="text-center text-muted-foreground py-8">
//               <p>Start a conversation with AI Steve!</p>
//             </div>
//           ) : (
//             <>
//               {messages.map((message, index) => (
//                 <ChatMessage key={index} message={message} />
//               ))}
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 text-sm">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
//                       <div
//                         className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                         style={{ animationDelay: "0.1s" }}
//                       />
//                       <div
//                         className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                         style={{ animationDelay: "0.2s" }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </>
//           )}
//         </div>

//         {/* Error Message */}
//         {error && <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm rounded">{error}</div>}

//         {/* Input */}
//         <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
//           <Input
//             type="text"
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isLoading}
//             className="flex-1"
//           />
//           <Button type="submit" disabled={isLoading || !inputValue.trim()} className="px-4">
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ChatbotDialog


// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import ChatMessage from "./chat-message"
// import { useSessionStorage } from "@/hooks/use-session-storage"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// interface Message {
//   role: "user" | "assistant"
//   content: string
// }

// interface ChatbotDialogProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useSessionStorage<Message[]>("ai-steve-messages", [])
//   const [inputValue, setInputValue] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!inputValue.trim()) return

//     // Add user message
//     const userMessage: Message = { role: "user", content: inputValue }
//     const updatedMessages = [...messages, userMessage]
//     setMessages(updatedMessages)
//     setInputValue("")
//     setIsLoading(true)
//     setError(null)

//     try {
//       const response = await fetch("https://api.swiftwave.ai/api/v1/public/ask-steve/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           messages: updatedMessages,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to get response from AI")
//       }

//       const data = await response.json()

//       // Add assistant message
//       const assistantMessage: Message = {
//         role: "assistant",
//         content: data.reply,
//       }

//       const finalMessages = [...updatedMessages, assistantMessage]
//       setMessages(finalMessages)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred")
//       // Remove the user message if API call failed
//       setMessages(messages)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

//       {/* Dialog */}
//       <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl flex flex-col w-full max-w-md h-96 sm:h-[500px]">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-border p-4">
//           <h2 className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">Ask AI Steve</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             aria-label="Close chat"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Messages Container */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {messages.length === 0 ? (
//             <div className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%] py-8">
//               <p>Welcome! I&apos;m AI Steve. How can I help you today?</p>
//             </div>
//           ) : (
//             <>
//               {messages.map((message, index) => (
//                 <ChatMessage key={index} message={message} />
//               ))}
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.1s" }}
//                       />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.2s" }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </>
//           )}
//         </div>

//         {/* Error Message */}
//         {error && <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm rounded">{error}</div>}

//         {/* Input */}
//         <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
//           <Input
//             type="text"
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isLoading}
//             className="flex-1"
//           />
//           <Button type="submit" disabled={isLoading || !inputValue.trim()} className="px-4">
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ChatbotDialog

// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import ChatMessage from "./chat-message"
// import { useSessionStorage } from "@/hooks/use-session-storage"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// interface Message {
//   role: "user" | "assistant"
//   content: string
// }

// interface ChatbotDialogProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useSessionStorage<Message[]>("ai-steve-messages", [])
//   const [inputValue, setInputValue] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   // Scroll to bottom when dialog opens
//   useEffect(() => {
//     if (isOpen && messages.length > 0) {
//       // setTimeout(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//       // }, 100)
//     }
//   }, [isOpen, messages.length])

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!inputValue.trim()) return

//     // Add user message
//     const userMessage: Message = { role: "user", content: inputValue }
//     const updatedMessages = [...messages, userMessage]
//     setMessages(updatedMessages)
//     setInputValue("")
//     setIsLoading(true)
//     setError(null)

//     try {
//       const response = await fetch("https://api.swiftwave.ai/api/v1/public/ask-steve/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           messages: updatedMessages,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to get response from AI")
//       }

//       const data = await response.json()

//       // Add assistant message
//       const assistantMessage: Message = {
//         role: "assistant",
//         content: data.reply,
//       }

//       const finalMessages = [...updatedMessages, assistantMessage]
//       setMessages(finalMessages)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred")
//       // Remove the user message if API call failed
//       setMessages(messages)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

//       {/* Dialog */}
//       <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl flex flex-col w-full max-w-md h-96 sm:h-[500px]">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-border p-4">
//           <h2 className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">Ask AI Steve</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             aria-label="Close chat"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Messages Container */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
//           {messages.length === 0 ? (
//             <div className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%] py-8">
//               <p>Welcome! I&apos;m AI Steve. How can I help you today?</p>
//             </div>
//           ) : (
//             <>
//               {messages.map((message, index) => (
//                 <ChatMessage key={index} message={message} />
//               ))}
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.1s" }}
//                       />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.2s" }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </>
//           )}
//         </div>

//         {/* Error Message */}
//         {error && <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm rounded">{error}</div>}

//         {/* Input */}
//         <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
//           <Input
//             type="text"
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isLoading}
//             className="flex-1"
//           />
//           <Button type="submit" disabled={isLoading || !inputValue.trim()} className="px-4">
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ChatbotDialog

// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import ChatMessage from "./chat-message"
// import { useSessionStorage } from "@/hooks/use-session-storage"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// interface Message {
//   role: "user" | "assistant"
//   content: string
// }

// interface ChatbotDialogProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useSessionStorage<Message[]>("ai-steve-messages", [])
//   const [inputValue, setInputValue] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)
//   const messagesContainerRef = useRef<HTMLDivElement>(null)
//   const [isInitialLoad, setIsInitialLoad] = useState(true)

//   // Scroll to bottom on initial load and when new messages are added
//   useEffect(() => {
//     if (isOpen && messages.length > 0) {
//       if (isInitialLoad) {
//         // On initial open, scroll to bottom immediately without smooth behavior
//         setTimeout(() => {
//           messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
//           setIsInitialLoad(false)
//         }, 100)
//       } else {
//         // For new messages, scroll smoothly to bottom only if user is near bottom
//         const container = messagesContainerRef.current
//         if (container) {
//           const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100
//           if (isNearBottom) {
//             messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//           }
//         }
//       }
//     }
//   }, [messages, isOpen, isInitialLoad])

//   // Reset initial load state when dialog closes
//   useEffect(() => {
//     if (!isOpen) {
//       setIsInitialLoad(true)
//     }
//   }, [isOpen])

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!inputValue.trim()) return

//     // Add user message
//     const userMessage: Message = { role: "user", content: inputValue }
//     const updatedMessages = [...messages, userMessage]
//     setMessages(updatedMessages)
//     setInputValue("")
//     setIsLoading(true)
//     setError(null)

//     try {
//       const response = await fetch("https://api.swiftwave.ai/api/v1/public/ask-steve/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           messages: updatedMessages,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to get response from AI")
//       }

//       const data = await response.json()

//       // Add assistant message
//       const assistantMessage: Message = {
//         role: "assistant",
//         content: data.reply,
//       }

//       const finalMessages = [...updatedMessages, assistantMessage]
//       setMessages(finalMessages)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred")
//       // Remove the user message if API call failed
//       setMessages(messages)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

//       {/* Dialog */}
//       <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl flex flex-col w-full max-w-md h-96 sm:h-[500px]">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-border p-4">
//           <h2 className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">Ask AI Steve</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             aria-label="Close chat"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Messages Container */}
//         <div 
//           ref={messagesContainerRef}
//           className="flex-1 overflow-y-auto p-4 space-y-4"
//           style={{ scrollBehavior: 'smooth' }}
//         >
//           {messages.length === 0 ? (
//             <div className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%] py-8">
//               <p>Welcome! I&apos;m AI Steve. How can I help you today?</p>
//             </div>
//           ) : (
//             <>
//               {messages.map((message, index) => (
//                 <ChatMessage key={index} message={message} />
//               ))}
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.1s" }}
//                       />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.2s" }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </>
//           )}
//         </div>

//         {/* Error Message */}
//         {error && <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm rounded">{error}</div>}

//         {/* Input */}
//         <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
//           <Input
//             type="text"
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isLoading}
//             className="flex-1"
//           />
//           <Button type="submit" disabled={isLoading || !inputValue.trim()} className="px-4">
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ChatbotDialog


// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import ChatMessage from "./chat-message"
// import { useSessionStorage } from "@/hooks/use-session-storage"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// interface Message {
//   role: "user" | "assistant"
//   content: string
// }

// interface ChatbotDialogProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useSessionStorage<Message[]>("ai-steve-messages", [])
//   const [inputValue, setInputValue] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)
//   const messagesContainerRef = useRef<HTMLDivElement>(null)
//   const [isInitialLoad, setIsInitialLoad] = useState(true)
//   const [isUserScrolling, setIsUserScrolling] = useState(false)
//   const scrollTimeoutRef = useRef<NodeJS.Timeout>()

//   // Scroll to bottom on initial load and when new messages are added
//   useEffect(() => {
//     if (isOpen && messages.length > 0) {
//       if (isInitialLoad) {
//         // On initial open, scroll to bottom immediately without smooth behavior
//         setTimeout(() => {
//           messagesEndRef.current?.scrollIntoView({ behavior: "auto" })
//           setIsInitialLoad(false)
//         }, 100)
//       } else if (!isUserScrolling) {
//         // For new messages, scroll smoothly to bottom only if user is not manually scrolling
//         const container = messagesContainerRef.current
//         if (container) {
//           const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100
//           if (isNearBottom) {
//             messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//           }
//         }
//       }
//     }
//   }, [messages, isOpen, isInitialLoad, isUserScrolling])

//   // Reset initial load state when dialog closes
//   useEffect(() => {
//     if (!isOpen) {
//       setIsInitialLoad(true)
//     }
//   }, [isOpen])

//   // Handle user scrolling
//   useEffect(() => {
//     const container = messagesContainerRef.current
//     if (!container) return

//     const handleScroll = () => {
//       // Set user scrolling state
//       setIsUserScrolling(true)

//       // Clear existing timeout
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current)
//       }

//       // Reset user scrolling state after a delay
//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsUserScrolling(false)
//       }, 1000)
//     }

//     container.addEventListener('scroll', handleScroll)
    
//     return () => {
//       container.removeEventListener('scroll', handleScroll)
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current)
//       }
//     }
//   }, [])

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!inputValue.trim()) return

//     // Add user message
//     const userMessage: Message = { role: "user", content: inputValue }
//     const updatedMessages = [...messages, userMessage]
//     setMessages(updatedMessages)
//     setInputValue("")
//     setIsLoading(true)
//     setError(null)

//     try {
//       const response = await fetch("https://api.swiftwave.ai/api/v1/public/ask-steve/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           messages: updatedMessages,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to get response from AI")
//       }

//       const data = await response.json()

//       // Add assistant message
//       const assistantMessage: Message = {
//         role: "assistant",
//         content: data.reply,
//       }

//       const finalMessages = [...updatedMessages, assistantMessage]
//       setMessages(finalMessages)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred")
//       // Remove the user message if API call failed
//       setMessages(messages)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

//       {/* Dialog */}
//       <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl flex flex-col w-full max-w-md h-96 sm:h-[500px]">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-border p-4">
//           <h2 className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">Ask AI Steve</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             aria-label="Close chat"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Messages Container */}
//         <div 
//           ref={messagesContainerRef}
//           className="flex-1 overflow-y-auto p-4 space-y-4"
//           style={{ scrollBehavior: 'smooth' }}
//         >
//           {messages.length === 0 ? (
//             <div className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%] py-8">
//               <p>Welcome! I&apos;m AI Steve. How can I help you today?</p>
//             </div>
//           ) : (
//             <>
//               {messages.map((message, index) => (
//                 <ChatMessage key={index} message={message} />
//               ))}
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.1s" }}
//                       />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.2s" }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </>
//           )}
//         </div>

//         {/* Error Message */}
//         {error && <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm rounded">{error}</div>}

//         {/* Input */}
//         <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
//           <Input
//             type="text"
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isLoading}
//             className="flex-1"
//           />
//           <Button type="submit" disabled={isLoading || !inputValue.trim()} className="px-4">
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ChatbotDialog


// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import ChatMessage from "./chat-message"
// import { useSessionStorage } from "@/hooks/use-session-storage"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// interface Message {
//   role: "user" | "assistant"
//   content: string
// }

// interface ChatbotDialogProps {
//   isOpen: boolean
//   onClose: () => void
// }

// const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen, onClose }) => {
//   const [messages, setMessages] = useSessionStorage<Message[]>("ai-steve-messages", [])
//   const [inputValue, setInputValue] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)
//   const messagesContainerRef = useRef<HTMLDivElement>(null)
//   const [isInitialLoad, setIsInitialLoad] = useState(true)
//   const [isUserScrolling, setIsUserScrolling] = useState(false)
//   const scrollTimeoutRef = useRef<NodeJS.Timeout>()

//   // Function to scroll to bottom
//   const scrollToBottom = (behavior: 'auto' | 'smooth' = 'smooth') => {
//     setTimeout(() => {
//       messagesEndRef.current?.scrollIntoView({ 
//         behavior,
//         block: 'end',
//         inline: 'nearest'
//       })
//     }, 100)
//   }

//   // Scroll to bottom on initial load and when new messages are added
//   useEffect(() => {
//     if (isOpen && messages.length > 0) {
//       if (isInitialLoad) {
//         // On initial open, scroll to bottom immediately without smooth behavior
//         scrollToBottom('auto')
//         setIsInitialLoad(false)
//       } else {
//         // For new messages, scroll smoothly to bottom only if user is not manually scrolling
//         const container = messagesContainerRef.current
//         if (container) {
//           const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100
//           if (isNearBottom || !isUserScrolling) {
//             scrollToBottom('smooth')
//           }
//         }
//       }
//     }
//   }, [messages, isOpen, isInitialLoad, isUserScrolling])

//   // Reset initial load state when dialog closes
//   useEffect(() => {
//     if (!isOpen) {
//       setIsInitialLoad(true)
//     }
//   }, [isOpen])

//   // Handle user scrolling with improved detection
//   useEffect(() => {
//     const container = messagesContainerRef.current
//     if (!container) return

//     let isScrolling = false
//     let scrollTimer: NodeJS.Timeout

//     const handleScroll = () => {
//       // Clear existing timeout
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current)
//       }
//       if (scrollTimer) {
//         clearTimeout(scrollTimer)
//       }

//       // Set user scrolling state immediately
//       if (!isScrolling) {
//         setIsUserScrolling(true)
//         isScrolling = true
//       }

//       // Reset user scrolling state after user stops scrolling
//       scrollTimer = setTimeout(() => {
//         setIsUserScrolling(false)
//         isScrolling = false
//       }, 150) // Reduced timeout for more responsive behavior

//       // Also set a longer timeout as backup
//       scrollTimeoutRef.current = setTimeout(() => {
//         setIsUserScrolling(false)
//         isScrolling = false
//       }, 1000)
//     }

//     const handleWheel = () => {
//       handleScroll()
//     }

//     const handleTouchStart = () => {
//       handleScroll()
//     }

//     const handleTouchMove = () => {
//       handleScroll()
//     }

//     // Add multiple event listeners for better scroll detection
//     container.addEventListener('scroll', handleScroll, { passive: true })
//     container.addEventListener('wheel', handleWheel, { passive: true })
//     container.addEventListener('touchstart', handleTouchStart, { passive: true })
//     container.addEventListener('touchmove', handleTouchMove, { passive: true })
    
//     return () => {
//       container.removeEventListener('scroll', handleScroll)
//       container.removeEventListener('wheel', handleWheel)
//       container.removeEventListener('touchstart', handleTouchStart)
//       container.removeEventListener('touchmove', handleTouchMove)
//       if (scrollTimeoutRef.current) {
//         clearTimeout(scrollTimeoutRef.current)
//       }
//       if (scrollTimer) {
//         clearTimeout(scrollTimer)
//       }
//     }
//   }, [])

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!inputValue.trim()) return

//     // Add user message
//     const userMessage: Message = { role: "user", content: inputValue }
//     const updatedMessages = [...messages, userMessage]
//     setMessages(updatedMessages)
//     setInputValue("")
//     setIsLoading(true)
//     setError(null)

//     // Force scroll to bottom after user message
//     setTimeout(() => {
//       setIsUserScrolling(false)
//       scrollToBottom('smooth')
//     }, 50)

//     try {
//       const response = await fetch("https://api.swiftwave.ai/api/v1/public/ask-steve/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           messages: updatedMessages,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to get response from AI")
//       }

//       const data = await response.json()

//       // Add assistant message
//       const assistantMessage: Message = {
//         role: "assistant",
//         content: data.reply,
//       }

//       const finalMessages = [...updatedMessages, assistantMessage]
//       setMessages(finalMessages)

//       // Force scroll to bottom after assistant message
//       setTimeout(() => {
//         setIsUserScrolling(false)
//         scrollToBottom('smooth')
//       }, 100)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred")
//       // Remove the user message if API call failed
//       setMessages(messages)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

//       {/* Dialog */}
//       <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl flex flex-col w-full max-w-md h-96 sm:h-[500px]">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-border p-4">
//           <h2 className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">Ask AI Steve</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             aria-label="Close chat"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Messages Container */}
//         <div 
//           ref={messagesContainerRef}
//           className="flex-1 overflow-y-auto p-4 space-y-4"
//           style={{ scrollBehavior: 'smooth' }}
//         >
//           {messages.length === 0 ? (
//             <div className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%] py-8">
//               <p>Welcome! I&apos;m AI Steve. How can I help you today?</p>
//             </div>
//           ) : (
//             <>
//               {messages.map((message, index) => (
//                 <ChatMessage key={index} message={message} />
//               ))}
//               {isLoading && (
//                 <div className="flex justify-start">
//                   <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.1s" }}
//                       />
//                       <div
//                         className="w-2 h-2 bg-current rounded-full animate-bounce"
//                         style={{ animationDelay: "0.2s" }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//               <div ref={messagesEndRef} />
//             </>
//           )}
//         </div>

//         {/* Error Message */}
//         {error && <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm rounded">{error}</div>}

//         {/* Input */}
//         <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
//           <Input
//             type="text"
//             placeholder="Type your message..."
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isLoading}
//             className="flex-1"
//           />
//           <Button type="submit" disabled={isLoading || !inputValue.trim()} className="px-4">
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ChatbotDialog

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import ChatMessage from "./chat-message"
import { useSessionStorage } from "@/hooks/use-session-storage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface ChatbotDialogProps {
  isOpen: boolean
  onClose: () => void
}

const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useSessionStorage<Message[]>("ai-steve-messages", [])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  //const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  const lastMessageCountRef = useRef<number>(0)

  // Check if user is near bottom of chat
  const isNearBottom = (threshold = 100): boolean => {
    const container = messagesContainerRef.current
    if (!container) return true
    
    const { scrollTop, scrollHeight, clientHeight } = container
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight
    return distanceFromBottom <= threshold
  }

  // Function to scroll to bottom
  const scrollToBottom = (behavior: 'auto' | 'smooth' = 'smooth') => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ 
        behavior,
        block: 'nearest',
        inline: 'nearest'
      })
    }, 100)
  }

  // Scroll to bottom only when appropriate
  useEffect(() => {
    if (!isOpen || messages.length === 0) return

    const container = messagesContainerRef.current
    if (!container) return

    const hasNewMessage = messages.length > lastMessageCountRef.current
    lastMessageCountRef.current = messages.length

    if (isInitialLoad) {
      // On initial open, always scroll to bottom
      scrollToBottom('auto')
      setIsInitialLoad(false)
    } else if (hasNewMessage) {
      // Only scroll for new messages if user is near bottom or not scrolling manually
      if (isNearBottom(150) || !isUserScrolling) {
        scrollToBottom('smooth')
      }
    }
  }, [messages, isOpen, isInitialLoad, isUserScrolling])

  // Reset initial load state when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setIsInitialLoad(true)
      setIsUserScrolling(false)
    }
  }, [isOpen])

  // Handle user scrolling detection
  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container) return

    let scrollTimer: NodeJS.Timeout

    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }

      // Set user scrolling state
      setIsUserScrolling(true)

      // Reset user scrolling state after user stops scrolling
      scrollTimer = setTimeout(() => {
        setIsUserScrolling(false)
      }, 200)
    }

    const handleTouchStart = () => {
      setIsUserScrolling(true)
    }

    const handleTouchEnd = () => {
      setTimeout(() => {
        setIsUserScrolling(false)
      }, 300)
    }

    // Add event listeners
    container.addEventListener('scroll', handleScroll, { passive: true })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
    container.addEventListener('touchcancel', handleTouchEnd, { passive: true })
    
    return () => {
      container.removeEventListener('scroll', handleScroll)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('touchcancel', handleTouchEnd)
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
    }
  }, [])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: inputValue }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInputValue("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("https://api.swiftwave.ai/api/v1/public/ask-steve/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from AI")
      }

      const data = await response.json()

      // Add assistant message
      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply,
      }

      const finalMessages = [...updatedMessages, assistantMessage]
      setMessages(finalMessages)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      // Remove the user message if API call failed
      setMessages(messages)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

      {/* Dialog */}
      <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl flex flex-col w-full max-w-md h-96 sm:h-[500px]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%]">Ask AI Steve</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close chat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Container */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {messages.length === 0 ? (
            <div className="text-lg font-semibold bg-gradient-to-r from-[#9e7f29] via-[#ffe185] to-[#9e7f29] bg-clip-text text-4xl font-bold text-transparent [background-size:100%_100%] py-8">
              <p>Welcome! I&apos;m AI Steve. How can I help you today?</p>
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Error Message */}
        {error && <div className="px-4 py-2 bg-destructive/10 text-destructive text-sm rounded">{error}</div>}

        {/* Input */}
        <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !inputValue.trim()} className="px-4">
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ChatbotDialog