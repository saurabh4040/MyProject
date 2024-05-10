import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
dotenv.config();

const users = [{}];

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined`);
    socket.broadcast.emit('userJoined', { user: "Admin", message: `${users[socket.id]} has joined` });
    socket.emit('welcome', { user: "Admin", message: `welcome to the chat, ${users[socket.id]}` });
  })


  socket.on("message", ({message, id})=> {
    io.emit('sendMessage', {user: users[id], message, id});
  })




  socket.on("disconnect", () => {
    socket.broadcast.emit("leave", {user: "Admin",message:`${users[socket.id]} User has left`});
    console.log("User left");
  })
})



server.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});


app.get("/testing", (req, res) => {
  res.send("Testing");
})

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();

export default app;
