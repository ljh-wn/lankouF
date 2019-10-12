//获取gulp
const gulp=require("gulp");
// 获取gulp下的sass
const sass=require("gulp-sass");
//获取gulp下的压缩文件
const minfyCSS=require("gulp-minify-css");
// 将所有的html,css,js都要拷过去（copy）
gulp.task("copy", async ()=>{
	gulp.src("./**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\lankou"));
})

//任务监听
gulp.task("watchall", async ()=>{
	gulp.watch("*.html", async ()=>{
       gulp.src("*.html")
       .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankou"));
	});
	//监听sass下的所有文件
	gulp.watch("lankouSass/**/*", async ()=>{
		gulp.src("lankouSass/**/*")
		.pipe(sass())
		.pipe(minfyCSS())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankou\\css"));
	});
	gulp.watch("img/*.{jpg,png}",async ()=>{
		gulp.src("img/*.{jpg,png}")
	   .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankou\\img"));
	});
	gulp.watch("js/*.js", async ()=>{
       gulp.src("*.js")
       .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankou\\js"));
	});
	

}) 