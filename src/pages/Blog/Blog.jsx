import React from 'react'
import PublicationCard from '../../components/PublicationCard/PublicationCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Spiner } from '../../components/Spiner/Spiner'

const Blog = () => {

  const [publications, setPublications] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`https://smokeshop-backend.onrender.com/api/publications`
    ).then((res) => {
      const allPublications = res.data.data
      setPublications(allPublications)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  


  return (
    <div className='productsByCollection-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1>CannaBlog</h1>
      <div className='CollectionProductsCards-container'>
        {loading ? <Spiner /> : (publications.map((item) => {
          return(
            <PublicationCard
              publicationImage={item.image}
              publicationDate={item.date}
              publicationName={item.title}
              publicationParagraph={item.paragraph} />
          )}))}
      </div>
    </div>
  )
}

export default Blog