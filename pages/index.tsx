import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor, builder } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  //console.log({ posts });



  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>Medium</span> is a place to write,read and connect</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis, voluptate rerum tenetur dignissimos alias optio culpa fugit necessitatibus officiis impedit provident repellendus reiciendis commodi a nam. Porro, laudantium velit?</h2>
        </div>

        <img
          className='hidden md:inline-flex h-32 lg:h-full'
          src="https://d15omoko64skxi.cloudfront.net/wp-content/uploads/2015/05/Medium-logo-dark500-300x300.png" alt="" />
      </div>


      {/* Posts here */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 p-2 md:p-6'>
        {
          posts.map((post) => (
            <Link href={`/post/${post.slug.current}`} key={post._id}>
              <div className='border rounded group cursor-pointer overflow-hidden'>
                <img
                  className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                  src={urlFor(post.mainImage).url()!} alt="" />
                <div className='flex justify-between p-5 bg-white'>
                  <div>
                    <p className='text-lg font-bold'>{post.title}</p>
                    <p>{post.description} by {post.author.name}</p>
                  </div>

                  <img className='h-12 w-12 rounded-full'
                    src={urlFor(post.author.image).url()!} alt="" />
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}



export const getServerSideProps = async () => {
  const query = `
*[_type == "post"]{
    _id,
    title,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }
`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts: posts
    }
  }
}