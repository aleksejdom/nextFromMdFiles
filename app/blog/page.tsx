import Heading from '../components/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, getSlugs } from '../lib/postsFromFile';


interface BlogPageParams {
  slug: string;
}

export async function generateStaticParams({ params }: { params: BlogPageParams }) {
  const { slug } = params;
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug })); 
}

export default async function Blog() {
  const posts = await getPosts();
  return ( 
    <main className="flex min-h-screen flex-col items-center justify-between p-24 blog-page">
      <div className='d-flex justify-content-center fixed-bottom-text text-secondary bg-light'> 
        <Heading>Blog</Heading>  
        <ul className='flex flex-row gap-3 flex-wrap'> 
          {posts.map((post) => (
            <li className='border w-80 bg-white rounded shadow w-80 hover:shadow-xl' key={post.slug}>
              <Link href={`/blog/${post.slug}`} className='flex flex-col justify-center items-center'>
                <Image src={post.image} width="320" height="180" className='mb-2 rounded-t' alt={post.title}></Image>
                <h2 className='text-center py-1'>{post.title}</h2>
              </Link>
            </li>
          ))}  
        </ul>
      </div>
    </main>
  )
}