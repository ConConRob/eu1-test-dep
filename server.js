const express = require('express');
const path  = require('path');

const app =express();

//CRA works is, when webpack runs it creates a build folder 
//that contains the index.html and the bundle.js

const pathToIndexHtml = path.join(__dirname, 'build', 'index.html')
const pathToBuildFolder = path.join(__dirname, 'build')

// 2- allow static assests to be served off of this build folder
app.use(express.static(pathToBuildFolder));

app.get('/', (req,res) => {
  // 1- res.sendFile
  res.sendFile( pathToIndexHtml)
})

app.listen(process.env.PORT || 5000)