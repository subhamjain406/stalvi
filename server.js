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

var apiKey = "SG.6h2nPuMkSrWQtvov_";
apiKey += "N11PQ.";
apiKey += "ITRNQ0nampZZCIEMz-";
apiKey += "jdzI9S6CpCHb";
apiKey += "bOZo6XFJnZ57o";

app.post("/send", (req, res) => {
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
    .then((data) => res.redirect("/"))
    .catch((err) => console.log(err.response.body));
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "/")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server running"));
