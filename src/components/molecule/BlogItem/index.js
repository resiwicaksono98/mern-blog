import React from 'react'
import { useNavigate } from 'react-router'
import { Button, Gap } from '../..'
import './blogitem.scss'

const BlogItem = (props) => {
    const navigate = useNavigate()
    const { image, title, name, date, body, _id, onDelete } = props;
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="img-blog" />
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p className="edit" onClick={() => navigate(`/create-blog/${_id}`)}>Edit</p> | <p className="delete" onClick={() => onDelete(_id)} >Delete</p>
                    </div>

                </div>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => navigate(`/detail-blog/${props._id}`)} />
            </div>

        </div>
    )
}

export default BlogItem
