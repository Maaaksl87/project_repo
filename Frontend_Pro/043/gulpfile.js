import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import optipng from 'imagemin-optipng';

export default () => (
	gulp.src('images/*.png')
		.pipe(imagemin([
			optipng({optimizationLevel: 3}),
			pngquant({quality: [0.8, 0.9], speed: 1})
		], {
			verbose: true
		}))
		.pipe(gulp.dest('dist/images'))
);