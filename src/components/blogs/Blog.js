import React from 'react';
import '../../assets/style/Blog.css';

const Blog = (props) => {
    return (
        <div>
            <div className="blog-card">
                <div className="blog-card__head">
                    <img src={props.img} className="blog-card__img" alt="blog card" />
                    </div>
                    <div className="blog-card__body">
                <h3 className="blog-card__header">{props.title}</h3>
            <p className="blog-card__paragraph">{props.text}</p>
        </div>
    </div>
    </div>
    )
}

export default Blog;
