const path = require('path');
const fs = require('fs');

const { commandSpawn } = require('../utils/terminal');

const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';

//遍历打包所有项目
const buildAll = async (project,filename) => {
  console.log("正在打包")
  console.log(filename)
  const pathFile = path.resolve(process.cwd(), project)
  let files = []
  let fileList = fs.readdirSync(pathFile)
  let type = 1
  if(filename === 'all'){
    files = fileList
  }else{
    files = filename.split(' ')
    files.forEach((item)=>{
      if(fileList.indexOf(item) == -1){
        console.log(item+'项目不存在，请重新输入')
        type = -1
      }
    })
  }
  if(type === 1){
    for(item of files){
      await commandSpawn(command, ['run','build',`--${item}`])
      console.log(`
      ${item}   打包成功
      `)
    }
    console.log("全部打包成功")
  }
}

//遍历打包所有项目
const prodAll =async (project,filename) => {
  console.log("正在打包")
  const pathFile = path.resolve(process.cwd(), project)
  let files = []
  let fileList = fs.readdirSync(pathFile)
  let type = 1
  fileList = fileList.map(item =>{
    return item.replace('.js','')
  })
  if(filename === 'all'){
    files = fileList
  }else{
    files = filename.split(' ')
    files.forEach((item)=>{
      if(fileList.indexOf(item) == -1){
        console.log(item+'项目不存在，请重新输入')
        type = -1
      }
    })
  }
  if(type === 1){
    for(item of files){
      await commandSpawn(command, ['run','prod',`${item}`])
      console.log(`
      ${item}   打包成功
      `)
    }
    console.log("全部打包成功")
  }
}
module.exports = {
  buildAll,
  prodAll
}