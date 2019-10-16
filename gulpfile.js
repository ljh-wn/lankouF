//获取gulp
const gulp=require("gulp");
// 获取gulp下的sass
const sass=require("gulp-sass");
//获取gulp下的压缩文件

// 将所有的html,css,js都要拷过去（copy）
gulp.task("copy", async ()=>{
	gulp.src("./**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\lankouF"));
})

//任务监听
gulp.task("watchall", async ()=>{
	gulp.watch("*.html", async ()=>{
       gulp.src("*.html")
       .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankouF"));
	});
	//监听sass下的所有文件
	gulp.watch("lankouSass/**/*", async ()=>{
		gulp.src("lankouSass/**/*")
		.pipe(sass())
		
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankouF\\css"));
	});
	gulp.watch("img/*.{jpg,png}",async ()=>{
		gulp.src("img/*.{jpg,png}")
	   .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankouF\\img"));
	});
	gulp.watch("js/*.js", async ()=>{
       gulp.src("js/*.js")
       .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankouF\\js"));
	});
	gulp.watch("*.php", async ()=>{
	   gulp.src("*.php")
	   .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankouF"));
	});
	gulp.watch("css/*.css", async ()=>{
	   gulp.src("css/*.css")
	   .pipe(gulp.dest("D:\\phpStudy\\WWW\\lankouF\\css"));
	});
	

}) 