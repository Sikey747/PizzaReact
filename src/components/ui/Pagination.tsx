import { Pagination as PaginationHeadless } from 'react-headless-pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface PaginationProps {
  page: number;
  setPage: (val: number) => void;
  totalPages: number;
}

function Pagination({ page = 1, setPage, totalPages = 10 }: PaginationProps) {
  const handlePageChange = (pageValue: number) => {
    setPage(pageValue);
  };
  return (
    <PaginationHeadless
      totalPages={totalPages}
      edgePageCount={1}
      currentPage={page}
      middlePagesSiblingCount={1}
      truncableText="..."
      setCurrentPage={handlePageChange}
      className="pagination"
      truncableClassName=""
    >
      <PaginationHeadless.PrevButton className="pagination__arrow">
        <FaArrowLeft />
      </PaginationHeadless.PrevButton>

      <nav className="">
        <ul className="">
          <PaginationHeadless.PageButton
            activeClassName="pagination__active"
            inactiveClassName="pagination__noActive"
            className="pagination__item"
          />
        </ul>
      </nav>

      <PaginationHeadless.NextButton className="pagination__arrow">
        <FaArrowRight />
      </PaginationHeadless.NextButton>
    </PaginationHeadless>
  );
}

export default Pagination;
