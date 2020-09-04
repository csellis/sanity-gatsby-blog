import React from 'react'
import Figure from './Figure'


const BlockRenderer = props => {
  const style = props?.node?.style || 'normal'

  const elements = {
    h1: (
      <h1 className="text-5xl font-bold">
        {props.children}
      </h1>
    ),
    h2: (
      <h2 className="text-3xl">
        {props.children}
      </h2>
    ),
    h3: (
      <h3 className="text-2xl">
        {props.children}
      </h3>
    ),
    h4: (
      <h4 className="text-xl">
        {props.children}
      </h4>
    ),
    h5: (
      <h5 className="text-lg">
        {props.children}
      </h5>
    ),
    h6: (
      <h6 className="text-base">
        {props.children}
      </h6>
    ),
  };
  if (/^h\d/.test(style)) {
    return elements[style];
  }
  if (style === "normal") {
    return <p>{props.children}</p>;
  }

  return style === 'blockquote'
    ? <blockquote className="">{props.children}</blockquote>
    : <p className="">{props.children}</p>


}

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    block: BlockRenderer
  }
}

export default serializers
