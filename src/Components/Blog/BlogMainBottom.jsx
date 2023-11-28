import React from 'react';
import './BlogStyle.css'
import Right from '../../assets/images/rightdirection.png'
import Left from '../../assets/images/leftdir.png'

const BlogMainBottom = ({ members, amount, setPage, page }) => {

    const previousBtn = () => {
        setPage(page - 1);
      };
      const nextBtn = () => {
        pages.length - 1 !== page && setPage(page + 1);
      };
      let pages = [];
      for (let i = 0; i <= Math.ceil(members / amount); i++) {
        pages.push(i);
      }

    return (
        <div>
            <div className='d-flex justify-content-center gap-2 all_mb'>
                <button
                    style={{ opacity: page === 1 && "0" }}
                    className="page_link page_number"
                    onClick={previousBtn}
                    type=""
                    disabled={page === 1 && true}>
                    <span><img src={Left} alt="#" /></span>
                </button>

                {pages.map((index, pageItem) =>
                    pageItem > 0 ? (
                        <button
                            className={`page_link page_number ${page === pageItem ? 'active' : ''}`}
                            onClick={() => setPage(pageItem)}
                            key={index}
                        >
                            {pageItem}
                        </button>
                    ) : (
                        ""
                    )
                )}

                <button
                    style={{ opacity: page === pages.length - 1 && "0" }}
                    className="page_link right_arrow_bg page_number"
                    onClick={nextBtn}
                    disabled={page === pages.length - 1 && true}>
                    <span><img src={Right} alt="#" /></span>
                </button>
            </div>
        </div>
    );
};

export default BlogMainBottom;