import path from "path";
import express from "express";
import  {create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import morgan from "morgan"


const app = express();

// settings
//app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
// routes
app.use(indexRoutes);

//state public
app.use(express.static(path.join(__dirname, "public")));

// 

export default app;