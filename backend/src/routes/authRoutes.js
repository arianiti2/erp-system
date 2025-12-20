const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { loginUser, registerUser, updateAvatar } = require("../controllers/authController");
const {protect} = require('../middlewares/authMiddleware');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/avatars/";
    console.log("req", req.user, req.body);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `user-${req.user._id}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only images (jpeg, jpg, png) are allowed"));
    }
  },
});


router.post("/register", registerUser);
router.post("/login", loginUser);

router.put("/avatar", protect, upload.single("avatar"), updateAvatar);

module.exports = router;