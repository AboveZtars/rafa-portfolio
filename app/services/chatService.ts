export async function sendMessage(message: string): Promise<string> {
  // In a real application, you would make an API call to your backend here
  // For this example, we'll just return a mock response
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
  return `You said: "${message}". This is a mock response from the bot.`
}

