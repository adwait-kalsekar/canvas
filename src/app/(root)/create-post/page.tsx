import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import PostForm from '@/components/forms/PostForm';
import { fetchUser } from '@/lib/actions/user.actions';

async function CreatePost() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <>
      <h1 className="head-text">Create Post</h1>

      <PostForm userId={userInfo._id} />
    </>
  );
}

export default CreatePost;
