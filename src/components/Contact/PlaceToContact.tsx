interface PlaceToContactType {
  contact : JSX.Element
  url : string 
  way : string
}

const PlaceToContact = ({contact, url, way} : PlaceToContactType) => {
  return(
    <div className="flex mb-5 items-center flex-row">
    <div className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-[#ece6cc]  ">
      {contact}
    </div>
    <div className="ml-5">
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2
          className="text-gray-900 font-medium text-xl hover:underline transition duration-300 transform 
          hover:scale-[1.02]  "
        >
          {way}
        </h2>
      </a>
    </div>
  </div>
  )
}

export default PlaceToContact