import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'

export const Pagination = () => {

  // Example items, to simulate fetching from another resources.
  const items = [...Array(100).keys()];
  
  const Items = ({ currentItems }) => {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }
  
  const PaginatedItems = ({ itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset)); 
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName='pagination justify-center' //ページネーションリンクの親要素のクラス名
          pageClassName='page-item' //各子要素(li要素)のクラス名
          pageLinkClassName='page-link rounded-full' //ページネーションのリンクのクラス名
          activeClassName='active' //今いるページ番号のクラス名。今いるページの番号だけ太字にしたりできます 
          activeLinkClassName="active"
          previousClassName='page-item' // '<'の親要素(li)のクラス名
          nextClassName='page-item' //'>'の親要素(li)のクラス名
          previousLinkClassName='previous-link'  //'<'のリンクのクラス名
          nextLinkClassName='next-link'　//'>'のリンクのクラス名
          disabledClassName='disabled-button d-none' //先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくするためのクラス
          breakClassName='page-item' // 上記の「…」のクラス名
          breakLinkClassName='page-link' // 「…」の中のリンクにつけるクラス
        />
      </>
    );
  }

  return (
    <>
      <PaginatedItems itemsPerPage={4} />
    </>
  )
}

