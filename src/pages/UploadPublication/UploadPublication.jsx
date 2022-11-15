import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { message } from 'antd'
import { Spiner2 } from '../../components/Spiner/Spiner2'

const UploadPublication = () => {

  const navigate = useNavigate()

  const [postTitle, setPostTitle] = useState('')
  const [dateday, setDateDay] = useState('')
  const [datemonth, setDateMonth] = useState('')
  const [dateyear, setDateYear] = useState('')
  const [author, setAuthor] = useState('')
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  
 /*  const publication= {
    title: postTitle,
    date: `${dateyear}-${datemonth}-${dateday}`,
    body: content,
    image: file,
    author: author
  }
 */

  const openMessage = () => {
    message.info({
      content: '¡Post publicado exitosamente!',
      duration: 3,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const publication = new FormData()
    publication.append('title', postTitle)
    publication.append('date', `${dateyear}-${datemonth}-${dateday}`)
    publication.append('body', content)
    publication.append('image', file[0])
    publication.append('author', author)

      try {
        setLoading(true)
        console.log('loading', loading)
        const dataPublication = await axios.post(`http://localhost:8081/api/publications`, publication,
        {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data"
          },
        } )
        console.log('dataPublication', dataPublication)
        if (dataPublication) {
          navigate('/admin/manageBlog')
        }
      } catch (error) {
          console.error(error)
        }
      openMessage()
  }

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => console.log(e.target.result)
    reader.readAsDataURL(file)
  }
  
  const handleChange = (e) => {
    setFile(e.target.files)
  }

  return (
    <div className='UploadPublication-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
        {loading ? <Spiner2 /> : (localStorage.getItem('isAdmin') === 'true' ?
          (<>
            <h1 className='animate__animated animate__fadeInLeft'>Administra el CannaBlog: Publica una nueva noticia</h1>
            <div className='UploadPubForm-container'>
              <form className="UploadPublication-form" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="postTitle">Título del post:</label>
                <input id="postTitle" type="postTitle" name="postTitle" onChange={(e) => setPostTitle(e.target.value)} value={postTitle} />
                </div>
                <div>
                <label htmlFor="dateday">Día:</label>
                <select id="dateday" type="dateday" name="dateday" onChange={(e) => setDateDay(e.target.value)} value={dateday} >
                  <option value="" disabled selected>--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                </div>
                <div>
                <label htmlFor="datemonth">Mes:</label>
                <select id="datemonth" type="datemonth" name="datemonth" onChange={(e) => setDateMonth(e.target.value)} value={datemonth} >
                  <option value="" disabled selected>--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                </div>
                <div>
                <label htmlFor="dateyear">Año:</label>
                <select id="dateyear" type="dateyear" name="dateyear" onChange={(e) => setDateYear(e.target.value)} value={dateyear} >
                  <option value="" disabled selected>--</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
                </div>
                <div>
                <label id="authorlabel" htmlFor="author">Autor:</label>
                <input id="author" type="author" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
                </div>
                <div>
                <label htmlFor="file">Portada:</label>
                <input id="file" type="file" accept="image/*" name="file" onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="body">Contenido:</label>
                <input id="content" type="content" name="content" onChange={(e) => setContent(e.target.value)} value={content} />
                </div>
                <button>Publicar</button>
              </form>
            </div>

          </>)
          :
          (navigate('*'))
        )}
    </div>
  )
}

export default UploadPublication

