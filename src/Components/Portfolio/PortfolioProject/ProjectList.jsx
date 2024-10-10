import React, { useState } from 'react';
import './ProjectList.css';
import Arrow from '../../../assets/images/portfolioArrow.png';
import { Link } from 'react-router-dom';
import { projectDatas } from '../../../Utils/projectData';

const ProjectList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    const filteredProjects = projectDatas.filter(project => {
        if (selectedCategory === 'All') return true;
        return project.titlePro.toLowerCase().includes(selectedCategory.toLowerCase());
    });

    console.log("Filtered Projects: ", filteredProjects);

    return (
        <div>
            <div className="container all_mb">
                <div className="mb_56">
                    <h2 className="sectionHeader text-center inner_mb">
                        Some Of The<span className="txt_curve"> Projects</span><br /> We Have Done Well
                    </h2>
                    <div className='pro_btn mx-auto'>
                        <div className='all_portfolio_btn d-flex gap-4'>
                            {['All', 'UI/UX', 'Landing Page', 'Web Development', 'App Design', 'Finance'].map((category, index) => (
                                <button
                                    key={index}
                                    className={`portfolio_btn ${selectedCategory === category ? 'portfolio_btn_active' : ''} titleColor fs_18 fw_500`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row gy-3 ">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((prodata, index) => (
                            <div key={index} className="col-lg-6 mb_56">
                                <div className="portfolioBox trasitionTime">
                                    <div className="overflow-hidden fintech mb_36">
                                        <img className="img-fluid" src={prodata?.imgPro} alt="img" />
                                    </div>
                                    <p className='black fs_20'>{prodata?.titlePro}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="fs_48 titleColor">{prodata?.companyName}</h1>
                                        <div className="fitgoarrow trasitionTime">
                                            <Link to={`/portfolio-details/${prodata?.slug}`}>
                                                <img className="img-fluid" src={Arrow} alt="img" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">No projects found for this category.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
