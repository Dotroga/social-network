import React from 'react';
import s from "./Users.module.css";

type PaginationProps = {
  pages: number[]
  currentPage: number
  callBack: (p: number)=>void
}

const Pagination: React.FC<PaginationProps>  = (props) => {
  const {pages, currentPage, callBack} = props
  return (
    <div>
      {pages.map((p, i) =>
        <span
          key={i}
          className={currentPage === p ? s.activePage : s.page}
          onClick={() => callBack(p)}>
         {p}
       </span>)}
    </div>
  );
};

export default Pagination;