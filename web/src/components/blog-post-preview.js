import { format } from 'date-fns'
import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function BlogPostPreview(props) {
  // console.log(props)
  const author = props.authors[0].author
  console.log(author)
  return (
    <div className="flex flex-col rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl overflow-hidden">
      <div className="flex-shrink-0">
        <Link to={getBlogUrl(props.publishedAt, props.slug.current)} className="block">

          <img className="h-48 w-full object-cover" src={imageUrlFor(buildImageObj(props.mainImage)).url()} alt={props.mainImage.alt} />
        </Link>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            <Link to="/blog" className="hover:underline">
              Blog
            </Link>
          </p>
          <Link to={getBlogUrl(props.publishedAt, props.slug.current)} className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {props.title}
            </h3>
            {props._rawExcerpt && (
              <div className="mt-3 text-base leading-6 text-gray-500">
                <PortableText blocks={props._rawExcerpt} />
              </div>
            )}
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-10 w-10 rounded-full object-cover" src={imageUrlFor(buildImageObj(author.image)).url()} alt={author.image.alt} />
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm leading-5 font-medium text-gray-900">
              <Link to="/" className="hover:underline">
                Chris Ellis
              </Link>
            </p>
            <div className="flex text-sm leading-5 text-gray-500">
              <time dateTime={props.publishedAt}>
                {format(props.publishedAt, 'MMM Do, YYYY')}
              </time>
              {/* <span className="mx-1">
                &middot;
              </span>
              <span>
                6 min read
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


function OldBlogPostPreview(props) {
  return (


    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}></h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className={styles.date}></div>
      </div>
    </Link>
  )
}

export default BlogPostPreview
