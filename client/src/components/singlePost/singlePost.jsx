import React from 'react'
import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
            </div>   
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Phunsuk</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aliquid maxime velit! Magni, dolores aut veritatis nulla ipsa nihil temporibus accusamus ex eveniet molestias at, fugit mollitia corrupti, debitis eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecati aspernatur, accusantium officia nobis culpa, dolores nostrum, quidem tempora ea ut veniam cupiditate? Cupiditate laudantium facere, molestiae quas voluptas deserunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem esse quis nulla magni tempora architecto, iste eaque sed voluptas cum hic odit fuga! Voluptate illum voluptates ratione exercitationem delectus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugiat tempora architecto saepe reprehenderit reiciendis quisquam odit tenetur eum culpa ut repudiandae ea voluptas numquam quasi, ab ratione dolorem beatae!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ipsa sed enim iusto! At corrupti suscipit rem aspernatur. Inventore magni similique id rem expedita dolorem fugiat voluptate quibusdam aspernatur cumque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod sunt, ea architecto perferendis maxime facere beatae est recusandae labore tempore ex. Inventore hic velit totam molestiae explicabo debitis doloremque.
            </p>
        </div> 
    </div>
  )
}
