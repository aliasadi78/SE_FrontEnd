import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div style={{fontFamily: 'IRANSansWeb'}}>
                <header>

                    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar" id="navbar">
                        <div class="container"><a class="navbar-brand" href="#" ><strong>پرگار</strong></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <div class="collapse navbar-collapse" id="navbarContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item"><a class="nav-link" href="#contact">تماس با ما</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#team">تیم ما</a></li>
                                    <li class="nav-item"><a class="nav-link active" href="#about">درباره ما</a></li>
                                </ul><a class="btn btn-primary btn-rounded my-0" href="/signIn">ورود</a>
                            </div>
                        </div>
                    </nav>

                    <section class="view hm-gradient" id="intro">
                        <div class="site-bg-img d-flex align-items-center">
                            <div class="container">
                                <div class="row no-gutters">
                                    <div class="col-md-10 col-lg-6 text-center text-md-left margins">
                                        <div class="white-text">
                                            <div class="wow fadeInLeft" data-wow-delay="0.3s">
                                                <h1 class="h1-responsive font-weight-bold mt-sm-5" style={{color: 'honeydew'}} >چندین بار زندگی کن</h1>
                                                <div class="h6">
                                                    انسان ها با صرف عمر خود تجربه های گرانبهایی کسب می کنند
                                                    <br/>
                                                    ما به شما کمک می کنیم تا از تجربه های آن ها در راستای فردایی بهتر استفاده کنید
                                                </div>
                                            </div>
                                            <br/>
                                                
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>
                </header>
                    <div id="content">
                        <section class="row no-gutters" id="features" style={{margin: 'auto'}}>
                            <div class="col-lg-3 col-md-6 col-sm-12 deep-purple lighten-1 text-white">
                                <div class="p-5 text-center wow zoomIn" data-wow-delay=".1s"><i class="fa fa-line-chart fa-2x"></i>
                                    <div class="h5 mt-3">جامع بودن موضوعات</div>
                                    <p class="mt-5">در موضوعات متفاوت به مشاوران ما اعتماد کنید</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 purple lighten-1 text-white">
                                <div class="p-5 text-center wow zoomIn" data-wow-delay=".3s"><i class="fas fa-comments fa-2x"></i>

                                    <div class="h5 mt-3">مشاوره متنی</div>
                                    <p class="mt-5">امکان ارسال پیام و گفتگو با مشاور</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 teal lighten-1 text-white">
                                <div class="p-5 text-center wow zoomIn" data-wow-delay=".5s"><i class="fas fa-video fa-2x"></i>

                                    <div class="h5 mt-3"> مشاوره ی تصویری</div>
                                    <p class="mt-5">به صورت برخط با مشاوران ما تماس تصویری برقرار کنید</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 light-blue lighten-1 text-white">
                                <div class="p-5 text-center wow zoomIn" data-wow-delay=".7s"><i class="fa fa-bullhorn fa-2x"></i>
                                    <div class="h5 mt-3"> کانال های تخصصی</div>
                                    <p class="mt-5">مشاوران ما را در کانال های تخصصی شان دنبال کنید</p>
                                </div>
                            </div>
                        </section>
                        <section class="text-center py-5 grey lighten-4" id="about">
                            <div class="container">
                                <div class="wow fadeIn">
                                    <h2 class="h1 pt-5 pb-3">چرا پرگار را انتخاب کنیم؟</h2>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 mb-5 wow fadeInUp" data-wow-delay=".3s"><i class="fas fa-tachometer-alt fa-3x orange-text"></i>
                                        <h3 class="h4 mt-3">سرعت پاسخگویی</h3>
                                        <p class="mt-3 blue-grey-text">
                                           
                                        </p>
                                    </div>
                                    <div class="col-md-4 mb-5 wow fadeInUp" data-wow-delay=".4s"><i class="fas fa-address-card fa-3x cyan-text"></i>
                                        <h3 class="h4 mt-3">مشاوران با تجربه</h3>
                                        <p class="mt-3 blue-grey-text">
                                          
                                        </p>
                                    </div>
                                    <div class="col-md-4 mb-5 wow fadeInUp" data-wow-delay=".5s"><i class="fas fa-shield-alt fa-3x"></i>
                                        <h3 class="h4 mt-3">حفط حریم شخصی</h3>
                                        <p class="mt-3 blue-grey-text">
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    
                        <section class="py-5" id="team">
                            <div class="container">
                                <div class="wow fadeIn">
                                    <h2 class="h1 pt-5 pb-3 text-center">اعضای تیم</h2>
                                    <p class="px-5 mb-5 pb-3 lead text-center blue-grey-text">
                                        
                                    </p>
                                </div>
                                <div class="row mb-lg-4 center-on-small-only">
                                    <div class="col-lg-6 col-md-12 mb-5 wow fadeInLeft" data-wow-delay=".3s">
                                        <div class="col-md-6 float-left"><img class="img-fluid rounded z-depth-1 mb-3" src="assets/img/mojtaba.jpg" alt="team member" /></div>
                                        <div class="col-md-6 float-right">
                                            <div class="h4">مجتبی نافذ</div>
                                            <h6 class="font-weight-bold blue-grey-text mb-4">Back End</h6>
                                            <p class="grey-text"> DJango بک اند </p><a href="https://t.me/mojtaba_nafez" target="_blank" style={{textDecoration: 'none'}}><i class="fa fa-telegram"></i><span class="ml-1">@mojtaba_nafez</span></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 mb-5 wow fadeInRight" data-wow-delay=".3s">
                                        <div class="col-md-6 float-left"><img class="img-fluid rounded z-depth-1 mb-3" src="assets/img/hamid.jpg" alt="team member" /></div>
                                        <div class="col-md-6 float-right">
                                            <div class="h4">حمیدرضا آذرباد</div>
                                            <h6 class="font-weight-bold blue-grey-text mb-4">Back End</h6>
                                            <p class="grey-text">DJango بک اند </p><a href="https://t.me/h_azarbad77" target="_blank" style={{textDecoration: 'none'}}><i class="fa fa-telegram"></i><span class="ml-1">@h_azarbad77</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row center-on-small-only">
                                    <div class="col-lg-6 col-md-12 mb-5 wow fadeInLeft" data-wow-delay=".3s">
                                        <div class="col-md-6 float-left"><img class="img-fluid rounded z-depth-1 mb-3" src="assets/img/hojjat.jpg" alt="team member" /></div>
                                        <div class="col-md-6 float-right">
                                            <div class="h4">حجت نیکجو</div>
                                            <h6 class="font-weight-bold blue-grey-text mb-4">Front End</h6>
                                            <p class="grey-text">  React js فرانت اند </p><a href="https://t.me/nikjo0" target="_blank" style={{textDecoration: 'none'}}><i class="fa fa-telegram"></i><span class="ml-1">@nikjo0</span></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 mb-5 wow fadeInRight" data-wow-delay=".3s">
                                        <div class="col-md-6 float-left"><img class="img-fluid rounded z-depth-1 mb-3" src="assets/img/mahdi.jpg" alt="team member" /></div>
                                        <div class="col-md-6 float-right">
                                            <div class="h4">محمد مهدی سوری</div>
                                            <h6 class="font-weight-bold blue-grey-text mb-4">Front End</h6>
                                            <p class="grey-text">  React js فرانت اند </p><a href="https://t.me/mohammadmahdi7872" target="_blank" style={{textDecoration: 'none'}}><i class="fa fa-telegram"></i><span class="ml-1">@mohammadmahdi7872</span></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 mb-5 wow fadeInLeft" data-wow-delay=".3s">
                                        <div class="col-md-6 float-left"><img class="img-fluid rounded z-depth-1 mb-3" src="assets/img/aliasadi.jpg" alt="team member" /></div>
                                        <div class="col-md-6 float-right">
                                            <div class="h4">علی اسدی</div>
                                            <h6 class="font-weight-bold blue-grey-text mb-4">Front End</h6>
                                            <p class="grey-text">  React js فرانت اند </p><a href="https://t.me/A_aliasadi_A" target="_blank" style={{textDecoration: 'none'}}><i class="fa fa-telegram"></i><span class="ml-1">@A_aliasadi_A</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="contact"
                        // style={{"background-image:url('img/panorama-3094696_1920.jpg')"}}
                        >
                            <div class="rgba-black-strong py-5 card-image" id="pricing">
                                <div class="container">
                                    <div class="wow fadeIn">
                                        <h2 class="h1 text-white pt-5 pb-3 text-center">تماس با ما</h2>
                                        <p class="text-white px-5 mb-5 pb-3 lead text-center">
                                           
                                        </p>
                                    </div>
                                    <div class="card mb-5 wow fadeInUp" data-wow-delay=".4s">
                                        <div class="card-body p-5">
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <form  method="POST">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="md-form" style={{direction: 'rtl',textAlign: 'right'}}>
                                                                    <input class="form-control" id="name" type="text" name="name" required="required" style={{direction: 'rtl',textAlign: 'right'}}/>
                                                                    <label for="name" style={{direction: 'rtl',textAlign: 'right'}}>نام کامل</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="md-form">
                                                                    <input class="form-control" id="email" type="text" name="_replyto" required="required" />
                                                                    <label for="email">ایمیل شما</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <div class="md-form">
                                                                    <input class="form-control" id="subject" type="text" name="subject" required="required" />
                                                                    <label for="subject">موضوع</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12">
                                                                <div class="md-form">
                                                                    <input class="form-control" id="message" type="text" name="message" required="required" />
                                                                    <label for="message">پیام شما</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="center-on-small-only mb-4">
                                                            <button class="btn btn-indigo ml-0" type="submit"><i class="fa fa-paper-plane-o mr-2"></i><a href="mailto: consultant.iust.se@gmail.com" style={{textDecoration: 'none'}}>ارسال</a> </button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="col-md-4">
                                                    <ul class="list-unstyled text-center">
                                                        <li class="mt-4"><i class="fa fa-map-marker indigo-text fa-2x"></i>
                                                            <p class="mt-2">۱۴۰, نارمک, تهران, ایران</p>
                                                        </li>
                                                        <li class="mt-4"><i class="fa fa-phone indigo-text fa-2x"></i>
                                                            <p class="mt-2">+ ۹۸ ۹۱۸ ۷۴۹ ۶۰ ۹۷</p>
                                                        </li>
                                                        <li class="mt-4"><i class="fa fa-envelope indigo-text fa-2x"></i>
                                                            <p class="mt-2">consultant.iust.se@gmail.com</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section></div>
                    <footer class="page-footer indigo darken-2 center-on-small-only pt-0 mt-0">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="mb-5 flex-center"><a class="px-3" href="https://t.me/pargarconsultant"><i class="fa fa-telegram fa-lg white-text"></i></a><a class="px-3" href="#"><i class="fa fa-twitter fa-lg white-text"></i></a><a class="px-3" href="#"><i class="fa fa-instagram fa-lg white-text"></i></a><a class="px-3" href="#"><i class="fa fa-linkedin fa-lg white-text"></i></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright text-center py-3 font-small">
                            <div class="container-fluid">
                                <div>&copy; طراحی - <a href="/" style={{textDecoration: 'none'}}>تیم پرگار</a><a href="https://templateflip.com/" target="_blank" style={{textDecoration: 'none'}}>TemplateFlip</a></div>
                            </div>
                        </div>
                    </footer>
            </div>
                );
    }
}

export default() =>{
    return(
                <Home />
                )
}