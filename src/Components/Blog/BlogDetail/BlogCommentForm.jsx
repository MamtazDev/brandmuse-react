import React from 'react';
import '../BlogStyle.css'

const BlogCommentForm = () => {
    return (
        <div>
            <div className="mb_150 contact_form">
                <form>
                    <div className="two_color_text text-lg-start text-center mb_64">
                        <h3><span>Leave a </span>Reply</h3>
                    </div>
                    <div className="form-group">
                        <label className="mt_32">Full Name</label>
                        <input type="text" className="form-control" placeholder="Your name here"/>
                    </div>

                    <div className="form-group">
                        <label className="mt_32">E-Mail</label>
                        <input type="email" className="form-control" placeholder="Your email here"/>
                    </div>

                    <div className="form-group">
                        <label className="mt_32">Your Comment</label>
                        <textarea className="form-control blogarea" rows="3" placeholder="Type your comment"
                            style={{ height: '256px' }}></textarea>
                    </div>
                    <button className="submit mt_32 white fs_18 fw_500">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BlogCommentForm;