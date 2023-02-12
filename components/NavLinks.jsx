import Link from 'next/link';
import React from 'react'

export default function NavLinks(props) {
  return (
    <div className="nav_links_comp">
      <div className='nav_unlisted'>
        <Link href={props.nav_href} className='link_style'>{props.children}</Link>
        <div className="nav_links_underline"></div>
      </div>
    </div>
  )
}
