import './publish.css'; 
import hero from "../../../public/images/hero-image.png"
import Image from 'next/image';

function Publish() {
  return (
    <div className="mx-auto bg-white h-screen">
     <div className="flex justify-start items-center">
      <div className='flex w-3/6 justify-center items-center'><form className="items-center flex w-96 h-96 flex-col rounded-lg" action="">
            <p className="title">Publish Content</p>
            <input placeholder="Data Pack Name" className="data input" type="text"/>
            <input placeholder="Quantity" className="data input" type="number"/>
            <input placeholder="Upload Data" className="data input" type="text"/>
            <input placeholder="Encrypt Data Select Condition" className="data input" type="text"/>
            <button className="btn" type="submit">Publish To Subscriers</button>
        </form></div>
        
        <div className='absolute right-0 top-14 h-full w-3/6'> <Image
                    src={hero}
                    alt="Get in touch"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                /></div>
    </div>
    
    </div>
  );
}

export default Publish;
