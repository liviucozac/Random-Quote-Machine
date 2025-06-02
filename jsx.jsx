class QuoteMachine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: proverbsQuotes[0].quote,
      author: proverbsQuotes[0].author
    };
    this.newQuote = this.newQuote.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  // Toggle dark mode
  toggleDarkMode() {
    const body = document.body;
    const darkModeEnabled = body.classList.contains('dark-mode');
    
    // Toggle dark mode class
    if (darkModeEnabled) {
      body.classList.remove('dark-mode');
      document.getElementById('dark-mode-toggle').classList.remove('moon');
      document.getElementById('dark-mode-toggle').classList.add('sun');
    } else {
      body.classList.add('dark-mode');
      document.getElementById('dark-mode-toggle').classList.remove('sun');
      document.getElementById('dark-mode-toggle').classList.add('moon');
    }
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        <button id="new-quote" onClick={this.newQuote}>New Verse</button>
        <a href="#" id="tweet-quote" target="_blank">Tweet</a>
        {/* Dark Mode Toggle Button */}
        <button id="dark-mode-toggle" className="sun" onClick={this.toggleDarkMode}></button>
      </div>
    );
  }

  newQuote() {
    const randomIndex = Math.floor(Math.random() * proverbsQuotes.length);
    const randomQuote = proverbsQuotes[randomIndex];
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    });
  }
}

const proverbsQuotes = [
  {
    quote: "Trust in the LORD with all your heart and lean not on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.",
    author: "Proverbs 3:5–6"
  },
  {
    quote: "Above all else, guard your heart, for everything you do flows from it.",
    author: "Proverbs 4:23"
  },
  {
    quote: "Hatred stirs up conflict, but love covers over all wrongs.",
    author: "Proverbs 10:12"
  },
  {
    quote: "All hard work brings a profit, but mere talk leads only to poverty.",
    author: "Proverbs 14:23"
  },
  {
    quote: "Better a little with the fear of the LORD than great wealth with turmoil.",
    author: "Proverbs 15:16"
  },
  {
    quote: "Commit to the LORD whatever you do, and He will establish your plans.",
    author: "Proverbs 16:3"
  },
  {
    quote: "A wife of noble character who can find? She is worth far more than rubies.",
    author: "Proverbs 31:10"
  }
];

ReactDOM.render(<QuoteMachine />, document.getElementById('root'));
