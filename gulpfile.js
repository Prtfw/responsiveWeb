var     gulp = require("gulp"),
        watch = require("gulp-watch"),
        svgsprite = require("gulp-svg-sprite"),
        rename = require('gulp-rename'),
        del = require('del'),
        webpack = require('webpack'),


        
        //styles vars
        postcss = require('gulp-postcss'),
        autopre = require('autoprefixer'),
        cssvars = require("postcss-simple-vars"),
        nest = require("postcss-nested"),
        cssimp = require("postcss-import"),
        mixins = require("postcss-mixins"),
        hexrgba = require("postcss-hexrgba"),
        browsync = require("browser-sync").create();
        //end of styles vars
        
        
// gulp.task('default', function(){console.log("yay!")})


// gulp.task('html', function(){console.log("something html")})


gulp.task('styles', function(){

    return gulp.src('./app/styles/styles.css')//gulp.src is asynch, gotta let gulp known when completed.
    .pipe(postcss([cssimp, mixins, cssvars, hexrgba, autopre, nest]))
    .on('error', function(errInfo){
        this.emit('end');
        console.log(errInfo.toString())
    })
    .pipe(gulp.dest('./app/temp/styles')); 
})


gulp.task('cssInject', ['styles'] ,function(){
  return gulp.src('./app/temp/styles.css')
    .pipe(browsync.stream());
})


gulp.task('watch', function(){

    browsync.init({
    notify: false,
// You can use wildcards in here.
    server: {
            baseDir: 'app'
        },
// We can pick port 8081 or 8082, if you are more of a 2's kind of guy, go for the 8082. Highly recommended.
    port: 8082
    });
    watch(['./app/index.html', "!./app/**/*.js"], function(){browsync.reload()})
    watch(['./app/**/*.css', "!./app/temp/styles/**/*.css"], function(){gulp.start('cssInject')}) //styles/
    watch(['./app//**/*.js',"!./app/temp/**/*.js"], function(){gulp.start('jsRefresh')})
})

var config = {
    mode: {
            css:{
                render: {
                    css: {
                        template: './templates/sprite.css'
                    }
                }
        }
    }
}

gulp.task("makeSprite",['clearFolder'], function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
            .pipe(svgsprite(config))
            .pipe(gulp.dest('./app/temp/sprite/'))
            
})

gulp.task("copySprite",['makeSprite'], function(){
    return gulp.src('./app/temp/sprite/css/*.css')
            .pipe(rename("_sprite.css"))
            .pipe(gulp.dest('./app/styles'))
})

gulp.task("clearFolder", function(){
    return del('./app/temp/sprite')
})


gulp.task("svgs", ['clearFolder','makeSprite','copySprite'])


gulp.task('js', function(callback){
    webpack(require('./webpack.config.js'), function(err, stats){
        if (err){ console.log(err.toString())}
        console.log(stats.toString())
        callback()
    })
    
})

gulp.task('jsRefresh', ['js'], function(){browsync.reload(); console.log('done jsRefresh')})