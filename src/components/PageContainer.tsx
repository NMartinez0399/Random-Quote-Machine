import { SocialIcon } from "react-social-icons";

interface Quote {
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

export const PageContainer = () => {
    const newQuote = document.getElementById('new-quote-button') as HTMLButtonElement;

    function getRandomQuote(): Quote {
        const index = Math.floor(Math.random() * quotes.length);
        return quotes[index];
    }

    function displayQuote(quote: Quote): void {
        const authorQuote = document.getElementById('author-quote') as HTMLParagraphElement;
        const authorName = document.getElementById('author-name') as HTMLParagraphElement;

        if (authorQuote && authorName) {
            authorQuote.textContent = `"${quote.quote}"`;
            authorName.textContent = `- ${quote.author}`
        }
    }

    const handleButtonClick = () => {
        const randomQuote = getRandomQuote();
        displayQuote(randomQuote);
    }

    if (newQuote) {
        newQuote.addEventListener('click', handleButtonClick);
    }

    const handleTwitterShare = () => {
        const authorQuote = document.getElementById('author-quote') as HTMLParagraphElement;
        window.open(`https://twitter.com/intent/tweet?text=${authorQuote.textContent}`, '_blank');
    }

    return (
        <section className='relative'>
            <div className='container mx-auto max-w-5xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <section className='relative grid gap-4 items-center justify-center'>
                        <div className='container max-w-4xl'>
                            <h1 className='asbolute text-6xl font-medium text-primary animate-slide'>
                                Random
                            </h1>
                            <h1 className='asbolute text-6xl font-medium text-primary animate-slide-delay-1'>
                                Quote
                            </h1>
                            <h1 className='asbolute text-6xl font-medium text-primary animate-slide-delay-2'>
                                Machine
                            </h1>
                            <div className='container flex flex-col m-auto py-10 space-y-4 opacity-0 animate-fade-in'>
                                <button
                                    className='quote-button min-h-16'
                                    id='new-quote-btn'
                                    type='submit'
                                    onClick={handleButtonClick}
                                >
                                    Generate Quote 
                                </button>
                                <button 
                                    className='share-button'
                                    id='share-quote-btn'
                                    type = 'submit'
                                    onClick={handleTwitterShare}
                                >
                                    Share Quote {<SocialIcon url='https://twitter.com' />}
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col items-center h-screen max-h-screen justify-center relative'>
                        <div className='w-full mx-auto max-w-7xl relative opacity-0 animate-fade-in'>
                            <div className='max-w-l mx-auto bookCover'>
                                <div className='grid grid-cols-12 text-secondary'>
                                    <div className='col-span-1 flex border-r border-gray-400 py-64'></div>
                                    <div className='col-span-11 flex flex-col justify-between p-4'>
                                        <div className='mt-12 text-left space-y-8'>
                                            <p
                                                className='text-3xl mt-3 lg:text-4xl font-medium leading-none min-h-8/10 text-pretty md:text-balance overflow-scroll'
                                                id='author-quote'
                                            >
                                                Author Quote
                                            </p>
                                            <p
                                                className='text-m font-medium'
                                                id='author-name'
                                            >
                                                Author Name
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>);
}