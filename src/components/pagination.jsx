import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SETPAGES } from "../REDUX/actions";

export default function Pagination() {
  // current page
  const [currentPage, setCurrentPage] = useState(1);
  console.log("currentPage", currentPage);
  // total pages
  const totalPages = useSelector((store) => store.movies.total_pages);
  console.log("Total pages:", totalPages);
  // mapping the pages
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SETPAGES(currentPage));
  });

  const increment = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const decrement = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };


  return (
    <>
      <div
        onClick={decrement}
        className="bg-purple-100 border px-2 py-1 mr-3 rounded-lg cursor-pointer"
      >
        <LeftIcon/>
      </div>

      <div className="w-10/12 flex p-1 overflow-x-auto ">
        {pagesArray.map((page) => {
          return (
            <>
              <span
                onClick={() => setCurrentPage(page)}
                className={
                  page === currentPage
                    ? "bg-purple-400 mr-2 px-2 py-1 rounded cursor-pointer"
                    : "bg-purple-200 mr-2 px-2 py-1 rounded cursor-pointer"
                }
              >
                {page}
              </span>
            </>
          );
        })}
      </div>

      <div
        onClick={increment}
        className="bg-purple-100 border px-2 py-1 ml-3 rounded-lg cursor-pointer"
      >
        <RightIcon/>
      </div>
    </>
  );
}

const LeftIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="purple"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
        />
      </svg>
    </>
  );
};

const RightIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="purple"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
        />
      </svg>
    </>
  );
};
