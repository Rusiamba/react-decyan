import React from 'react'
import ListItem from '../ListItem/ListItem'
import Link from '../Link/Link'

//Компонент LinkedListItem отвечает за отображение списка с ссылкой

function LinkedListItem(props) {
  return (
    <ListItem className='' {...props} style={props.style}>
      <Link href={props.href}>{props.children}</Link>
    </ListItem>
  )
}

export default LinkedListItem