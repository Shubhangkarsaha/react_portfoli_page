import React from 'react';
import logo from './SHUBHA.png';
import './App.css'; 

// Header component
const Header = () => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" height={170} width={170} />
      <h1><u>Portfolio</u></h1>
      <h2>WELLCOME TO MY PORTFOLIO</h2>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Career Path</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Sidebar component
const Sidebar = () => {
  return (
    <aside class="container">
      <ul><h2>POSTS</h2>
        <li>Career PAthways</li>
        <li>CPP Programming</li>
        <li>PHP Projects</li>
        <li>OOPs Concepts</li>
      </ul>
    </aside>
  );
};

// Main content component
const MainContent = () => {
  return (
    <main class="container">
      <article>
        <h2>Career Portfolio</h2>
        <p>Author: Shubhangkar</p>
        <p>Published on: April 18, 2024</p>
        <pre>Hello, <br/>           This is Shubhangkar, and i'm a professional Web Developper. Basically I'm a Fullstack developper.</pre>
        <pre>This is my portfolio page where i'm telling about some career guidance and how to making network by joining communitites and creating blogs .</pre>
        {/* Add more blog posts here */}
      </article>
    </main>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 My Portfolio</p>
      <div className="social-media-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

// App component to combine all components
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
