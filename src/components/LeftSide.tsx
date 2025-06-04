export const LeftSide = () => {

    return (
        <section className='relative grid gap-4 items-center justify-center px-4'>
            <div className='container max-w-4xl mx-auto'>
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
                    <button className='button-style'>Generate Quote</button>
                </div>
            </div>
        </section>
    );
}