import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { message } from 'antd'
import { Spiner2 } from '../../components/Spiner/Spiner2'

const UploadProduct = () => {

  const navigate = useNavigate()

  const [productName, setProductName] = useState('')
  const [productCollection, setProductCollection] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  //const [image, setImage] = useState(null)
  const [details, setDetails] = useState('')
  const [loading, setLoading] = useState(false)

/*   const product= {
    name: productName,
    collectionName: productCollection,
    price: price,
    details: details,
    images: file[0]
  }
 */
  //const readFile = (file) => {
    //const reader = new FileReader()
    
    //reader.onload = (e) => setImage(e.target.result)
    //reader.onload = (e) => console.log(e.target.result)
    
    //reader.readAsDataURL(file)
  //}

  const openMessage = () => {
    message.info({
      content: '¡Producto publicado exitosamente!',
      duration: 3,
    })
  }

  const handleChange = (e) => {
    //console.dir(e.target.files[0])
    //readFile(e.target.files[0])
    setFile(e.target.files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const product = new FormData()
    product.append('name', productName)
    product.append('collectionName', productCollection)
    product.append('price', price)
    product.append('details', details)
    product.append('image', file[0])
    
      try {
        setLoading(true)
        console.log('loading', loading)
        const dataProduct = await axios.post(`https://smokeshop-cannadev.herokuapp.com/api/products`, product,
        {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data"
          },
        })
        console.log('dataProduct', dataProduct.data)
        console.log('loading', loading)
        if (dataProduct) {
          navigate('/admin/manageProducts')
        }
      } catch (error) {
          console.error(error)
        }
        openMessage()
  }
  
  return (
    <div className='UploadProduct-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      {loading ? <Spiner2 /> : (localStorage.getItem('isAdmin') === 'true' ?
          (<>
            <h1 className='animate__animated animate__fadeInLeft'>Administra tu tienda: Publica un nuevo producto</h1>
            <div className='UploadProductForm-container'>
              <form className="UploadProduct-form" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="nameProduct">Nombre del producto:</label>
                <input id="nameProduct" type="nameProduct" name="nameProduct" onChange={(e) => setProductName(e.target.value)} value={productName} />
                </div>
                <div>
                <label htmlFor="collectionName">Colección:</label>
                <select id="collectionName" type="collectionName" name="collectionName" onChange={(e) => setProductCollection(e.target.value)} value={productCollection} >
                  <option value="" disabled selected>Selecciona una colección</option>
                  <option value="Vapos">Vapos</option>
                  <option value="Bongs">Bongs</option>
                  <option value="Grinders">Grinders</option>
                  <option value="Candelas">Candelas</option>
                  <option value="Pa' Enrolar">Pa' Enrolar</option>
                  <option value="Pipas">Pipas</option>
                  <option value="Para tu cultivo">Para tu cultivo</option>
                  <option value="Accesorios">Accesorios</option>
                  <option value="Productos CBD">Productos CBD</option>
                  <option value="Combos">Combos</option>
                </select>
                </div>
                <div>
                <label htmlFor="price">Precio:</label>
                <input id="price" type="price" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div>
                <label htmlFor="file">Foto:</label>
                <input id="file" type="file" accept="image/*" name="file" onChange={handleChange} />
                </div>
                <div>
                <label htmlFor="details">Descripción:</label>
                <input id="details" type="details" name="details" onChange={(e) => setDetails(e.target.value)} value={details} />
                </div>
                <button>Publicar producto</button>
              </form>
              </div>
          </>)
          :
          (navigate('*'))
  )}
    </div>
  )
}

export default UploadProduct

