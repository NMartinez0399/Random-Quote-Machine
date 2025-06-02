export const LeftSide = () => {

    return (
        <section className='relative min-h-screen flex items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto'>
                <h1 className='text-6xl font-medium text-primary'>
                    <span className='relative h-[1em] w-full overflow-hidden'>
                        <span className='absolute h-full animate-slide leading-none'>
                            Random
                        </span>
                        <span className='absolute h-full animate-slide leading-none'>
                            Quote
                        </span>
                    </span>
                    <span className='absolute h-full animate-slide leading-none'>
                        Generator
                    </span>
                </h1>
            </div>
        </section>
    );
}