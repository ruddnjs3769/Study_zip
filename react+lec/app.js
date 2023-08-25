const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const workRouter = require("./routes/work");

// .env 파일에서 환경 변수 로드
dotenv.config();

// MongoDB 연결 설정
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});

// Express 앱 초기화
const app = express();

// 미들웨어 설정
app.use(express.json());

// 라우터 설정
app.use("/works", workRouter);

// 서버 시작
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
