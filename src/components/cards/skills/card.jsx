import React from 'react';

const card = props => {
  return (
    <div class="col s12 m6 l3 center-align">
      <div class="card z-depth-5">
        <div class="card-content">
          <i className='title'>{props.title}</i>
          <p className='info'>{props.info}</p>
        </div>

      </div>
    </div>

  )
}

export default card;