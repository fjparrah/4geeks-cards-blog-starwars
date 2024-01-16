import React from "react";

const Buttons = ({ setPage, currentPage }) => {
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="row">
      <div className="mt-3 d-flex flex-column flex-sm-row justify-content-center text-center">
        {/* <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Página Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleNextPage}
        >
          Página Siguiente
        </button> */}
      </div>
    </div>
  );
};

export default Buttons;
