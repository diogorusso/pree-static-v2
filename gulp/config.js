
//CONFIG MASTER

module.exports = {
  
  site: {
    
    baseDir: "_site/",
    

    dev: 'jekyll build --config _config.yml,_config_dev.yml',
    ghpages: 'jekyll build --config _config.yml,_config_prod-ghpages.yml',
    sftpDeploy: 'jekyll build --config _config.yml,_config_prod-sftp.yml',
    //works with JEKYLL watch - no realod when change config files - need disable watch.js jekyll rebuild
    //build: 'jekyll',shell.task(['jekyll build --watch --config _config.yml,_config_dev.yml',
    
  },

  watch: {
    jekyll: [
      '_config.yml',
      '_config_dev.yml',
      '_includes/**/*.*',
      '_layouts/**/*.*',
      '_posts/**/*.*',
      '_data/**/*.*',
      'lib/**/*.*',
      '*.html',
      '*.md',
    ],

    webpack: [
      'assets/**/*.*',
      'main.js'
    ]
  }

};
