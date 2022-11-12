import React from 'react'
import { VscChevronRight } from "react-icons/vsc";

const PublicationCard = ({publicationImage, publicationDate, publicationName, publicationParagraph}) => {

  const [date, restofdate] = publicationDate.split('T')
  const [year, month, day] = date.split('-')
  const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  let monthName = months[month-1]

  const handleClickRead = () => {

  }

  return (
    <div className='PublicationCard-container'>
      <a href={`blog/${publicationName}`} className='linkPublication'>
          <div className='publicationCardImg-container'>
            <img className='publicationImage'src={publicationImage} alt='' />
          </div>
          <p className='publicationDate'>{day} de {monthName} de {year}</p>
          <p className='publicationName'>{publicationName}</p>
          <p className='publicationParagraph'>{publicationParagraph}</p>
          <p>Continuar leyendo <VscChevronRight /></p>
      </a>     
    </div>
  )
}

export default PublicationCard