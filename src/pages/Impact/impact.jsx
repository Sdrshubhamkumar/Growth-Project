import React from 'react'
import image from '../../../src/assets/impact.png'

function impact() {
  return (
    <div>
      <div className="header pt-5 text-center h-25 w-full bg-[#6a5f97]">
        <h1 className='text-4xl font-bold text-white'>Impact</h1>
      </div>
      <div className="text-container text-[#838383] p-10 pt-15">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ut optio eveniet cupiditate nesciunt atque, iure autem quasi beatae porro eos quas praesentium adipisci est soluta explicabo consequuntur assumenda deserunt, earum, corporis voluptate hic numquam! Facilis nulla, iste suscipit obcaecati minus molestias architecto non, inventore ipsam eaque vitae voluptatum praesentium deleniti hic neque? Quasi, aut iusto. Ut facilis repellendus ipsum blanditiis perspiciatis, ducimus mollitia nostrum quae quos corrupti molestias molestiae! Fugit provident, debitis deleniti praesentium harum eveniet mollitia voluptatem eligendi non! Quis molestias, ea magni vel asperiores perferendis, quas inventore, voluptate corporis ipsa neque omnis totam magnam veniam non nesciunt.</p>
        <p className='pt-5 pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ut optio eveniet cupiditate nesciunt atque, iure autem quasi beatae porro eos quas praesentium adipisci est soluta explicabo consequuntur assumenda deserunt, earum, corporis voluptate hic numquam! Facilis nulla, iste suscipit obcaecati minus molestias architecto non, inventore ipsam eaque vitae voluptatum praesentium deleniti hic neque? Quasi, aut iusto. Ut facilis repellendus ipsum blanditiis perspiciatis, ducimus mollitia nostrum quae quos corrupti molestias molestiae! Fugit provident, debitis deleniti praesentium harum eveniet mollitia voluptatem eligendi non! Quis molestias, ea magni vel asperiores perferendis, quas inventore, voluptate corporis ipsa neque omnis totam magnam veniam non nesciunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ut optio eveniet cupiditate nesciunt atque, iure autem quasi beatae porro eos quas praesentium adipisci est soluta explicabo consequuntur assumenda deserunt, earum, corporis voluptate hic numquam! Facilis nulla, iste suscipit obcaecati minus molestias architecto non, inventore ipsam eaque vitae voluptatum praesentium deleniti hic neque? Quasi, aut iusto. Ut facilis repellendus ipsum blanditiis perspiciatis, ducimus mollitia nostrum quae quos corrupti molestias molestiae! Fugit provident, debitis deleniti praesentium harum eveniet mollitia voluptatem eligendi non! Quis molestias, ea magni vel asperiores perferendis, quas inventore, voluptate corporis ipsa neque omnis totam magnam veniam non nesciunt.</p>
      </div>
      <div className="images grid grid-cols-1 gap-5 p-2 place-items-center sm:grid-cols-2 md:grid-cols-2">
        <img src={image} alt="image"/>
        <img src={image} alt="image"/>
        <img src={image} alt="image"/>
        <img src={image} alt="image"/>
        <img src={image} alt="image"/>
      </div>
    </div>
  )
}

export default impact