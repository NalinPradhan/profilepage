const OpenAI = require("openai");

// Embed knowledge base directly in the function
const knowledge_base = `
# About Nalin Pradhan

## Professional Background
Nalin Pradhan is a Full Stack Developer with expertise in modern web technologies. He is passionate about solving complex problems and finds the greatest satisfaction in overcoming technical challenges. His journey into tech started with the typical fascination with "cool tech guys in movies," but what truly hooked him was the blissful feeling of solving problems - from getting a simple pyramid of asterisk patterns right to tackling increasingly complex challenges.
 Started coding journey in 2018 when he was in class nine with fascination for problem-solving
- Life-long learner mindset.
- Experience working on diverse projects from traditional business websites to AI-powered applications
- Strong focus on user experience and modern web development practices
- Enjoys collaborating on exciting projects and tackling complex technical challenges

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

### Cloud & AI
- AWS (Amazon Web Services)
- AI and Machine Learning
- Large Language Models (LLMs)
- AI Agents
- OpenAI API integration
- GPT-3.5 Turbo

### Tools & Technologies
- Git and GitHub (Version Control)
- Webpack
- Docker
- Postman
- Figma

### Languages
- Python (AI/ML applications, web scraping)
- JavaScript/Node.js

## Notable Projects

### 1. Bhutan Incense
A product showcase website for a company that creates handcrafted incense using traditional Bhutanese methods. Features modern design with smooth GSAP animations. Built with Figma for UI/UX design.

### 2. AI Website Summarizer
An AI-powered utility that uses Beautiful Soup for web scraping and OpenAI's GPT-3.5 Turbo to generate concise website summaries. Demonstrates practical application of AI technology. Note: Some websites with strict safety regulations may not work due to web scraping restrictions.

### 3. Food Judge
A playful React application that guesses which region of India a player is from based on their food preferences. Covers Central, Northern, Eastern, Western, and Southern regions of India.

### 4. Birdie - Service Provider App
A modern mobile application designed to connect users with professional movers and maids. Features intuitive service provider search, clean UI design, user profile management, and a service rating system. High-fidelity prototype created in Figma.

### 5. prodbynalin
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
Schooling:
 Punakha Central School, Bhutan, Twelfth Grade Completed in 2021
 Phuentsholing Middle Secondary School, Bhutan, Ninth Grade Completed in 2019
 Phuentsholing Lower Secondary School, Bhutan, Third to Seventh Grade Completed in 2017 
 ## Location & Work Preferences
- Based in Bhutan
- Open to remote work opportunities
- Available for freelance projects and collaborations
- Timezone: [Your timezone]
- Preferred communication: Email, LinkedIn
## What I Can Help You With
- Full-stack web application development
- React.js frontend development with modern UI/UX
- MERN stack applications
- AI integration and chatbot development
- Website redesigns and modernization
- API development and integration
- Database design and optimization
## My Development Process
- Start with understanding user needs and business requirements
- Create wireframes and prototypes (using Figma)
- Develop with mobile-first, responsive design approach
- Implement with modern best practices and clean code
- Test thoroughly across devices and browsers
- Deploy with proper CI/CD practices
Fun facts about Nalin:
-Produces beats and posts it in instagram(handle @prodbynalin), also sings and plays guitar.
-Lionel Messi fan
-Enjoys playing football a lot, during college days and school days used to play as a right winger for  school team
-He is a Desup and has won the inter company football tournament during Desup training times.
-Is a Golden Youth Award participant representing Chukha when he was in school.
-He believes in goodness of people and loves to help others. But does not expect fair treatment from everyone. Hopes for good but does not expect it. Assumes error but not malice from people.
Career Objective:
To help Bhutan grow in the field of technology and establish it in the global market. To help His Majesty's vision for the GMC(Gelephu Mindfulness City). To work in an organization where I can utilize my skills and knowledge to the fullest and contribute to the growth of the organization. To work in an environment where I can learn new skills and technologies and grow as a professional. 

Miscellaneous:
I dislike bed rotting and think it is the killer of productivity and youth in Bhutan and elsewhere. Doomscrolling is another productivity killer and I try to avoid it as much as possible. I love to read books, especially non-fiction and autobiographies. I am a foodie and my favourite dish is Bathup and Thukpa. I am a fitness enthusiast and love to stay fit and healthy. I believe in continuous learning and self-improvement. I am always endulged in an online course and am always reading several books at a time. I also love to watch movies like Forrest Gump, The Shawshank Redemption, John Wick, The Greenmile and other movies like that. I love dogs. I think Bhutan has a lot to offer the world in terms of harmony with nature and harmony in the society as well. That is, I think Bhutan can never see a outrageous revolt or protest like Nepal saw recently. It may be good or bad but what Bhutanese do is trust in their king and the leaders who are hopefully honest and want good for the country. I feel very responsible and accountable for my counntry even though i am a layman. I think everyone should feel the same way for their country. I love my country and will do anything to help it grow and prosper. I am someone who will never litter the surroundings with waste, even spitting in Bhutan is something I avoid.I just feel that others might do it and they are free to do so but I should protect my land and respect it at the same time.
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
