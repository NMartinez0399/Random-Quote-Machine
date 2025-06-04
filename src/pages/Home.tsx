// import { BookCover } from "../components/BookCover";
// import { LeftSide } from "../components/LeftSide";
import { PageContainer } from "../components/PageContainer";
import { UpperRight } from "../components/UpperRight";

export const Home = () => {
    return (
        <div className="h-screen bg-background text-foreground overflow-x-hidden">
            {/* Header */}
            <UpperRight />

            {/* Quote Generator */}
            <PageContainer />
            {/* <LeftSide /> */}


            {/* Book Cover */}
            {/* <BookCover /> */}

            {/* Tweet */}

            {/* Footer */}
        </div>
    );
}