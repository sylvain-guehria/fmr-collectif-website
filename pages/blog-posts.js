import React from 'react';

import BlogPostsComponent from '../components/Blog/Blog-posts';
import { buildGuestOrLoggedInLayout } from '../components/Layouts/layoutBuilder';

const BlogPosts = ()=> {
  return <BlogPostsComponent />;
};

BlogPosts.getLayout = buildGuestOrLoggedInLayout();
export default BlogPosts;
