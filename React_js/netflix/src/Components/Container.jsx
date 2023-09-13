import React from 'react'

const Container = (props) => {
  return (
    <div className="container mt-5">
        <div className='row'>
            <div className='col-12'>
                <div className='card1'>
                    <div>
                        <img src={props.img} className='card-img-top' style={{height:"14rem"}} alt='img'></img>
                    </div>
                    <p className='font-weight-bolder mt-3'>{props.movieName}</p>
                    <button className="button">Watch Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container
