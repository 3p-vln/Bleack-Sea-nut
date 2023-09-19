import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webocss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webocss(
            {
                webpClass: ".webp",
                noWebpClass: ".no-webp"
            }
        ))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist:["last 10 versions"],
            cascade: true
        }))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
}