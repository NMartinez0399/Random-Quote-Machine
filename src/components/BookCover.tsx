import { AuthorQuote } from "../data/AuthorQuotes";

export const BookCover = () => {
    return (
        <section className='flex flex-col items-center h-screen justify-center relative'>
            <div className='w-full mx-auto max-w-7xl relative'>
                <div className='max-w-sm mx-auto bookCover'>
                    <div className='grid grid-cols-12 text-secondary'>
                        <div className='col-span-1 flex border-r border-gray-400 py-64'></div>
                        <div className='col-span-11 flex flex-col justify-between p-6'>
                            <div className='mt-12 text-left space-y-8'>
                                <p 
                                    className="text-5xl mt-3 lg:text-6xl font-medium leading-none"
                                    id = 'author-quote'
                                >
                                    Author Quote
                                </p>
                                <p 
                                    className="text-m font-medium"
                                    id = 'author-name'
                                >
                                    Author Name
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// absolute inset-y-0 right-0