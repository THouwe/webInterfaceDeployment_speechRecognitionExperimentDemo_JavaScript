// LOAD MODULES
var express = require("express"),
    myModules = require("./scripts/myModules.js"),
    multer = require("multer"),
    body_parser = require("body-parser");
    // require("dotenv").config(),

var saveDropbox = myModules.saveDropbox;
var json2csv = myModules.json2csv;

// INSTANTIATE THE APP
var app = express();
const upload = multer();

// STATIC MIDDLEWARE
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/js'));
// app.use(express.static(__dirname + '/scripts'));
// app.use(fn:'/js', express.static(__dirname + '/js'));
// app.use(fn: '/scripts', express.static(__dirname + '/scripts'));
// app.use(fn: '/stimuli', express.static(__dirname + '/stimuli'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/stimuli', express.static(__dirname + '/stimuli'));
// app.use(body_parser.json());
// app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json({
  limit: '50mb'
}));
app.use(body_parser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: false
}));

// VIEW LOCATIONS
app.set("views", __dirname + '/public/views');
// app.engine( ext: "html", require("ejs").renderFile);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// ROUTING
app.get("/", function (request, response) {
  // var respID = response.query.r;
  response.render("index_AC.html")
});
app.get("/finish", function (request, response) {
  response.render("finish.html")
});
// app.get("/", function (request, response) {
//   response.send("saveData_DEMO.html" + request.query.r + " + " + request.query.c)
// });

app.post("/experiment-data", function(request,response) {
  // retrieve the data and convert json to csv
  DATA_CSV = json2csv(request.body);
  // // save the data
  var row = DATA_CSV.split("\n");
  // ID_DATE_index = row[0].split(",").indexOf('"ID_DATE"');
  // // ID_DATE_index = row[0].split(separator: ",").indexOf("ID_DATE");
  // ID_DATE = row[1].split(",")[ID_DATE_index];
  // // ID_DATE = row[1].split(separator: ",")[ID_DATE_index];
  // ID_DATE = ID_DATE.replace(/"/g, "");
  // // ID_DATE = ID_DATE.replace(searchValue: /"/g, replaceValue: "");
  // // filename = ID_DATE + "_DEMO.csv";

  var TODAY = new Date();
  var SEC = String(TODAY.getSeconds()).padStart(2, '0');
  var MN = String(TODAY.getMinutes()).padStart(2, '0');
  var HH = String(TODAY.getHours()).padStart(2, '0');
  var DD = String(TODAY.getDate()).padStart(2, '0');
  var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
  var YYYY = String(TODAY.getFullYear());
  var DATE = YYYY + MM + DD + "_" + HH + MN + SEC;

  ID_DATE = DATE;
  // console.log("ID_DATE = " + ID_DATE);

  var part_ID = request.body[0].part_ID;

  // filename = respID + "_" + ID_DATE + ".csv";
  filename_CSV = part_ID + "_" + ID_DATE + ".csv";
  saveDropbox(DATA_CSV, filename_CSV);
  // console.log(DATA_CSV);
  response.end();
})

// app.post('/recordings', upload.any(), (req, res) => {
//     //console.log('Files: ', req.files);
//     // var filename = req.files[0].originalname;
//     var TODAY = new Date();
//     var SEC = String(TODAY.getSeconds()).padStart(2, '0');
//     var MN = String(TODAY.getMinutes()).padStart(2, '0');
//     var HH = String(TODAY.getHours()).padStart(2, '0');
//     var DD = String(TODAY.getDate()).padStart(2, '0');
//     var MM = String(TODAY.getMonth() + 1).padStart(2, '0');
//     var YYYY = String(TODAY.getFullYear());
//     var DATE = YYYY + MM + DD + "_" + HH + MN + SEC;
//
//     ID_DATE = DATE;
//
//     var part_ID = JSON.stringify(req.files[1].buffer.toString());
//
//     // var filename = new Date().toISOString();
//     var filename_WAV = part_ID.slice(1, -1) + "_" + ID_DATE + '.wav';
//     console.log('Recording arrivato: ' + filename_WAV);
//     var recording = req.files[0].buffer;
//     saveDropbox(recording, filename_WAV)
// });

app.post('/recordings', upload.any(), (req, res) => {

    var file_ID = JSON.stringify(req.files[1].buffer.toString());

    var filename_WAV = file_ID.slice(1, -1) + '.wav';
    console.log('Filename recording: ' + filename_WAV);
    var recording = req.files[0].buffer;
    saveDropbox(recording, filename_WAV);
    res.end();
});


// START THE SERVER
// var server = app.listen(3000, function(){
var server = app.listen(process.env.PORT, function(){
    console.log("listening to port %d", server.address().port);
    // console.log(process.env)
});
