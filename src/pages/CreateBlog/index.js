import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action/createBlogAction'
import './createBlog.scss'

const CreateBlog = () => {
    const { form, imgPreview } = useSelector(state => state.createBlogReducer)
    const { title, body } = form
    const dispatch = useDispatch()
    const [isUpdate, setIsUpdate] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            setIsUpdate(true)
            axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                const data = res.data.data
                console.log('res :' , data);
                dispatch(setForm('title',data.title))
                dispatch(setForm('body', data.body))
                dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
            })
            .catch(err => {
                console.log('err' , err);
            })
        }
    }, [])

    const onSubmit = () => {
        if(isUpdate){
            console.log('Update Data');
            updateToAPI(form,id)
        }else{
            console.log('Create Data');
            postToAPI(form)
        }
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        dispatch(setForm('image', file))
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }

    return (
        <div className="create-blog">
            <Gap height={20} />
            <Link title="Back To Home" onClick={() => navigate('/')} />
            <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
            <Gap height={20} />
            <div className="button-action">
                <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default CreateBlog
