import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'
import AuthorList from './author-list'

import styles from './blog-post.module.css'

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props

  console.log(_rawBody)
  const firstParagraph = _rawBody.find(block => {
    return block.style === "normal"
  })

  console.log(firstParagraph)
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-lg prose sm:prose-lg max-w-prose mx-auto mb-6">
        <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Writing</p>
        <h1 className="mt-2 mb-8 text-center leading-8 font-extrabold tracking-tight text-gray-800 sm:leading-10">{title}</h1>
        <div className="text-xl text-gray-500 leading-8">
          {firstParagraph && <PortableText blocks={firstParagraph} />}
        </div>
      </div>
      <div className="prose sm:prose-lg text-gray-600 mx-auto">
        {_rawBody && <PortableText blocks={_rawBody.slice(1)} />}
      </div>
    </div>

  )
}

export default BlogPost
