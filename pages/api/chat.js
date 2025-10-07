export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    // Safety check
    if (!message || message.trim() === "") {
      return res.status(400).json({ reply: "Please enter a valid message." });
    }

    // OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful chatbot." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    // Handle API-level errors
    if (data.error) {
      console.error("OpenAI API error:", data.error);

      return res.status(200).json({
        reply:
          "I'm having trouble reaching my AI brain right now 😅. But here's a fallback: " +
          fallbackReply(message),
      });
    }

    // Successful response
    return res.status(200).json({
      reply:
        data.choices?.[0]?.message?.content ||
        "Sorry, I couldn’t generate a reply.",
    });
  } catch (error) {
    console.error("Chatbot error:", error);

    // Fallback response on network or server error
    return res.status(200).json({
      reply:
        "Oops! I’m offline right now, but here’s a quick response: " +
        fallbackReply(req.body?.message),
    });
  }
}

// Simple fallback generator
function fallbackReply(userMessage) {
  const lower = userMessage?.toLowerCase() || "";
  if (lower.includes("hello") || lower.includes("hi"))
    return "Hey there! 👋 How can I help you today?";
  if (lower.includes("help"))
    return "Sure! Try asking me about your account, product info, or anything else.";
  if (lower.includes("bye")) return "Goodbye! Talk to you soon 👋";

  return "I'm here to help, but my main AI service is temporarily unavailable.";
}
