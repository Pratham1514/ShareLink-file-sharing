import File from "../models/file.js";

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    const API_URI = "http://localhost:8000";
    res.status(200).json({ path: `${API_URI}/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};
