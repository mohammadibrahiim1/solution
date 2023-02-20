import React from 'react';
import './Card.css'

const Card = ({dt}) => {
    console.log(dt)
    return (
        <div>
            <div class="card mb-3 shadow" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={dt.image} class="image" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body text-start">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;