import gulp from 'gulp'
import serve from 'gulp-serve'
import jade from 'gulp-jade'
import babel from 'gulp-babel'
import rename from 'gulp-rename'
import gutil from 'gulp-util'
import webpack from 'webpack'
import webpackConfig from './webpack.config'

const paths = {
  js: {
    babel: './src/autosize-textarea.js',
    webpack: ['./src/autosize-textarea.js', './src/app.js']
  },
  jade: {
    main: './src/index.jade'
  }
}

gulp.task('serve', serve({
  port: '3741',
  root: '.'
}))

gulp.task('jade', () => {
  gulp.src(paths.jade.main)
    .pipe(jade({
      locals:{
        time: Date.now()
      }
    }))
    .pipe(gulp.dest('.'))
})

gulp.task('babel', () => {
  gulp.src(paths.js.babel)
    .pipe(babel({stage: 0}))
    .pipe(rename('index.js'))
    .pipe(gulp.dest('.'))
})

let devConfig = {...webpackConfig}
let devWebpack = webpack(devConfig)

gulp.task('webpack-dev', (callback) => {
  devWebpack.run((err, stats) => {
    if(err) throw new gutil.PluginError("webpack:build-dev", err)
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }))
    callback()
  })
})

gulp.task('watch-babel', () => {
  gulp.watch(paths.js.babel, ['babel'])
})

gulp.task('watch-webpack', () => {
  gulp.watch(paths.jade.main, ['jade'])
  gulp.watch(paths.js.webpack, ['webpack-dev'])
})

gulp.task('build', ['babel'])

gulp.task('dev', ['jade', 'webpack-dev', 'serve', 'watch-webpack'])

gulp.task('default', ['build', 'watch-babel'])