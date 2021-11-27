import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../../components';
import './home.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';



const Home = () => {
    const [counter, setCounter] = useState(1)
    const navigate = useNavigate()
    const { dataBlog, page } = useSelector(state => state.homeReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDataBlog(counter))
    }, [counter, dispatch])

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
    }

    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    }

    const confirmDelete = (id) => {   
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Apakah anda yakin hapus post ini?.',
            buttons: [
              {
                label: 'Ya',
                onClick: () => {
                    axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                    .then(res => {
                        console.log('success delete: ', res.data);
                        dispatch(setDataBlog(counter))
                    })
                    .catch(err => {
                        console.log('err: ', err);
                    })
                }
              },
              {
                label: 'Tidak',
                onClick: () => console.log('user tidak setuju')
              }
            ]
          });
    }   

    return (
        <div className="home-wrapper">
            <Gap height={20} />
            <Button title="Create A New Blog" width={250} onClick={() => navigate('/create-blog')} />
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return <BlogItem
                        key={blog._id}
                        image={`http://localhost:4000/${blog.image}`}
                        title={blog.title}
                        body={blog.body}
                        name={blog.author.name}
                        date={blog.createdAt} 
                        _id={blog._id}
                        onDelete={confirmDelete}
                        />
                })}

            </div>
            <Gap height={20} />
            <div className="pagination">
                <Button title="Previous" onClick={previous} />
                <Gap width={20} />
                <p className="text-page">{page.currentPage} / {page.totalPage}</p>
                <Gap width={20} />
                <Button title="Next" onClick={next} />
            </div>
            <Gap height={20} />
        </div>
    );
}

export default Home;

