import React from 'react';
import './BlogStyle.css'
import Right from '../../assets/images/rightdirection.png'
import Left from '../../assets/images/leftdir.png'
import { Link } from 'react-router-dom';

const BlogMainBottom = ({ members, amount, setPage, page }) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(members / amount); i++) {
        pages.push(i);
    }
 
    const previousBtn = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
 
    const nextBtn = () => {
        if (page < pages.length) {
            setPage(page + 1);
        }
    };

    return (
        <div>
            <nav aria-label="Page navigation example m-auto">
                <ul className="pagination">
                    <li className="page-item">
                        <button
                            style={{ opacity: page === 1 && "0" }}
                            className="
                            page-link page_number"
                            onClick={previousBtn}
                            type=""
                            disabled={page === 1 && true}>
                            <span aria-hidden="true"><img src={Left} alt="" /></span>
                        </button>
                    </li>

                    {pages.map((pageNumber) => (
                        <li className="page-item" key={pageNumber}>
                            <a
                                type="button"
                                to="#"
                                className={`page-link page_number ${page === pageNumber ? 'active' : ''}`}
                                onClick={() => setPage(pageNumber)}
                            >
                                {pageNumber}
                            </a>
                        </li>
                    ))}

                    {pages.map((index, pageItem) =>
                        pageItem > 0 ? (
                            <a
                                // style={{ border: page === pageItem && "1px solid #666" }}
                                className={`page-link page_number ${page === pageItem ? 'active' : ''}`}
                                onClick={() => setPage(pageItem)}
                                key={index}
                                type="button"
                            >
                                {pageItem}
                            </a>
                        ) : (
                            ""
                        )
                    )}

                    <li className="page-item">

                        <a 
                            style={{ opacity: page === pages.length - 1 && "0" }}
                            className="page-link right_arrow_bg"
                            onClick={nextBtn}
                            type="button"
                            disabled={page === pages.length - 1 && true}>
                            <span aria-hidden="true"><img src={Right} alt="" /></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BlogMainBottom;