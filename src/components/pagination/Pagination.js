import React from "react";

const Pagination = ({ goToNextPage, gotToPrevPage }) => {
  return (
    <div>
      {gotToPrevPage && <button onClick={gotToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>nextPage</button>}
    </div>
  );
};

export default Pagination;
