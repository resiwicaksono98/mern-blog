import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Gap, Link } from '../../components'
import './detailBlog.scss'

const DetailBlog = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log('error : ', err);
            })
    }, [])
    if (data.author) {
        return (
            <div className="detail-blog">
                <Gap height={10} />
                <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="thumb" />
                <p className="blog-title">{data.title}</p>
                <p className="blog-author">{data.author.name} - {data.createdAt} </p>
                <p className="blog-body">{data.body}</p>
                <Gap height={20} />
                <Link title="Back To Home" onClick={() => navigate('/')} textAlign='center' />
                <Gap height={30} />
            </div>
        )
    }

    return <p>Loading data ...</p>


}

export default (DetailBlog)
