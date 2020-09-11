import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-list.module.css'

function BlogPostPreviewGrid(props) {
  return (
    <>
      <div className="relative bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-gray-100 h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              {props.title}
            </h2>
            {/* <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p> */}
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {props.nodes &&
              props.nodes.map(node => (
                <BlogPostPreview key={node.id} {...node} isInList />
              ))}
          </div>
        </div>
      </div>

      <div className={styles.root}>
        <ul className={styles.grid}>
        </ul>
        {props.browseMoreHref && (
          <div className={styles.browseMoreNav}>
            <Link to={props.browseMoreHref}>Browse more</Link>
          </div>
        )}
      </div>
    </>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
