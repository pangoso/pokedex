import * as React from 'react';

export const HeadCell = (props) => {
  return (
    <div style={{
      fontWeight: 'bold',
      fontSize: '11pt'
    }}>
      {props.text}
    </div>
  )
}