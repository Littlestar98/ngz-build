const program = require('commander');

const {
  buildAll,
  prodAll
} = require('./actions');

const createCommands = () => {

  program
  .command('buildAll')
  .description('打包所有新的项目 npm run build --xxx')
  .action(() => {
    buildAll( program.dest || 'src\\views', program.filename || 'all')
  })

  program
  .command('prodAll')
  .description('打包指定的项目项目 npm run prod xxx')
  .action(() => {
    prodAll( program.dest || 'src\\vueLib\\router', program.filename || 'all')
  })
}


module.exports = createCommands;
