import { AuthorQuote } from "../data/AuthorQuotes";

export const LeftSide = () => {

    return (
        <section className='relative grid gap-4 items-center justify-center'>
            <div className='container max-w-4xl'>
                <h1 className='asbolute text-6xl font-medium text-primary animate-slide'>
                    Random
                </h1>
                <h1 className='asbolute text-6xl font-medium text-primary animate-slide'>
                    Quote
                </h1>
                <h1 className='asbolute text-6xl font-medium text-primary animate-slide'>
                    Machine
                </h1>
                <div className='container m-auto py-10'>
                    <button 
                        className='button-style'
                        id = 'new-quote-btn'
                        onClick={AuthorQuote}
                    >
                        Generate Quote
                    </button>
                </div>
            </div>
        </section>
    );
}