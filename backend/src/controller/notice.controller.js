import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import Notice from '../models/notice.mode.js';
import ApiError from '../utils/ApiError';


const newNotice = asyncHandler(async(req,res)=>{

  const { title, category, content, date, attachmentUrl } = req.body

  const noticeData = {
      title,
      category,
      content,
      date
  }

  if(attachmentUrl) return noticeData.attachmentUrl = attachmentUrl

  const notice = await Notice.create(noticeData)

  if(!notice) {
    throw new ApiError(404, "Notice can't posted ")
  }


    return res.status(201).json(new ApiResponse(201, {}, "New Notice posted successfully"))
})

const updateNotice = asyncHandler(async(req,res)=>{

  const { noticeId } = req.params

  const updateData = { ...req.body };

  const notice = await Notice.findById(noticeId)

     if(!notice) {
        throw new ApiError(404, "Notice not found")
      }


    if (!updateData || Object.keys(updateData).length === 0) {
      throw new ApiError(400, "No data provided to update");
    }


  if (updateData.date) {
    const date = new Date(updateData.date);
    if (isNaN(startParsedDate.getTime())) {
      throw new ApiError(400, "Invalid date format. Use YYYY-MM-DD");
    }
    updateData.date = date;
  }

  const noticeUpdate =  await Notice.findByIdAndUpdate(
            noticeId,
    { $set: updateData },
    { new: true, runValidators: true }
      );

      if(!noticeUpdate) {
        throw new ApiError(404, "Notice not found")
      }

    return res.status(200).json(new ApiResponse(200, updatedNotice, "Notice update successfully"))
})

const getAllNotice = asyncHandler(async(req,res)=>{

    const allNotice = await Notice.find().lean()

    return res.status(200).json(new ApiResponse(200, allNotice, "Notice fetch Succesfully"))
})

const deleteNotice = asyncHandler(async(req,res)=>{

     const { noticeId } = req.params

     const notice = await Notice.findById(noticeId)

     if(!notice) {
        throw new ApiError(404, "Notice not found")
      }

      await Notice.findByIdAndDelete(notice._id)

  return res.status(200).json(new ApiResponse(200, {}, 'notice delete successfully'))
})


return {
  newNotice,
  updateNotice,
  getAllNotice,
  deleteNotice
}
