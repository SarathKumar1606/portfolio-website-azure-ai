"use client";
import Image from "next/image";
import {  useRef, useEffect } from "react";
import {useState} from "react";
export default function Home() {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  
  const [input, setInput] = useState("");
const [messages, setMessages] = useState([
  { role: "bot", text: "Hi! Ask me about Sarath 👋" }
]);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const newMessages = [...messages, { role: "user", text: input }];
  setMessages(newMessages);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "bot", text: data.reply }
    ]);
  } catch (err) {
    setMessages([
      ...newMessages,
      { role: "bot", text: "Error getting response 😅" }
    ]);
  }

  setInput("");
};
  const [menuOpen,setMenuOpen]=useState(false);
  const toggleMobileMenu = () =>{
    setMenuOpen(!menuOpen);
    

  }
 useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTop =
      chatContainerRef.current.scrollHeight;
  }
}, [messages]);
  return (
    <>
        <header>
        
            <a href="#" className="logo-holder">
                <div className="logo">L</div>
                <div className="logo-text">Portfolio Website</div>
            </a>
        <nav>
        <ul id="menu">
            <li>
                <a href="#"> Home</a>
            </li>
            <li>
                <a href="#skills">Skills </a>
            </li>
            <li>
                <a href="#projects"> Projects</a>
            </li>
            <li>
                <a href="mailto:sarathhh16@gmail.com" className = "button"> Contact Me</a>
            </li>
        </ul>
        <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
           <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
        </a>
        </nav>
    </header>
    <main>
        <section className="hero container">
            <div className ="hero-blue">
                <div>
                    <h1><small>Hi I'm</small>
                    Sarathkumar Ravichandran</h1>
                    <p>
                        Software Developer
                        <span>I'm interestered in </span>
                    </p>
                    <div className="call-to-action">
                    <a href="#" className="button black">
                        View Resume
                    </a>
                    <a href="mailto:sarathhh16@gmail.com" className="button white">
                        Contact Me
                    </a>
                </div>
                </div>
                <div className="social-links">
                <a href="#">
                    <img src="./imgs/github.png" alt="Github" width="48px"/>
                </a>
                <a href="#">
                    <img src="./imgs/linkedin.png" alt="LinkedIn" width="48px"/>
                </a>
            </div>
            </div>
            
            
            <div className="hero-yellow">
                <img src="./imgs/hero-image.png" alt="Sarathkumar R" width="100%"/>
            </div>

        </section>
        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="./imgs/html.png" alt="HTML" width="128"/>
                    <img src="./imgs/css.png" alt="CSS" width="128"/>
                    <img src="./imgs/javascript.png" alt="JS" width="128"/>
                    <img src="./imgs/react.png" alt="React" width="128"/>
                    <img src="./imgs/sass.png" alt="Sass" width="128"/>
                    <img src="./imgs/nextjs.png" alt="Next JS" width="128"/>
                    <img src="./imgs/azure.png" alt="Azure" width="128"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="128"/>
                    <img src="./imgs/python.png" alt="Python" width="128"/>

                    <img src="./imgs/html.png" alt="HTML" width="128"/>
                    <img src="./imgs/css.png" alt="CSS" width="128"/>
                    <img src="./imgs/javascript.png" alt="JS" width="128"/>
                    <img src="./imgs/react.png" alt="React" width="128"/>
                    <img src="./imgs/sass.png" alt="Sass" width="128"/>
                    <img src="./imgs/nextjs.png" alt="Next JS" width="128"/>
                    <img src="./imgs/azure.png" alt="Azure" width="128"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="128"/>
                    <img src="./imgs/python.png" alt="Python" width="128"/>
                </div>
            </div>
        </section>
        <section  id="skills" className="skills container">
            <h2>
                <small>About Me</small>
                Skills
            </h2>
            <div className="holder-blue">
                <div className="left-column">
                    <h3>Programming</h3>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Java (Beginner)</li>
                    </ul>
                    <h3>Web Development</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>javascript</li>
                        <li>EJS</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL</li>
                    </ul>
                    <h3>Tools</h3>
                    <ul>
                        <li>VS Code</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Postman</li>
                    </ul>
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Leadership</li>
                        <li>Public Speaking</li>
                        <li>Crowd Control</li>
                        <li> Extempore</li>
                        <li>Teaching</li>
                        <li>Tamil Poem Writing</li>
                    </ul>
                </div>
                <div className="right-column">
                    <h3>A bit about me</h3>
                    <p>I'm sarathkumar...</p>

                    <p>Im currently working on</p>
                </div>
            </div>
        </section>
        <section className="work-experience">
            <h2>
                <small>Recent</small>
                Work Experience
            </h2>
                <div className="jobs">
                    <article>
                        <figure>
                            <div>
                                <img src="./imgs/workplace-1.jpg" alt="Workplace-1" width="100%"/>
                                <figcaption>
                                    Workpace-1
                                </figcaption>
                            </div>
                        </figure>
                        <h3>WP1</h3>
                        <div>2000</div>
                        <p>description</p>
                    </article>
                </div>
        </section>
        <section id="projects" className="bento container">
			<h2>
				<small>
					Previous
				</small>
				Completed Projects
			</h2>
			<div className="bento-grid">
				<a href="#" className="bento-item">
					<img src="./imgs/bento-1.jpg" alt="BGCCI" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-2.jpg" alt="Churhview" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-3.jpg" alt="Harley" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-5.jpg" alt="Bunbury" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-6.jpg" alt="Running" width="100%" />
				</a>
				<a href="#" className="bento-item">
					<img src="./imgs/bento-7.jpg" alt="School" width="100%" />
				</a>
			</div>
		</section>
        <section className="chatbot container">
			<h2>
				<small>
					Talk to me
				</small>
				Chatbot
			</h2>
			<div className="chatbot-blue">
				<div className="chat-info">
					<h3>Azure AI Chatbot</h3>
					<p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
					<p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
					<a href="./Sample_Resume_Template.pdf" className="button black">Download Resume</a>
				</div>
				<div className="chat-box">
					<div className="scroll-area">
						<ul id="chat-log">
              {messages.map((msg, i) => (
            <li key={i}>
              <span className={`avatar ${msg.role}`}>
                {msg.role === "bot" ? "AI" : "You"}
              </span>
              <div className="message">{msg.text}</div>
            </li>
          ))}
						</ul>
					</div>
					 <div className="chat-message">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) {
              sendMessage();
            }
          }}
          placeholder="Ask about Sarath..."
        />

        <button className="button black" onClick={sendMessage}>
          Send
        </button>
      </div>
				</div>
			</div>
		</section>
    </main>
    </> 
  );
}
