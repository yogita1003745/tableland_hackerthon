import hero from "../../public/images/hero-image.png"
import Image from 'next/image';

const Home = () => {
    return (
        <div>
            <div className="container mx-auto bg-white absolute h-3/6" style={{ maxWidth: '100%' }}>
                <div className="flex flex-col items-center justify-center bg-white h-full text-center">
                    <h1 className="font-display md:text-display-2xl text-display-lg font-eduTAS">
                        Make <span className="italic">your home</span> an ode to joy
                    </h1>
                    <p className="md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
                        We turn your empty house into a lovely home, making compact spaces
                        with space-saving furniture. Bringing your unique tastes into reality!
                    </p>
                </div>
            </div>

            <div className="bottom-0 absolute w-full h-3/6">
                <Image
                    src={hero}
                    alt="Get in touch"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%]"
                />
            </div>
        </div>
    );
}

export default Home;
