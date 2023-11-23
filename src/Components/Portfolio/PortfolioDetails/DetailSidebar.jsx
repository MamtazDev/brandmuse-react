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
                    <div class="project_details_content mb-4">
                        <div class=" d-flex justify-content-start align-items-center gap-4 mb_56">
                            <div class="project_image_div">
                                <img src={Clipboard} alt="img" />
                            </div>
                            <div class="project_title">
                                <h5 className='fs_24 titleColor fw_600'>Project Name</h5>
                                <p className='fs_18 grey'>{data.companyName}</p>
                            </div>
                        </div>

                        <div class=" d-flex justify-content-start align-items-center gap-4 mb_56">
                            <div class="project_image_div">
                                <img src={User3} alt="img" />
                            </div>
                            <div class="project_title">
                                <h5 className='fs_24 titleColor fw_600'>Our Client</h5>
                                <p className='fs_18 grey'>{data.clientName}</p>
                            </div>
                        </div>
                        <div class=" d-flex justify-content-start align-items-center gap-4 mb_56">
                            <div class="project_image_div">
                                <img src={Setting} alt="img" />
                            </div>
                            <div class="project_title">
                                <h5 className='fs_24 titleColor fw_600'>Category</h5>
                                <p className='fs_18 grey'>{data.category}</p>
                            </div>
                        </div>

                        <div class=" d-flex justify-content-start align-items-center gap-4 mb_56">
                            <div class="project_image_div">
                                <img src={Calander} alt="img" />
                            </div>
                            <div class="project_title">
                                <h5 className='fs_24 titleColor fw_600'>Date</h5>
                                <p className='fs_18 grey'>{data.date}</p>
                            </div>
                        </div>
                    </div>
                    <div class="project_details_content text-center d-flex flex-column justify-content-center align-items-center gap-4">
                        <div class="mx-auto text-center">
                            <button
                                class="download_btn d-flex align-items-center justify-content-center gap-2">Download
                                <img src={Download} alt="img" />
                            </button>
                        </div>
                        <p class="fs_20 grey">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit proin mi pellentesque
                            lorem turpis feugiat non sed sed sed
                            aliquam lectus sodales gravida turpis
                            maassa odio.
                        </p>

                        <div class="d-flex justify-content-between gap-4 mt_32">
                            <button class="pdf_btn d-flex align-items-center justify-content-center gap-2">Website
                                PDF
                                <img src={Download} alt="img" /></button>

                            <button class="pdf_btn d-flex align-items-center justify-content-center gap-2">Website
                                PDF
                                <img src={Download} alt="img" /></button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default DetailSidebar;