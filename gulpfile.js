var gulp    = require('gulp')
	, stylus  = require('gulp-stylus')
	, plumber = require('gulp-plumber')
	, nib     = require('nib')

gulp.task('stylus', function (){
	gulp.src('./themes/landscape/source/css/style.styl')
	.pipe(plumber())
	.pipe(stylus({
		use: nib()
	}))
	.pipe(gulp.dest('./public/css/'))
});
