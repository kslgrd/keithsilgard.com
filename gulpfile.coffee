'use strict'
gulp = require 'gulp'
plugins = require('gulp-load-plugins')()
coffee = require 'coffee-script'

###
Compress images
###
gulp.task 'images', ->
  gulp.src('images/**/*')
    .pipe plugins.size()
    .pipe(
      plugins.cache(
        plugins.imagemin
          optimizationLevel: 3
          progressive: true
          interlaced: true
      )
    )
    .pipe gulp.dest 'images/'
    .pipe plugins.size()

###
Compile less, and apply vendor prefixes automatically
###
gulp.task 'styles', ->
  gulp.src 'assets/stylesheets/*.less'
    .pipe plugins.less()
    .pipe plugins.autoprefixer 'last 1 version'
    .pipe plugins.minifyCss(keepBreaks:true)
    .pipe gulp.dest 'css/'
    .pipe plugins.size()

###
Compile coffeescript, and concatenate files
###
gulp.task 'scripts', ->
  coffeeFilter = plugins.filter '**/*.coffee'
  scripts = [
    'bower_components/jquery/dist/jquery.js'
    'bower_components/html5shiv/dist/html5shiv.js'
    'assets/javascripts/**/*.*'
  ]

  gulp.src scripts
    .pipe coffeeFilter
    .pipe plugins.coffee(bare: true).on 'error', plugins.util.log
    .pipe coffeeFilter.restore()
    .pipe plugins.concat 'main.built.js'
    .pipe gulp.dest 'js/'
    .pipe plugins.size()

###
Uglify them javascripts!
###
gulp.task 'uglify', ['scripts'], ->
  gulp.src 'js/main.built.js'
    .pipe plugins.size()
    .pipe plugins.uglify()
    .pipe plugins.concat 'main.min.js'
    .pipe gulp.dest 'js/'
    .pipe plugins.size()

gulp.task 'watch', ['scripts', 'images', 'styles'], ->
  gulp.watch 'assets/stylesheets/*.less', ['styles']
  gulp.watch 'assets/javascripts/**/*.*', ['scripts']
  gulp.watch 'assets/images/**/*.*', ['images']
