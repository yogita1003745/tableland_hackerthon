import "./publish.css";
import hero from "../../../public/images/hero-image.png";
import Image from "next/image";

function Publish() {
  return (
    <div className="mx-auto bg-white h-screen">
      <div className="flex justify-start items-center">
        <div className="flex w-3/6 justify-center items-center">
          <form
            className="items-center flex w-96 h-96 flex-col rounded-lg"
            action=""
          >
            <p className="title">Publish Content</p>
            <input
              placeholder="Data Pack Name"
              className="data input"
              type="text"
            />
            <input
              placeholder="Quantity"
              className="data input"
              type="number"
            />
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex m-8 flex-col items-center justify-center w-11/12 h-20 border-none rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#996830] dark:text-[#996830]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-[#996830]">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <input
              placeholder="Encrypt Data Select Condition"
              className="data input"
              type="text"
            />
            <button className="btn" type="submit">
              Publish To Subscriers
            </button>
          </form>
        </div>

        <div className="absolute right-0 top-14 h-full w-3/6">
          {" "}
          <Image
            src={hero}
            alt="Get in touch"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}

export default Publish;
