interface Quote  {
  quote: string;
  author: string;
}

const quotes: Quote[] = [
  {
      quote: "Always seek out the seed of triumph in every adversity",
      author: "Og Mandino"
    }, 
    {
      quote: "You must not come lightly to the blank page",
      author: "Stephen King"
    },
    {
      quote: "I like to play blackjack. I'm not addicted to gambling, I'm addicted to sitting in a semi-circle",
      author: "Mitch Hedberg"
    },
    {
      quote: "What else is love but understanding and rejoicing in the fact that another person lives, acts, and experiences otherwise than we do…?",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "Never tell people how to do things. Tell them what to do and they will surprise you with their ingenuity",
      author: "George S. Patton"
    },
    {
      quote: "Take care of the luxuries and the necessities will take care of themselves",
      author: "Dorothy Parker"
    },
    {
      quote: "The coldest winter I ever spent was a summer in San Francisco",
      author: "Mark Twain"
    },
    {
      quote: "Nothing is particularly hard if you divide it into small jobs",
      author: "Henry Ford"
    },
    {
      quote: "It's not having what you want. It's wanting what you've got",
      author: "Sheryl Crow"
    },
    {
      quote: "Trade your secrets and become who you are",
      author: "Frank Warren"
    }
];

export const AuthorQuote = () => {
  const newQuote = document.getElementById('new-quote-button') as HTMLButtonElement;
  if (newQuote) {
    newQuote.addEventListener('click', handleButtonClick);
  }

  function getRandomQuote(): Quote {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }

  function displayQuote(quote: Quote): void {
    const authorQuote = document.getElementById('author-quote') as HTMLParagraphElement;
    const authorName = document.getElementById('author-name') as HTMLParagraphElement;
    
    if (authorQuote && authorName) {
      authorQuote.textContent = quote.quote;
      authorName.textContent = `- ${quote.author}`
    }
  }

  function handleButtonClick(): void {
    const randomQuote = getRandomQuote();
    displayQuote(randomQuote);
  }
};