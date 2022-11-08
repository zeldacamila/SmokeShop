import React from 'react'
import PublicationCard from '../../components/PublicationCard/PublicationCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {

  const [publications, setPublications] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/api/publications'
    ).then((res) => {
      const allPublications = res.data.data
      console.log('allPublications:', allPublications)  
      setPublications(allPublications)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
    })
  }, [])

  return (
    <div className='productsByCollection-container'>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1>CannaBlog</h1>
      <div className='CollectionProductsCards-container'>
        {(publications.map((item) => {
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