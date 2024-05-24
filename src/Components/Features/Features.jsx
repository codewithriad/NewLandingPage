/* eslint-disable react/prop-types */

import tea1 from '../../assets/images/tea-1.png'
import tea2 from '../../assets/images/tea-2.png'
import tea3 from '../../assets/images/tea-3.png'
import tea4 from '../../assets/images/tea-4.png'
import Card from "../Card/Card"
import Container from '../Container'


const Features = () => {
  return (

      <Container>
        <div className="mx-60 text-center mt-20">
          <h1 className="text-4xl font-bold mb-4">Our Featured Product</h1>
          <p className='my-4'>There are many variations of passages of Lorem Ipsumavailable, but the majority have suffered alteration in someform, by injected humour, or randomised words which don'tlook even slightly believable. </p>
        </div>
        <div className="flex justify-between w-full">
          <Card image={tea1} heading={"Green Tea"} description={"Creamer could be replaced by fresh milk"} />
          <Card image={tea2} heading={"Milk Tea"} description={"Creamer could be replaced by fresh milk"} />
          <Card image={tea3} heading={"Black Tea"} description={"Creamer could be replaced by fresh milk"} />
          <Card image={tea4} heading={"Lemon Tea"} description={"Creamer could be replaced by fresh milk"} />
        </div>
      </Container>
      
   
  )
}

export default Features