import { useState } from "react";

const usePagination = (initPage: number, limitNum: number) => {
  const limit = limitNum;
  const [page, setPage] = useState(initPage);
  const offset = (page - 1) * limit;

  return { limit, page, setPage, offset };
};

export default usePagination;
