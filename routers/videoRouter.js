import express from "express"
import routes from "../routes"

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req,res) => res.send("videos"))
videoRouter.get(routes.upload, (req,res) => res.send("upload"))
videoRouter.get(routes.videoDetail, (req,res) => res.send("video_detail"))
videoRouter.get(routes.editVideo, (req,res) => res.send("edit_video"))
videoRouter.get(routes.deleteVideo, (req,res) => res.send("delete_video"))


export default videoRouter;