import React from 'react';

import BlogPostComponent from '../components/GuestAndLoggedinPages/Blog-post';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const BlogPost = ()=> {
  return <BlogPostComponent />;
};

BlogPost.getLayout = buildGuestOrLoggedInLayout();
export default BlogPost;
