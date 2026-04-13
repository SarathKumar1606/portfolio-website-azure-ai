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
          <div className="logo">S</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:sarathhh16@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I'm</small>
                Sarathkumar R
              </h1>
              <p>
                <span>Full Stack Developer passionate about building real-world solutions using web technologies, IoT, and AI. I enjoy creating impactful systems that combine software, data, and problem-solving.</span>
              </p>
              <div className="call-to-action">
                <a href="./RESUME_26.pdf" className="button black">
                  View Resume
                </a>
                <a href="mailto:sarathhh16@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/SarathKumar1606">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/sarathkumar-ravichandran-885979279/">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
                <a href="https://leetcode.com/u/Sarathhh16/">
                  <img src="./imgs/leet.webp" alt="LeetCode" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/dp.png" alt="Sarathkumar R" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              
              <img src="./imgs/c.png" width="128" alt="C" />
              <img src="./imgs/cpp.jpg" width="128" alt="C++" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/java.png" width="128" alt="Java" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/ejs.png" width="128" alt="EJS" />
              <img src="./imgs/nodejs.png" width="128" alt="Node.js" />
              <img src="./imgs/sql.png" width="128" alt="SQL" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/git.png" width="128" alt="Git" />
              <img src="./imgs/github.png" width="128" alt="GitHub" />
              <img src="./imgs/postman.png" width="128" alt="Postman" />
              
               <img src="./imgs/c.png" width="128" alt="C" />
              <img src="./imgs/cpp.jpg" width="128" alt="C++" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/java.png" width="128" alt="Java" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/ejs.png" width="128" alt="EJS" />
              <img src="./imgs/nodejs.png" width="128" alt="Node.js" />
              <img src="./imgs/sql.png" width="128" alt="SQL" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/git.png" width="128" alt="Git" />
              <img src="./imgs/github.png" width="128" alt="GitHub" />
              <img src="./imgs/postman.png" width="128" alt="Postman" />
              
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
                    <p>
                      I'm Sarathkumar, a B.Tech Information Technology student at the College of Engineering Guindy (Anna University), currently maintaining a CGPA of 8.82.</p>

<p>I completed my schooling with 98.5% in Higher Secondary and secured a 94.88 percentile in JEE Mains, graduating as a school topper and Student Council President.</p>

<p>Based in Coimbatore, I am passionate about building real-world solutions using web development, IoT, and AI. I enjoy combining technical skills with leadership and communication to create meaningful impact.</p>

<p>Currently, I’m working on full-stack and IoT-based projects, continuously improving my problem-solving and development skills.
                    </p>
                </div>
            </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Leadership and</small>
             Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/aup.jpeg" alt="AU Podium" width="100%" />
                  <figcaption>
                    Secretary – AU Podium
                  </figcaption>
                </div>
              </figure>
              <h3>Secretary – AU Podium</h3>
              <div>2024 – Present</div>
              <p>Leading a speech and communication club at Anna University, organizing events, mentoring juniors, and managing club activities to improve public speaking skills.</p>
            </article>



            <article>
              <figure>
                <div>
                  <img src="./imgs/nss.jpg" alt="NSS" width="100%" />
                  <figcaption>
                    Joint Secretary – NSS Unit 4
                  </figcaption>
                </div>
              </figure>
              <h3>Joint Secretary – NSS Unit 4</h3>
              <div>2023 – Present</div>
              <p>Actively involved in community service initiatives including awareness campaigns, blood donation drives, and campus cleaning activities. </p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/mc.jpeg" alt="Master of Ceremony" width="100%" />
                  <figcaption>
                    Master of Ceremony
                  </figcaption>
                </div>
              </figure>
              <h3>Master of Ceremony</h3>
              <div>2023 – Present</div>
              <p>Hosted major college events such as Infiesta 2025, Freshers’ Day, and Aatral, showcasing strong communication, coordination, and stage presence.</p>
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
            <a href="https://github.com/SarathKumar1606/IntelliWaste-IoT-ML" className="bento-item">
              <img src="./imgs/binback.jpg" alt="BGCCI" width="100%" />
            </a>
            <a href="https://github.com/SarathKumar1606/CEG-Club-Connex/tree/main/Final%20Website%20Outlook" className="bento-item">
              <img src="./imgs/cegmain.png" alt="Churhview" width="100%" />
            </a>
            <a href="https://github.com/SarathKumar1606/C-CargoDSManager/tree/main/Map%20images" className="bento-item">
              <img src="./imgs/shortest_path.png" alt="Harley" width="100%" />
            </a>
            <a href="https://github.com/SarathKumar1606/IntelliWaste-IoT-ML" className="bento-item">
              <img src="./imgs/binfront.jpg" alt="Bunbury" width="100%" />
            </a>
            <a href="https://github.com/SarathKumar1606/C-CargoDSManager/tree/main/Map%20images" className="bento-item">
              <img src="./imgs/ccs.png" alt="Running" width="100%" />
            </a>
            <a href="https://github.com/SarathKumar1606/CEG-Club-Connex/tree/main/Final%20Website%20Outlook" className="bento-item">
              <img src="./imgs/oblogin.jpg" alt="School" width="100%" />
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
					<a href="./RESUME_26.pdf" className="button black">Download Resume</a>
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
   <footer className="footer ">
  <div className="footer-container">

    <div className="footer-left">
      <h3>Sarathkumar R</h3>
      <p>
        Full Stack Developer | IoT & AI Enthusiast <br />
        Building impactful solutions with code and data.
      </p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="mailto:sarathhh16@gmail.com">Contact</a></li>
      </ul>
    </div>

    <div className="footer-social">
      <h4>Connect</h4>
      <div className="social-icons">
        <a href="https://github.com/SarathKumar1606"><img src="./imgs/github.png" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/sarathkumar-ravichandran-885979279/"><img src="./imgs/linkedin.png" alt="LinkedIn" /></a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} Sarathkumar Ravichandran, CEG, Anna University, Chennai
    </p>
  </div>
</footer>
    </> 
  );
}
