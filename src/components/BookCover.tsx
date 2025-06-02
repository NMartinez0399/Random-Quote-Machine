export const BookCover = () => {
    return (
        <section className='flex flex-col items-center justify-center relative'>
            <div className='w-full mx-auto max-w-7xl relative'>
                <div className='max-w-sm me-8 bookCover'>
                    <div className='grid grid-cols-12 text-white'>
                        <div className='col-span-1 flex border-r border-gray-400 py-64'>
                            <div className='col-span-11 flex flex-col justify-between p-6'>
                                <div className='mt-4 ml-8 space-y-8'>
                                    <p className="text-xl mt-3 lg:text-2xl font-medium leading-none">
                                        Author Quote
                                    </p>
                                    <p className="text-xs">
                                        Author Name
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// absolute inset-y-0 right-0