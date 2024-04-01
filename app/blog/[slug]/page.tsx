import Heading from '../../components/Heading';
import { getPostsFromFiles } from '../../lib/postsFromFile';
import Image from 'next/image'; 


interface BlogPageParams {
  slug: string;
}

export default async function BlogPage({ params }: { params: BlogPageParams }) {
  const { slug } = params;
  const post = await getPostsFromFiles(slug);

    return ( 
      <main>
        <div className="container m-auto">
          <Heading>
            {post.title}
            <div className="date text-xs">{post.date}</div>
          </Heading>
          <div className="row flex gap-6">
            <Image src={post.image} width="450" height="240" className='mb-3 rounded object-cover aspect-video' alt={post.title}></Image> 
            <article dangerouslySetInnerHTML={{__html: post.body }} className='prose max-w-screen-sm mt-3 pt-3 py-3'/>
          </div>
        </div>
      </main>
    )
}