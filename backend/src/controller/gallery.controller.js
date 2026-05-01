import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError';
import Gallery from '../models/gallery.model';


const addImage = asyncHandler(async(req,res)=>{

  const  {
    imageLable,
    category
  } = req.body

  const { image } = req.files

  if(!image) {
    throw new ApiError(400, "Image is required")
  }

  if(!imageLable || !category) {
    throw new ApiError(400, "Image lable and image category are required")
  }

  /*
      TODO : HANDLE IMAGE URL AND CLOUDINARY ON TESTING
  */

  const imageData = {
    imageLable,
    category,
    imageUrl
  }

  const createImage = await Gallery.create(imageData)

  if(!createImage) {
    throw new ApiError(400, "Image can't create")
  }

  return res.status(201).json(new ApiResponse(201, createImage, "add new image successfully"))
})

const deleteImage = asyncHandler(async(req,res)=>{

  const { imageId } = req.params

  const image = await Gallery.findById(imageId)

  if(!image) {
    throw new ApiError(404, "Image can't find")
  }

  await Gallery.findByIdAndDelete(imageId)

  return res.status(200).json(new ApiResponse(200, {}, "Image delete successfully"))
})


export {
  addImage,
  deleteImage
}
