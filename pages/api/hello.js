// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils/dbConnect";

const Property = require('../../models/property');

dbConnect();


export default function handler(req, res) {
  //res.status(200).json({ name: 'John Doe' })

  const property = new Property({
    area: '127 m²',
    bathrooms: '2',
    bedrooms: '3',
    description:'This is a beautfull house, from api/hello !!!',
    garages: '2',
    imagesNames: ['image1.jpg', 'image2.jpg'],
    price: 'R$ 127.000,00',
    type: 'casa'
})

// Here we have an warning:
// "API resolved without sending a response for /api/hello, this may result in stalled requests."

  property.save()
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json({ message: 'The property was not registered!!'})
  })

}
