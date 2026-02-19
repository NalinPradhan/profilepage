const OpenAI = require("openai");

// Embed knowledge base directly in the function
const knowledge_base = `
# About Nalin Pradhan

## Professional Background
Nalin Pradhan is a Full Stack Developer with expertise in modern web technologies. He is passionate about solving complex problems and finds the greatest satisfaction in overcoming technical challenges.With a strong interest in AI, RAG workflows, and GPT‑based systems his work has always been driven by curiosity about how intelligent systems can enhance user experiences and solve complex problems. He finds the intersection of software engineering and applied AI both challenging and rewarding.
 His journey into tech started with the typical fascination with "cool tech guys in movies," but what truly hooked him was the blissful feeling of solving problems - from getting a simple pyramid of asterisk patterns right to tackling increasingly complex challenges.

## Technical Skills

### Frontend Development
- HTML5, CSS3, Tailwind CSS
- JavaScript (ES6+)
- React.js
- UI/UX Design
- Responsive Design
- CSS frameworks
- GSAP Animations

### Backend & Full Stack
- MERN Stack (MongoDB, Express.js, React.js, Node.js)
- Next.js
- RESTful API development and integration

### Databases
- MongoDB
- MySQL
- PostgreSQL
- Firebase

### Cloud & AI
-Firebase
-IOT integration
- AWS (Amazon Web Services)
- AI and Machine Learning
- Large Language Models (LLMs)
- AI Agents and RAG
- OpenAI API integration
- GPT-3.5 Turbo

### Tools & Technologies
- Git and GitHub (Version Control)
- Webpack
- Docker
- Postman
- Figma
- Thingspeak

### Languages
- Python (AI/ML applications, web scraping)
- JavaScript/Node.js

## Notable Projects

### 1. Bhutan Incense
A product showcase website for a company that creates handcrafted incense using traditional Bhutanese methods. Features modern design with smooth GSAP animations. Built with Figma for UI/UX design. In this project,he was tasked with creating a product‑showcase website for Bhutan Incense. The challenge was to design both the UI and UX while ensuring the brand’s core values were reflected throughout the site. Since the company produces traditional Bhutanese incense with distinctive packaging, he researched their brand identity and Bhutanese culture to craft a design that felt authentic rather than generic.

He incorporated cultural elements such as the Khorlo (Wheel of Life) from Buddhism and imagery of Himalayan forests, emphasizing the incense’s natural origins and spiritual roots. To balance tradition with modern appeal, I implemented smooth, purposeful animations and adhered to industry best practices for performance optimization, ensuring fast load times.

### 2. Smart Irrigation System for Chandigarh University parks
He developed a smart irrigation system for urban parks using IOT sensors(ESP 32) and Arduino. The project involved automating the irrigation triggers using data from sensors for temperature, humidity and Soil Moisture. The data is collected from the sensors, which goes to the Thingspeak console, from there the program fetches the data and decides whether to keep the water pumps off or on. 



### 3. AI Website Summarizer
An AI-powered utility that uses Beautiful Soup for web scraping and OpenAI's GPT-3.5 Turbo to generate concise website summaries. Demonstrates practical application of AI technology. Note: Some websites with strict safety regulations may not work due to web scraping restrictions.

### 4. Food Judge
A playful React application that guesses which region of India a player is from based on their food preferences. Covers Central, Northern, Eastern, Western, and Southern regions of India.

### 5. Birdie - Service Provider App
A modern mobile application designed to connect users with professional movers and maids. Features intuitive service provider search, clean UI design, user profile management, and a service rating system. High-fidelity prototype created in Figma.

### 6. prodbynalin
A personal project showcasing beats and music production. The UI is inspired by the cartoon character Stitch, featuring a playful design with an integrated music player. Built using the MERN stack.

## Contact Information
- Email: pnalin63@gmail.com
- Phone: (975) 77300501, (91) 7908618599
- LinkedIn: https://in.linkedin.com/in/nalin-pradhan-499738192
- GitHub: https://github.com/NalinPradhan
- Instagram: @__.nalin.___
- Portfolio: https://nalinpradhan.netlify.app/

## Personality & Work Ethic
Nalin is driven by the satisfaction of problem-solving. He believes that the blissful feeling after solving a problem is the best part of what he does. He's always looking to collaborate on exciting projects and tackle new challenges in web development. His approach combines technical expertise with creative design thinking, as evidenced by his diverse project portfolio ranging from traditional product showcases to AI-powered applications.

## Education & Learning
Recently completed a course on LLMs, agents, and chatbots, learning how to build chatbots with context knowledge. Continuously expanding knowledge in AI and modern web development practices.
`;

exports.handler = async (event, context) => {
  console.log("Function called with method:", event.httpMethod);

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    console.log("Request body:", event.body);

    if (!event.body) {
      throw new Error("No request body provided");
    }

    const { message, history } = JSON.parse(event.body);

    console.log("Parsed message:", message);

    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OpenAI API key not configured");
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const system_message = `You are a helpful AI assistant for Nalin Pradhan's portfolio website. 
Your role is to answer questions about Nalin (refer to him as "my master Nalin" or "Master Nalin").You must assume of tone of friendly fire towards Nalin and professional tone towards others.Nalin can be treated as Luffy from One Piece, a fun loving, carefree person but when it comes to work, he is serious and hardworking. You can tease Nalin but let the readers know.
Use the following pieces of context to answer the question at the end. 
If you don't know the answer, just say that you don't know, don't try to make up an answer. 
If the question is not about Nalin, politely inform them that you are configured to only answer questions about Nalin. 
Context:

${knowledge_base}`;

    // Format messages for OpenAI
    const messages = [{ role: "system", content: system_message }];

    if (history && Array.isArray(history)) {
      for (const msg of history) {
        messages.push({ role: msg.role, content: msg.content });
      }
    }

    messages.push({ role: "user", content: message });

    console.log("Calling OpenAI with messages:", messages.length);

    // Call OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });

    console.log("OpenAI response received");

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        response: response.choices[0].message.content,
      }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: error.message,
        details: "Check function logs for more details",
      }),
    };
  }
};
