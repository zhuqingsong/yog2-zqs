module.exports = function(router){
    // you can add app common logic here
    // router.use(function(req, res, next){
    // });

    // also you can add custom action
    // require /spa/some/hefangshi
    // router.get('/some/:user', router.action('api'));

    // or write action directly
    // router.get('/some/:user', function(req, res){});

    // a restful api example
    // router.route('/book')
    //     // PUT /home/book
    //     .put(router.action('book').put)
    //     // GET /home/book
    //     .get(router.action('book'));
    //
/*        router.route('/book/:id')
        // GET /home/book/1
        .get(router.action('book').get)
        // DELETE /home/book/1
        .delete(router.action('book').delete);*/
    router.route('/').get(router.action('index'));

    router.route('/getindex').get(router.action('index').getIndex);

    router.route('/getIndexJson').post(router.action('index').getIndexJson);

    router.route('/user').get(router.action('uCenter'));

    router.route('/allbook').get(router.action('book'));

    router.route('/course').get(router.action('openCourse'));

    router.route('/course/detail/:kid/:lsid/:kcid').get(router.action('openCourse').courseDetail);

    router.route('/course/buy').get(router.action('openCourse').buyCourse);

    router.route('/course/active').get(router.action('openCourse').activeCourse);

    // pc
    router.route('/pc/index').get(router.action('pcindex'));

    router.route('/mShare/index').get(router.action('mShare'));

    router.route('/mShare/getSt').get(router.action('mShare').getSt);

    router.route('/mShare/updateCode').post(router.action('mShare').updateCode);


    router.route('/back/upload').post(router.action('back/index').upload );

    router.route('/back/uploadImg').post(router.action('back/index').uploadImg );

    router.route('/back/up').post(router.action('back/index').up );

    router.route('/back/upAudio').post(router.action('back/index').upAudio );
    //后端管理系统开发

    router.route('/back/index').post(router.action('back/index'));

    router.route('/back/login').post(router.action('back/login'));

     router.route('/back/loginIn').post(router.action('back/login').loginIn);

    router.route('/back/main').get(router.action('back/index').main );

    router.route('/back/teach/list').get(router.action('back/teacher').list );

    router.route('/back/teach/listJson').get(router.action('back/teacher').listJson );

    router.route('/back/teach/del').post(router.action('back/teacher').listDel );

    router.route('/back/teach/teachEdit').get(router.action('back/teacher').teachEdit );

    router.route('/back/teach/teachAdd').post(router.action('back/teacher').teachAdd );


    //课程信息
    router.route('/back/course/list').get(router.action('back/course').list );

    router.route('/back/course/listJson').get(router.action('back/course').listJson );

    router.route('/back/course/del').post(router.action('back/course').listDel );

    router.route('/back/course/courseAdd').post(router.action('back/course').courseAdd );


    // 添加音频

    router.route('/back/course/addAudio').get(router.action('back/course').uploadAudio );

    router.route('/back/course/subAudio').post(router.action('back/course').subAudio );


    // 音频播放

    router.route('/course/play').get(router.action('openCourse').play );


    router.route('/course/playlist').post(router.action('openCourse').playlist );


    /*用户管理*/

     router.route('/back/user/index').get(router.action('back/user'));

     router.route('/back/user/listJson').get(router.action('back/user').listJson);

     router.route('/back/user/listDel').get(router.action('back/user').listDel);

     router.route('/back/user/userkcUpdate').post(router.action('back/user').userkcUpdate);
     
};
