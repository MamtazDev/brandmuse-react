import React from 'react';
import './PortfolioDetail.css'
import Download from '../../../assets/images/download.png'
import Clipboard from '../../../assets/images/clipboard.png'
import User3 from '../../../assets/images/user3.png'
import Setting from '../../../assets/images/setting.png'
import Calander from '../../../assets/images/calendar.png'

const DetailSidebar = ({ ProjectDetails }) => {
    return (
        <div>
            {ProjectDetails.map((data, index) =>
                <div key={index}>
                    <div className="project_details_content mb-4">
                        <div className=" d-flex justify-content-start align-items-center gap-4 mb_56">
                            <div className="project_image_div">
                                <img src={Clipboard} alt="img" />
                            </div>
                            <div className="project_title">
                                <h5 className='fs_24 titleColor fw_600'>Project Name</h5>
                                <p className='fs_18 grey'>{data.companyName}</p>
                            </div>
                        </div>

                        <div className=" d-flex justify-content-start align-items-center gap-4 mb_56">
                            <div className="project_image_div">
                                <img src={User3} alt="img" />
                            </div>
                            <div className="project_title">
                                <h5 className='fs_24 titleColor fw_600'>Our Client</h5>
                                <p className='fs_18 grey'>{data.clientName}</p>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-start align-items-center gap-4 mb_56">
                            <div className="project_image_div">
                                <img src={Setting} alt="img" />
                            </div>
                            <div className="project_title">
                                <h5 className='fs_24 titleColor fw_600'>Category</h5>
                                <p className='fs_18 grey'>{data.category}</p>
                            </div>
                        </div>

                        <div className=" d-flex justify-content-start align-items-center gap-4 mb_56">
                            <div className="project_image_div">
                                <img src={Calander} alt="img" />
                            </div>
                            <div className="project_title">
                                <h5 className='fs_24 titleColor fw_600'>Date</h5>
                                <p className='fs_18 grey'>{data.date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="project_details_content text-center d-flex flex-column justify-content-center align-items-center gap-4">
                        <div className="mx-auto text-center">
                            <a
                                href="/path-to-main-download-file.pdf"
                                download
                                className="download_btn d-flex align-items-center justify-content-center gap-2"
                            >
                                Download
                                <img src={Download} alt="img" />
                            </a>
                        </div>
                        <p className="fs_20 grey">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit proin mi pellentesque
                            lorem turpis feugiat non sed sed sed
                            aliquam lectus sodales gravida turpis
                            maassa odio.
                        </p>

                        <div className="d-flex justify-content-between gap-4 mt_32">
                            <a
                                href="/path-to-pdf1-file.pdf"
                                download
                                className="pdf_btn d-flex align-items-center justify-content-center gap-2"
                            >
                                Website PDF 1
                                <img src={Download} alt="img" />
                            </a>
                            <a
                                href="/path-to-pdf2-file.pdf"
                                download
                                className="pdf_btn d-flex align-items-center justify-content-center gap-2"
                            >
                                Website PDF 2
                                <img src={Download} alt="img" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailSidebar;
