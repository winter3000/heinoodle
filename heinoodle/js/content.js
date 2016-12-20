/**
 * Created by hxsd on 2016/12/7.
 */
$(function(){

    /*-----------------------index页面----------------------------------*/
    //鼠标滑过3d旋转--------------------------
    $("#min .yuan li").on("mouseover",function(){
        $(this).addClass("foodTitleMove").siblings().removeClass("foodTitleMove");
    });
    food('#min');

    /*-----------------------food页面----------------------------------*/
// 到顶部按钮点击事件===========================
    $('.goToTop').click(function(){
        $('html,body').animate({scrollTop: '0px'},1500);
        return false;
    });
// 美食系列标题导航牌动效===========================
    //鼠标滑过3d旋转--------------------------
    $("#food .main-page1 li").on("mouseover",function(){
        $(this).addClass("foodTitleMove").siblings().removeClass("foodTitleMove");
    });
    //鼠标点击滑至目标区--------------------------
    $("#food .main-page1 li").on("click",function(){
        var index=$(this).index();//获取点击索引号
        var foodPage2Top= $("#food .main-page2")[index].offsetTop;//获取滑动距离
        $('html,body').animate({scrollTop: foodPage2Top+'px'},1500);//滑动

    });

    food('#food');
    function food(foodid){

        // 美食系列左右按钮点击事件===========================
        //添加ul内容
        $(foodid).find('.mixlistbox ul').each(function(){
            var ulInner=$(this).html()+$(this).html();
            $(this).append(ulInner);
        });
        //设置ul宽度
        $(foodid).find('.mixlistbox').each(function(){
            var w=$(this).find('li').length;
            $(this).find('ul').css('width',w*212);
        });
        //前一个按钮点击事件-------------------------
        $(foodid).find('.prebtn').on("click",function(){
            var ulobj=$(this).parent().find('ul');//找到对应ul
            var ulobjL=parseInt(ulobj.css('left'));//查询该ul的left
            var starL= -1060;
            setTimeout(function(){
                if(-ulobjL<=parseInt(ulobj.css('width'))*2/3-212){
                    ulobj.finish().animate({left:(ulobjL-212)+'px'},1000);
                }else{
                    ulobj.css('left',starL+'px');
                }
            },50);
        });
        //后一个按钮点击事件--------------------
        $(foodid).find('.nextbtn').on("click",function(){
            var ulobj=$(this).parent().find('ul');//找到对应ul
            var ulobjL=parseInt(ulobj.css('left'));//查询该ul的left
            var starL= -1060;
            setTimeout(function(){
                if(ulobjL<0){
                    ulobj.finish().animate({left:(ulobjL+212)+'px'},1000);
                }else{
                    ulobj.css('left',starL+'px');
                }
            },50);
        });
// 美食系列列表鼠标移入事件===========================
        $(foodid).find('.main-page2-mixlist .img').each(function(){
            $(this).on("mouseover",function(){
                $(this).parent().find('.txt h4')
                    .css({'color':'#9d1717','transform':'scale(1.1)'})
            });
            $(this).on("mouseout",function(){
                $(this).parent().find('.txt h4')
                    .css({'color':'#000','transform':'scale(1)'});
            })
        });
    }




    /*-----------------------busProce页面----------------------------------*/

    // 到顶部按钮点击事件===========================
    $('.goToTop').click(function(){
        $('html,body').animate({scrollTop: '0px'},50);
        return false;
    });
// 招商流程侧边导航按钮点击事件===========================
    $("#busProce .main-right-list li").click(function(){
        //按钮变色
        $(this).addClass("action").siblings().removeClass("action");
        //不同按钮点击事件
        var index=$(this).index();
        var chosePage=$("#busProce .main-left-page")[index-1];
        var maxTop=$("#busProce .main-left-page")[2].offsetTop;
        switch (index-1){
            case 0:
                $('html,body').animate({scrollTop: chosePage.offsetTop-100+'px'},1000);
                $('#busProce .main-r').animate({'padding-top':0+'px'},1000);
                $('#busProce .main-left-page3 .mixbox').css('padding-top','133px');
                break;
            case 1:
                $('html,body').animate({scrollTop: chosePage.offsetTop-100+'px'},1000);
                $('#busProce .main-r').animate({'padding-top':chosePage.offsetTop-1100+'px'},1000);
                $('#busProce .main-left-page3 .mixbox').css('padding-top','133px');
                break;
            case 2:
                $('html,body').animate({scrollTop: maxTop-100+'px'},1000);
                $('#busProce .main-r').animate({'padding-top':maxTop-1100+'px'},1000);
                $('#busProce .main-left-page3 .mixbox0').delay(1000).animate({'padding-top':0+'px'},1000);
                $('#busProce .main-left-page3 .mixbox1').delay(1500).animate({'padding-top':133+'px'},1000);
                $('#busProce .main-left-page3 .mixbox2').delay(2000).animate({'padding-top':268+'px'},1000);
                break;
            case 3:
                $('html,body').animate({scrollTop: maxTop-100+'px'},1000);
                $('#busProce .main-r').animate({'padding-top':maxTop-1100+'px'},1000);
                $('#busProce .main-left-page3 .mixbox0').delay(1000).animate({'padding-top':133+'px'},1000);
                $('#busProce .main-left-page3 .mixbox1').delay(1500).animate({'padding-top':0+'px'},1000);
                $('#busProce .main-left-page3 .mixbox2').delay(2000).animate({'padding-top':268+'px'},1000);
                break;
            case 4:
                $('html,body').animate({scrollTop: maxTop-100+'px'},1000);
                $('#busProce .main-r').animate({'padding-top':maxTop-1100+'px'},1000);
                $('#busProce .main-left-page3 .mixbox0').delay(1000).animate({'padding-top':268+'px'},1000);
                $('#busProce .main-left-page3 .mixbox1').delay(1500).animate({'padding-top':133+'px'},1000);
                $('#busProce .main-left-page3 .mixbox2').delay(2000).animate({'padding-top':0+'px'},1000);
                break;
        }

    });

    /*-----------------------industrNew页面----------------------------------*/

    /*---------------------公司新闻、行业新闻 JSON数据请求选项卡-----------------------*/
    getjson("json/industryNew.json",1,".cmpany-news-top");
    getjson("json/industryNew2.json",2,".cmpany-news-bot");
    function getjson(json,index,addclass){
        $.getJSON(json,
            function(data){
                $.each(data[index],function(i,item){
                    var txt='<div class="cmpany-content">'+
                        '<h2 class="titleHasLine">'+
                        '<strong>【</strong>'+item.title+'<strong>】</strong>'+
                        '</h2>'+
                        '<p>'+item.text+'</p>'+
                        '</div>';
                    $(addclass).find(".cmpany-news-text").append(txt)
                        .end()
                        .find('.cmpany-content').fadeIn()
                });
            });
    };
    $(".cmpany-news-top .fa").click(function(){
        var index=$(this).index();
        $(".cmpany-news-top .fa").removeClass('fa-bg');
        $(this).addClass('fa-bg');
        $(".cmpany-news-top .cmpany-content").stop().fadeOut(function(){
            $(this).remove();
        });
        setTimeout(function(){
            getjson("json/industryNew.json",index,".cmpany-news-top");
        },300);
    });
    $(".cmpany-news-bot .fa").click(function(){
        var index=$(this).index();
        $(".cmpany-news-bot .fa").removeClass('fa-bg');
        $(this).addClass('fa-bg');
        $(".cmpany-news-bot .cmpany-content").stop().fadeOut(function(){
            $(this).remove();
        });
        setTimeout(function(){
            getjson("json/industryNew2.json",index,".cmpany-news-bot");
        },300);
    });
    /*---------------------顶部导航二级菜单-----------------------*/
    var timer=null;
    $(".writingLr li").mouseenter(function(){
        var index=$(this).index();
        $('.subnav').eq(index).stop().fadeIn()
    });
    $(".writingLr li").mouseleave(function(){
        var index=$(this).index();
        timer=setTimeout(function(){
            $('.subnav').eq(index).stop().fadeOut();
        },100);
    });
    $('.subnav').mouseenter(function(){
        $(this).show();
        clearTimeout(timer)
    });
    $('.subnav').mouseleave(function(){
        $(this).stop().fadeOut()
    });

    /*---------------------轮播图-----------------------*/
    var PicTotal = 5;
    var CurrentIndex;
    var ToDisplayPicNumber = 0;
    $("#lunbo-ul li").click(DisplayPic);
    function DisplayPic() {
        // 测试是父亲的第几个儿子
        CurrentIndex = $(this).index();
        // 隐藏全部图片
        var Pic = $(this).parent().parent().children("ul");
        $(Pic).children().fadeOut(2000);
        // 显示指定图片
        $(Pic).children("li").eq(CurrentIndex).fadeIn(2000);
    }
    setInterval(function(){
        $("li").eq(ToDisplayPicNumber).trigger("click");
        ToDisplayPicNumber = (ToDisplayPicNumber + 1) % PicTotal;
    },5000);

    /*-----------------------proDetail_1页面----------------------------------*/

    gesJson2('0');
    function gesJson2(index){
        $.getJSON("json/proDetail_1.json",function(json){
            $.each(json,function(i,item){
                var html='<div class="main-warp clear">'+
                    '<div class="left">'+
                    '<img src='+item[index].imgsrc+'>'+
                    '</div>'+
                    '<div class="right">'+
                    '<div class="title"><span>'+item[index].title+'</span></div>'+
                    '<div class="desc">'+
                    '<p>'+
                    item[index].desc+
                    '</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>';

                $('.main .inner .top').append(html)
                    .end()
                    .find('.main-warp').fadeIn();
            });
        });
    };
    var a=0;
    $(".right_btn").click(function(){
        a++;
        if(a>12){
            a=12;
        }else {
            $('.main .main-warp').stop().fadeOut(function(){
                $(this).remove();
            });
            $(".tabs li").eq(a).addClass("ac").siblings().removeClass("ac");
            setTimeout(function(){
                gesJson2(a);
            },400);
        };
    });
    $(".left_btn").click(function(){
        a--;
        if(a<0){
           a=0;
        }else {
            $('.main .main-warp').stop().fadeOut(function(){
                $(this).remove();
            });
            $(".tabs li").eq(a).addClass("ac").siblings().removeClass("ac");
            setTimeout(function(){
                gesJson2(a);
            },400);
        };

    });
});

