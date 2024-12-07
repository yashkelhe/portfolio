import React from "react";

function Box_project({ image_url, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center mt-12 ">
      <div className="w-96 h-72 bg-custom-gradient p-3 rounded-lg sm:w-[500px] sm:h-[300px] inline-flex  ">
        {" "}
        <img className="rounded-lg p-3 md:p-0" src={image_url} alt="" />
      </div>
      <div className="h-10 w-96 flex justify-between items-center mt-2  sm:w-[500px] p-5 ">
        <div className="text-white flex flex-col  ">
          <span className="">{title}</span>
          <span className="text-gray-500">{description}</span>
        </div>
        <div>
          <button
            type="button"
            class="text-white  hover:bg-blue-800  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box_project;
