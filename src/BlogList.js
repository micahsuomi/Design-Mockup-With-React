import React from 'react';
import Blog from './Blog';
import blogData from './BlogData';
import './BlogList.css';

const BlogList = () => {

    const blogItems = blogData.map((item) => {
        return <Blog 
        key={item.id}
        img={item.img}
        title={item.title}
        text={item.text}/>
    })
        return (
            <div className="main-section-middle__container">
                <div className="main-section-middle-header-wrapper">
                    <span className="middle__container__header">Recent Work</span>
                        </div>
                            <div className="blog-cards__wrapper">
                                {blogItems}
                        </div>
                    </div>

        )
    }


export default BlogList
