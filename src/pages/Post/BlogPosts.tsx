// import { Suspense } from 'react';
// import { useLoaderData, defer, Await } from 'react-router-dom';

import Posts from '../../components/Post/index';
// import { GetSlowPosts } from '../util/api';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../GraphQL/PostQuery';
import { Post } from '../../models/PostConfig';
import { useEffect, useState } from 'react';

const BlogPostsPage = () => {
  const { data: projectsData, loading, error } = useQuery(GET_POSTS);
  const [members, setMembers] = useState<[]>([]);

  useEffect(() => {
    if (projectsData && projectsData.getPosts) {
      setMembers(projectsData.getPosts);
    }
  }, [projectsData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  // return projectsData.getPosts.map((post: Post) => {
  //   return (
  //     <Posts key={post.id}>
  //       <h3>{post.content}</h3>
  //       <br />
  //       <b>About this posts:</b>
  //       <br />
  //     </Posts>
  //   );
  // });
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={members} />
    </>
  );
};

export default BlogPostsPage;

// {
//   members.map((member: Member) => {
//     return (
//       <MemberAssignee
//         key={member.id}
//         memberId={parseInt(member.id)}
//         firstName={member.firstName}
//         lastName={member.lastName}
//         email={member.email}
//         assigneePicture={member.profilePicture}
//       />
//     );
//   });
// }
