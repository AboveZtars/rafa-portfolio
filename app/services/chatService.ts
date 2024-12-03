import axios from "axios";

async function postMessageToApi(message: string): Promise<string> {
  try {
    const response = await axios.post(
      "https://cv-llm-service.onrender.com/openai",
      {
        user_message: message,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting message to API:", error);
    throw new Error("Failed to send message to API");
  }
}

export async function sendMessage(message: string): Promise<string> {
  try {
    const response = await postMessageToApi(message);
    return response;
  } catch (error) {
    console.error("Error sending message:", error);
    return "An error";
  }
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  // return `You said: "${message}". This is a mock response from the bot.`;
}
