const program = require('commander');

const helpOptions = () => {
  // 增加自己的options
  program.option('-w --why', 'a why cli');
  program.option('-d --dest <dest>', '作用于文件夹项目打包, 例如: -d src/view')
  program.option('-f --filename <filename>', '输入项目名打包 , 例如: -f xxx,xxx,xxx')

  program.on('--help', function () {
    console.log("");
    console.log("Other:")
    console.log("  other options~");
  })
}

module.exports = helpOptions;

// 1.Buffer
// 2.理论: 事件循环(浏览器/Node)
