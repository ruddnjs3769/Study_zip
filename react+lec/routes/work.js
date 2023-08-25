const express = require("express");
const router = express.Router();
const Work = require("../models/work");

// 할 일을 저장하는 API
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newWork = new Work({ title, description });
    const savedWork = await newWork.save();
    res.json(savedWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 오늘의 할 일을 조회하는 API
router.get("/today", async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const works = await Work.find({ createdAt: { $gte: today } });
    res.json(works);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 할 일을 수정하는 API
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedWork = await Work.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    res.json(updatedWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 할 일을 삭제하는 API
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Work.findByIdAndRemove(id);
    res.json({ message: "Work deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 할 일을 체크하는 API
router.post("/:id/check", async (req, res) => {
  try {
    const { id } = req.params;
    const checkedWork = await Work.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );
    res.json(checkedWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
