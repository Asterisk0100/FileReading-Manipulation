//get file from DOM for one file
//const selectedFile = document.getElementById('input').files[0];

//get multiple files dynamically
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
//global fileList holder
let mainFilesList;

function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  mainFilesList = fileList;
  for(let i = 0; i < fileList.length; i++){
    console.log(fileList[i].name);
  }
//currently only pulls up a specific file name and changes it to upper case
console.log(mainFilesList[0].name +" changed to upper case is " + mainFilesList[0].name.toUpperCase());
}
