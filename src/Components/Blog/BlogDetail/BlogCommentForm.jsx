import React from 'react';
import '../BlogStyle.css'

const BlogCommentForm = () => {
    return (
        <div>
            <div class="mb_150 contact_form">
                <form>
                    <div class="two_color_text text-lg-start text-center">
                        <h3 class="fs_36 "><span>Leave a </span>Reply</h3>
                    </div>
                    <div class="form-group">
                        <label class="mt_32">Full Name</label>
                        <input type="text" class="form-control" placeholder="Your name here"/>
                    </div>

                    <div class="form-group">
                        <label class="mt_32">E-Mail</label>
                        <input type="email" class="form-control" placeholder="Your email here"/>
                    </div>

                    <div class="form-group">
                        <label class="mt_32">Your Comment</label>
                        <textarea class="form-control" rows="3" placeholder="Type your comment"
                            style={{ height: '256px' }}></textarea>
                    </div>
                    <button class="submit mt_32 white fs_18 fw_500">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BlogCommentForm;