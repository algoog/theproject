const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Gig = require("../models/gigModel");
const auth = require("../middlewares/auth");

// How to image storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + "-" + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
router.post("/create", [auth, upload.array("image", 4)], async (req, res) => {
  try {
    const img = req.files;
    let store = [];
    let object = {};
    for (let i = 0; i < img.length; i++) {
      object.image = img[i].path;
      store.push(object);
    }
    const gig = new Gig({
      title: req.body.title,
      description: req.body.description,
      role: req.body.role,
      user: req.body.user,
      ...(req.files && { images: store }),
    });
    const response = await gig.save();
    res.status(201).json(response);
  } catch (error) {
    res.json({ error: error });
  }
});
router.put(
  "/update/:id",
  [auth, upload.array("image", 4)],
  async (req, res) => {
    try {
      let gig = await Gig.findById({ _id: req.params.id });
      if (!gig) {
        res.json({ error: "Gig Not Found" });
      }
      // let store = gig.images;
      const img = req.files;
      let store = [];
      let object = {};
      for (let i = 0; i < img.length; i++) {
        object.image = img[i].path;
        store.push(object);
      }

      gig.title = req.body.title;
      gig.description = req.body.description;
      gig.role = req.body.role;
      gig.user = req.body.user;
      if (!img.length) {
        gig.images;
      } else {
        const img = req.files;
        let store = gig.images;
        let object = {};
        for (let i = 0; i < img.length; i++) {
          object.image = img[i].path;
          store.push(object);
        }
        gig.images = store;
      }

      const response = await gig.save();
      res.status(201).json(response);
    } catch (error) {
      res.json({ error: error });
    }
  }
);

router.get("/show", async (req, res) => {
  try {
    const document = await Gig.find();
    res.status(200).json(document);
  } catch (error) {
    res.json({ error: error });
  }
});
router.get("/show/:id", async (req, res) => {
  try {
    const document = await Gig.findById({ _id: req.params.id });
    res.status(200).json(document);
  } catch (error) {
    res.json({ error: error });
  }
});
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const document = await Gig.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json(document);
  } catch (error) {
    res.json({ error: error });
  }
});
module.exports = router;
