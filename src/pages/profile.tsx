import React from "react";
import work1 from "../../public/images/works/work-1.png";
import work2 from "../../public/images/works/work-2.png";
import work3 from "../../public/images/works/work-3.png";
import WorkItem from "./workItem";
import Eyebrow from "./eyebrow";

const Works = () => {
  const data = [
    {
      "image": work1,
      "title": "Villa Furnishing & Interior",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam."
    },
    {
      "image": work2,
      "title": "Luxury Hotel Renovation",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam."
    },
    {
      "image": work3,
      "title": "Residence Swimming Pool",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam."
    }
  ]
  return (
    <div>
      <div className="container mx-auto bg-white">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <Eyebrow label="RECENT WORKS" />
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4 font-eduTAS">
                  Some of <span className="italic">our crafts</span> made with
                  love
                </h3>
              </div>
              {data.map((item, index) => (
                <WorkItem
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {data.map((item, index) => (
                <WorkItem
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
