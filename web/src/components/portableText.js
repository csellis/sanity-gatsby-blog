import React from 'react'
import clientConfig from '../../client-config'
import BasePortableText from '@sanity/block-content-to-react'
import serializers from './serializers'



const PortableText = ({ blocks }) => {
  return (
    <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
  )
}

const NewPortableText = (props) => {

  const style = props.blocks.style || "normal";
  const blocks = props
  console.log(props)
  console.log(style)
  const elements = {
    h1: (
      <h1>
        {props.children}
      </h1>
    ),
    h2: (
      <h2 className="text-6xl text-blue-500">
        {props.children}
      </h2>
    ),
    h3: (
      <h3>
        {props.children}
      </h3>
    ),
    h4: (
      <h4>
        {props.children}
      </h4>
    ),
    h5: (
      <h5>
        {props.children}
      </h5>
    ),
    h6: (
      <h6>
        {props.children}
      </h6>
    ),
  };
  if (/^h\d/.test(style)) {
    return elements[style];
  }
  if (style == "normal") {
    return <p>{props.children}</p>;
  }

  return <BasePortableText blocks={blocks} serializers={serializers} />
}

export default PortableText
