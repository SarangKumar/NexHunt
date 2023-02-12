import Link from 'next/link';
import React from 'react'
import styled from "styled-components";



export default function Card(props) {
  return (
    <div className='card_nav_unlisted' >

      <Link href= {`\challenges\\${props.que_no}`} className="card_link_style">
        <div className="card_comp">
          <div>
            <div className="card_ques_num">Question {props.qnumber}</div>
            <div className="card_ques_underline"></div>
            <div className="card_ques_desc">{props.title}</div>
            <div className="card_decoration"></div>
            <div className="card_decoration2"></div>
          </div>
        </div>
      </Link>
    </div>
  )
}
