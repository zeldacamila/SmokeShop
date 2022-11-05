import React from 'react'
import BrandsSlider from '../../components/BrandsSlider/Brands'
import ProductsGroupCard from '../../components/ProductsGroupCard/ProductsGroupCard'
import { Button, Modal } from 'antd'
import { useState } from 'react'

const Home = () => {
  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Para permitir tu ingreso a CannaDev verificaremos si eres mayor de edad. ¿Certificas que eres mayor de 18 años?');
  const handleOk = ({okButtonProps}) => {
    if (modalText === 'Lo sentimos, no puedes acceder a nuestro contenido si no eres mayor de edad.') {
      return (
        okButtonProps={disabled: true}
      )
    } else {
      setModalText('Accediendo a CannaDev...');
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 1000);
      }
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setModalText('Lo sentimos, no puedes acceder a nuestro contenido si no eres mayor de edad.');
  };

  return (
    <div className='Home-container'>
      <Modal
        title='BIENVENIDO A CANNADEV'
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        style={{
          top: 20,
          fontFamily:'Oswald'
        }}
        footer={[
          <Button style={{border: "2px solid #177333", color: '#177333'}} onClick={handleCancel}>
            NO
          </Button>,
          <Button style={{border: "2px solid #177333", color: '#177333' }} onClick={handleOk}>
            SÍ
          </Button>
        ]}
      >
        <p>{modalText}</p>
      </Modal>
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1>¿QUÉ ESTÁS BUSCANDO?</h1>
      <div className='Cards-container'>
        <ProductsGroupCard 
          cardImage='vapes.png'
          buttonTitle='VAPOS'
          buttonPath='/collections/vapes' />
        <ProductsGroupCard 
          cardImage='bong.png'
          buttonTitle='BONGS'
          buttonPath='/collections/bongs' />
        <ProductsGroupCard 
          cardImage='grinder.png'
          buttonTitle='GRINDERS'
          buttonPath='/collections/grinders' />
        <ProductsGroupCard 
          cardImage='lighter.png'
          buttonTitle='CANDELAS'
          buttonPath='/collections/lighters' />
        <ProductsGroupCard 
          cardImage='papers.png'
          buttonTitle="PA' ENROLAR"
          buttonPath='/collections/papers' />
        <ProductsGroupCard 
          cardImage='pipe.png'
          buttonTitle='PIPAS'
          buttonPath='/collections/pipes' />
        <ProductsGroupCard 
          cardImage='grow.png'
          buttonTitle='PARA TU CULTIVO'
          buttonPath='/collections/growing' />
        <ProductsGroupCard 
          cardImage='accesorios.png'
          buttonTitle='ACCESORIOS'
          buttonPath='/collections/accesories' />
        <ProductsGroupCard 
          cardImage='medicinal.png'
          buttonTitle='PRODUCTOS CBD'
          buttonPath='/collections/medicinal' />
        <ProductsGroupCard 
          cardImage='kit.png'
          buttonTitle='COMBOS'
          buttonPath='/collections/kits' />
      </div>
      <h1>NUESTRAS MARCAS ALIADAS</h1>
      <div className='Brands-container'>
        <BrandsSlider />
      </div>
      <h1>VISITA NUESTRO BLOG</h1>
      <div className='Blog-container'>

      </div>
    </div>
  )
}

export default Home