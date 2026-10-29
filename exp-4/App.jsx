import "./App.css";

// Header Component
function Header() {
  return (
    <header>
      <h1>My React Web Application</h1>
      <p>Hello World</p>
    </header>
  );
}

// Content Component
function Content() {
  return (
    <main>
      <h2>Welcome to React JSX</h2>
      <p>
        React is a JavaScript library used to develop interactive
        and reusable user interfaces.
      </p>
    </main>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>This is a footer</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;