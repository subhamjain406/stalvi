const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const app = express();

//body parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "500mb",
    parameterLimit: 10000000000,
  })
);
app.use(
  bodyParser.json({
    extended: false,
    limit: "50mb",
  })
);

app.use(cors());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "http://stalvi.in");
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append(
    "Access-Control-Allow-Headers",
    "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.append("Access-Control-Allow-Credentials", true);
  next();
});

var apiKey = "SG.6h2nPuMkSrWQtvov_";
apiKey += "N11PQ.";
apiKey += "ITRNQ0nampZZCIEMz-";
apiKey += "jdzI9S6CpCHb";
apiKey += "bOZo6XFJnZ57o";

app.post("/send", (req, res) => {
  console.log("enter send");
  const output = `
  <ul>
  <li> name : ${req.body.first_name} ${req.body.last_name}</li>
  <li> email : ${req.body.email}</li>
  </ul>
  <p>${req.body.message}</p>
  `;
  sgMail.setApiKey(apiKey);
  const msg = {
    to: "info@stalvi.in",
    from: "info@stalvi.in",
    subject: req.body.subject,
    html: output,
  };
  sgMail
    .send(msg)
    .then((data) => {
      console.log(data);
      res.redirect("/");
    })
    .catch((err) => console.log(err.response.body));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../privacy.html"));
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server running"));
