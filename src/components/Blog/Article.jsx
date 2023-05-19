import React from 'react'

function Article() {
    return (
        <div>
            <main className="main">

                <article className="hentry post post-standard has-post-thumbnail">

                    <div className="post-thumb">
                        <img src="img/blog1.jpg" alt="post" />
                        <a className="link-image js-zoom-image">
                            <svg className="utouch-icon utouch-icon-zoom-increasing-button-outline"><use xlinkHref="#utouch-icon-zoom-increasing-button-outline"></use></svg>
                        </a>
                        <a className="link-post">
                            <svg className="utouch-icon utouch-icon-link-chain"><use xlinkHref="#utouch-icon-link-chain"></use></svg>
                        </a>
                        <div className="overlay-standard overlay--blue-dark"></div>
                    </div>

                    <div className="post__content">

                        <a className="social__item main">
                            <svg className="utouch-icon utouch-icon-1496680146-share"><use xlinkHref="#utouch-icon-1496680146-share"></use></svg>
                        </a>

                        <div className="share-product">

                            <ul className="socials">
                                <li>
                                    <a className="social__item facebook">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item twitter">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item googlePlus">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8.16 6.857V9.6h4.537c-.183 1.177-1.37 3.45-4.537 3.45-2.73 0-4.96-2.26-4.96-5.05s2.23-5.05 4.96-5.05c1.554 0 2.594.66 3.19 1.233l2.17-2.092C12.126.79 10.32 0 8.16 0c-4.423 0-8 3.577-8 8s3.577 8 8 8c4.617 0 7.68-3.246 7.68-7.817 0-.526-.057-.926-.126-1.326H8.16z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item rss">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" /></svg>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="post__date">

                            <time className="published" datetime="2017-03-20 12:00:00">
                                <a className="number">20</a>
                                <span className="month">March 2017</span>
                                <span className="day">Monday</span>
                            </time>

                        </div>

                        <div className="post__content-info">

                            <a className="h5 post__title entry-title">The Important Standard Post Format</a>

                            <p className="post__text">Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
                                in futurumlaritas est etiam processus.
                            </p>

                            <div className="post-additional-info">
                                <span className="post__author author vcard">
                                    By
                                    <a className="fn">Admin</a>

                                </span>

                                <span className="category">
                                    In
                                    <a >News</a>
                                </span>

                                <span className="post__comments">
                                    <a >0 <span>Comments</span></a>
                                </span>

                                <a className="btn-next">
                                    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                                    <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                                </a>

                            </div>

                        </div>
                    </div>

                </article>

                <article className="hentry post post-standard has-post-thumbnail slider">


                    <div className="swiper-container post-standard-thumb-slider">

                        <div className="swiper-wrapper">

                            <div className="post-thumb swiper-slide">
                                <img src="img/blog2.jpg" alt="video" />
                            </div>

                            <div className="post-thumb swiper-slide">
                                <img src="img/blog2.jpg" alt="video" />
                            </div>

                            <div className="post-thumb swiper-slide">
                                <img src="img/blog2.jpg" alt="video" />
                            </div>

                            <div className="post-thumb swiper-slide">
                                <img src="img/blog2.jpg" alt="video" />
                            </div>

                        </div>


                        <div className="swiper-pagination pagination-white"></div>


                    </div>
                    <div className="post__content">

                        <a className="social__item main">
                            <svg className="utouch-icon utouch-icon-1496680146-share"><use xlinkHref="#utouch-icon-1496680146-share"></use></svg>
                        </a>

                        <div className="share-product">

                            <ul className="socials">
                                <li>
                                    <a className="social__item facebook">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item twitter">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item googlePlus">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8.16 6.857V9.6h4.537c-.183 1.177-1.37 3.45-4.537 3.45-2.73 0-4.96-2.26-4.96-5.05s2.23-5.05 4.96-5.05c1.554 0 2.594.66 3.19 1.233l2.17-2.092C12.126.79 10.32 0 8.16 0c-4.423 0-8 3.577-8 8s3.577 8 8 8c4.617 0 7.68-3.246 7.68-7.817 0-.526-.057-.926-.126-1.326H8.16z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item rss">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" /></svg>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="post__date">

                            <time className="published" datetime="2017-03-20 12:00:00">
                                <a className="number">16</a>
                                <span className="month">March 2017</span>
                                <span className="day">Thursday</span>
                            </time>

                        </div>

                        <div className="post__content-info">

                            <a className="h5 post__title entry-title">Photo with Slider Post Format</a>

                            <p className="post__text">Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                                anteposuerit litterarum formas humanitatis per.
                            </p>

                            <div className="post-additional-info">
                                <span className="post__author author vcard">
                                    By
                                    <a className="fn">Admin</a>

                                </span>

                                <span className="category">
                                    In
                                    <a >News</a>
                                </span>

                                <span className="post__comments">
                                    <a >2 <span>Comments</span></a>
                                </span>

                                <a className="btn-next">
                                    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                                    <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                                </a>

                            </div>

                        </div>
                    </div>

                </article>

                <article className="hentry post post-standard has-post-thumbnail video">

                    <div className="post-thumb">
                        <img src="img/blog3.jpg" alt="video" />
                        <div className="overlay"></div>
                        <a href="https://www.youtube.com/watch?v=wnJ6LuUFpMo" className="video-control js-popup-iframe">
                            <img src="img/play.png" alt="play" />
                        </a>
                    </div>

                    <div className="post__content">

                        <a className="social__item main">
                            <svg className="utouch-icon utouch-icon-1496680146-share"><use xlinkHref="#utouch-icon-1496680146-share"></use></svg>
                        </a>

                        <div className="share-product">

                            <ul className="socials">
                                <li>
                                    <a className="social__item facebook">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item twitter">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item googlePlus">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8.16 6.857V9.6h4.537c-.183 1.177-1.37 3.45-4.537 3.45-2.73 0-4.96-2.26-4.96-5.05s2.23-5.05 4.96-5.05c1.554 0 2.594.66 3.19 1.233l2.17-2.092C12.126.79 10.32 0 8.16 0c-4.423 0-8 3.577-8 8s3.577 8 8 8c4.617 0 7.68-3.246 7.68-7.817 0-.526-.057-.926-.126-1.326H8.16z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item rss">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" /></svg>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="post__date">

                            <time className="published" datetime="2017-03-20 12:00:00">
                                <a className="number">11</a>
                                <span className="month">February 2017</span>
                                <span className="day">Monday</span>
                            </time>

                        </div>

                        <div className="post__content-info">

                            <a className="h5 post__title entry-title">Video Post Format</a>

                            <p className="post__text">Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
                                in futurumlaritas est etiam processus.
                            </p>

                            <div className="post-additional-info">
                                <span className="post__author author vcard">
                                    By
                                    <a className="fn">Admin</a>

                                </span>

                                <span className="category">
                                    In
                                    <a >News</a>
                                </span>

                                <span className="post__comments">
                                    <a >0 <span>Comments</span></a>
                                </span>

                                <a className="btn-next">
                                    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                                    <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                                </a>

                            </div>

                        </div>
                    </div>

                </article>

                <article className="hentry post post-standard has-post-thumbnail link">

                    <div className="post-thumb bg-green">
                        <div className="thumb-content">
                            <a className="h3 thumb-content-title">Utouch - App Startup Soft Material PSD Template</a>
                            <a className="h6 site-link">www.themeforest.com</a>
                            <a className="post-link">
                                <img src="svg-icons/link%20(2).svg" alt="link" />
                            </a>
                        </div>
                    </div>

                    <div className="post__content">

                        <a className="social__item main">
                            <svg className="utouch-icon utouch-icon-1496680146-share"><use xlinkHref="#utouch-icon-1496680146-share"></use></svg>
                        </a>

                        <div className="share-product">

                            <ul className="socials">
                                <li>
                                    <a className="social__item facebook">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item twitter">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item googlePlus">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8.16 6.857V9.6h4.537c-.183 1.177-1.37 3.45-4.537 3.45-2.73 0-4.96-2.26-4.96-5.05s2.23-5.05 4.96-5.05c1.554 0 2.594.66 3.19 1.233l2.17-2.092C12.126.79 10.32 0 8.16 0c-4.423 0-8 3.577-8 8s3.577 8 8 8c4.617 0 7.68-3.246 7.68-7.817 0-.526-.057-.926-.126-1.326H8.16z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item rss">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" /></svg>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="post__date">

                            <time className="published" datetime="2017-03-20 12:00:00">
                                <a className="number">31</a>
                                <span className="month">January 2017</span>
                                <span className="day">Monday</span>
                            </time>

                        </div>

                        <div className="post__content-info">

                            <a className="h5 post__title entry-title">Link Post Format</a>

                            <p className="post__text">Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
                                in futurumlaritas est etiam processus.
                            </p>

                            <div className="post-additional-info">
                                <span className="post__author author vcard">
                                    By
                                    <a className="fn">Admin</a>
                                </span>

                                <span className="category">
                                    In
                                    <a >News</a>
                                </span>

                                <span className="post__comments">
                                    <a >0 <span>Comments</span></a>
                                </span>

                                <a className="btn-next">
                                    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                                    <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                                </a>

                            </div>

                        </div>
                    </div>

                </article>

                <article className="hentry post post-standard has-post-thumbnail">

                    <div className="post-thumb">
                        <img src="img/blog4.jpg" alt="post" />
                        <a className="link-image js-zoom-image">
                            <svg className="utouch-icon utouch-icon-zoom-increasing-button-outline"><use xlinkHref="#utouch-icon-zoom-increasing-button-outline"></use></svg>
                        </a>
                        <a className="link-post">
                            <svg className="utouch-icon utouch-icon-link-chain"><use xlinkHref="#utouch-icon-link-chain"></use></svg>
                        </a>
                        <div className="overlay-standard overlay--blue-dark"></div>
                    </div>

                    <div className="post__content">

                        <a className="social__item main">
                            <svg className="utouch-icon utouch-icon-1496680146-share"><use xlinkHref="#utouch-icon-1496680146-share"></use></svg>
                        </a>

                        <div className="share-product">

                            <ul className="socials">
                                <li>
                                    <a className="social__item facebook">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item twitter">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item googlePlus">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8.16 6.857V9.6h4.537c-.183 1.177-1.37 3.45-4.537 3.45-2.73 0-4.96-2.26-4.96-5.05s2.23-5.05 4.96-5.05c1.554 0 2.594.66 3.19 1.233l2.17-2.092C12.126.79 10.32 0 8.16 0c-4.423 0-8 3.577-8 8s3.577 8 8 8c4.617 0 7.68-3.246 7.68-7.817 0-.526-.057-.926-.126-1.326H8.16z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item rss">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" /></svg>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="post__date">

                            <time className="published" datetime="2017-03-20 12:00:00">
                                <a className="number">22</a>
                                <span className="month">January 2017</span>
                                <span className="day">Thursday</span>
                            </time>

                        </div>

                        <div className="post__content-info">

                            <a className="h5 post__title entry-title">Standard Post Format</a>

                            <p className="post__text">Investigationes demonstraverunt lectores legere me lius quod ii legunt
                                saepius est etiam processus dynamicu.
                            </p>

                            <div className="post-additional-info">
                                <span className="post__author author vcard">
                                    By
                                    <a className="fn">Admin</a>

                                </span>

                                <span className="category">
                                    In
                                    <a >News</a>
                                </span>

                                <span className="post__comments">
                                    <a >0 <span>Comments</span></a>
                                </span>

                                <a className="btn-next">
                                    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                                    <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                                </a>

                            </div>

                        </div>
                    </div>

                </article>

                <article className="hentry post post-standard has-post-thumbnail">

                    <div className="post-thumb">
                        <img src="img/blog5.jpg" alt="post" />
                        <a className="link-image js-zoom-image">
                            <svg className="utouch-icon utouch-icon-zoom-increasing-button-outline"><use xlinkHref="#utouch-icon-zoom-increasing-button-outline"></use></svg>
                        </a>
                        <a className="link-post">
                            <svg className="utouch-icon utouch-icon-link-chain"><use xlinkHref="#utouch-icon-link-chain"></use></svg>
                        </a>
                        <div className="overlay-standard overlay--blue-dark"></div>
                    </div>

                    <div className="post__content">

                        <a className="social__item main">
                            <svg className="utouch-icon utouch-icon-1496680146-share"><use xlinkHref="#utouch-icon-1496680146-share"></use></svg>
                        </a>

                        <div className="share-product">

                            <ul className="socials">
                                <li>
                                    <a className="social__item facebook">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item twitter">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item googlePlus">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8.16 6.857V9.6h4.537c-.183 1.177-1.37 3.45-4.537 3.45-2.73 0-4.96-2.26-4.96-5.05s2.23-5.05 4.96-5.05c1.554 0 2.594.66 3.19 1.233l2.17-2.092C12.126.79 10.32 0 8.16 0c-4.423 0-8 3.577-8 8s3.577 8 8 8c4.617 0 7.68-3.246 7.68-7.817 0-.526-.057-.926-.126-1.326H8.16z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a className="social__item rss">
                                        <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" /></svg>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="post__date">

                            <time className="published" datetime="2017-03-20 12:00:00">
                                <a className="number">4</a>
                                <span className="month">January 2017</span>
                                <span className="day">Monday</span>
                            </time>

                        </div>

                        <div className="post__content-info">

                            <a className="h5 post__title entry-title">Standard Post Format</a>

                            <p className="post__text">Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes
                                in futurumlaritas est etiam processus.
                            </p>

                            <div className="post-additional-info">
                                <span className="post__author author vcard">
                                    By
                                    <a className="fn">Admin</a>

                                </span>

                                <span className="category">
                                    In
                                    <a >News</a>
                                </span>

                                <span className="post__comments">
                                    <a >0 <span>Comments</span></a>
                                </span>

                                <a className="btn-next">
                                    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                                    <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                                </a>

                            </div>

                        </div>
                    </div>

                </article>

            </main>

        </div>
    )
}

export default Article