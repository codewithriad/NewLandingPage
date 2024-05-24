

// eslint-disable-next-line react/prop-types
const Card = ({image,heading,description }) => {
  return (
    <>
        <div className="card bg-base-100 shadow-xl py-12">
            <figure>
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{heading}</h2>
              <p>{description}</p>
              
            </div>
        </div>
    </>
  )
}

export default Card