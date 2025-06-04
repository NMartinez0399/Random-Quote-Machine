import { BookCover } from "./BookCover";
import { LeftSide } from "./LeftSide";

export const PageContainer = () => {

    return (
    <section className='py-4 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12'>
                <LeftSide />
                <BookCover />
            </div>
        </div>
    </section>);
}