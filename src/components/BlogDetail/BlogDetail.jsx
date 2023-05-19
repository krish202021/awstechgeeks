import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { compareAsc, format } from "date-fns";
import { Skeleton } from "@mui/material";
import { Link, useParams, useHistory } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import * as API from "../API/Fetch";
import Footer from "../../includes/Footer";
import Header from "../../includes/Header";
import Contact from "../Common/Contact";
const blog_image = "https://techsgeeks.in/admin_panel/public/blog_image/";

function BlogDetail(par) {
  const history = useHistory();
  const params = par.location.state;
  const [blog, setBlog] = useState();
  const [popularBlog, setPopularBlog] = useState();
  const [category, setCategory] = useState();
  const [serTag, setSerTag] = useState();
  const [tag, setTag] = useState();
  const [links, setLinks] = useState("");
  const [title, setTitle] = useState("");
  const tagArr = [];
  console.log("par", params.id);
  useEffect(() => {
    window.scrollTo(0, 0);
    const data = { data: "data" };
    API.get(data, "user/social-link").then((res) => {
      if (res) {
        console.log(res);
        setLinks(res.result);
      } else {
        console.log("token mismatch");
      }
    });
    API.get(data, `user/get-blog-detail/${params.id}`).then((res) => {
      if (res) {
        const obj = res.tag;
        //console.log(res.res)
        setBlog(res.res);
        const titleHtml = res.res[0].title;
        setTitle(titleHtml);
        setSerTag(Object.values(obj));
        const tag = { tag: Object.values(obj) };
        API.api(tag, `user/get-tags`).then((res) => {
          if (res) {
            console.log("tagarra", res.result);
            setTag(res.result);
          } else {
            console.log("error");
          }
        });
      } else {
        console.log("error");
      }
    });

    API.get(data, `user/popular-blog`).then((res) => {
      //console.log('popular', res)
      if (res) {
        setPopularBlog(res.result);
      } else {
        console.log("error");
      }
    });

    //SELECT * FROM table WHERE your_field_here REGEXP '.*;s:[0-9]+:"your_value_here".*'
    API.get(data, `user/get-category`).then((res) => {
      if (res) {
        setCategory(res.result);
      } else {
        console.log("error");
      }
    });
    const view = { id: params.id };
    API.api(view, "user/count-view").then((res) => {
      console.log(res);
    });
  }, []);

  const action = (ids) => {
    history.push({
      pathname: `/blog-detail/${ids}`,
      state: { id: ids },
    });
  };

  const catAct = (ids) => {
    history.push({
      pathname: `/category-blog/${ids}`,
      state: { id: ids },
    });
  };

  return (
    <div>
      <Header />

      <div className="content-wrapper">
        {/* <!-- Blog posts--> */}

        <div className="container">
          <div className="row blog-page">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              {blog ? (
                blog.map((item, index) => {
                  return (
                    <article className="hentry post post-standard has-post-thumbnail post-standard-details">
                      <div className="post-thumb">
                        <img
                          src={
                            item.image
                              ? blog_image + item.image
                              : "img/blog1.jpg"
                          }
                          alt="post"
                        />
                      </div>

                      <div className="post__content">
                        <a className="social__item main">
                          <svg className="utouch-icon utouch-icon-1496680146-share">
                            <use xlinkHref="#utouch-icon-1496680146-share"></use>
                          </svg>
                        </a>

                        <div className="share-product">
                          <ul className="socials">
                            <li>
                              <a className="social__item facebook">
                                <svg
                                  className="utouch-icon"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="1.414"
                                >
                                  <path
                                    d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                                    fill-rule="nonzero"
                                  ></path>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a className="social__item twitter">
                                <svg
                                  className="utouch-icon"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="1.414"
                                >
                                  <path
                                    d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
                                    fill-rule="nonzero"
                                  ></path>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a className="social__item googlePlus">
                                <svg
                                  className="utouch-icon"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="1.414"
                                >
                                  <path d="M8.16 6.857V9.6h4.537c-.183 1.177-1.37 3.45-4.537 3.45-2.73 0-4.96-2.26-4.96-5.05s2.23-5.05 4.96-5.05c1.554 0 2.594.66 3.19 1.233l2.17-2.092C12.126.79 10.32 0 8.16 0c-4.423 0-8 3.577-8 8s3.577 8 8 8c4.617 0 7.68-3.246 7.68-7.817 0-.526-.057-.926-.126-1.326H8.16z"></path>
                                </svg>
                              </a>
                            </li>

                            <li>
                              <a className="social__item rss">
                                <svg
                                  className="utouch-icon"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="1.414"
                                >
                                  <path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="post__date">
                          <time
                            className="published"
                            datetime="2017-03-20 12:00:00"
                          >
                            <span className="day">
                              {format(new Date(item.created_at), "EEEE")}
                            </span>
                            <a className="number">
                              {format(new Date(item.created_at), "dd")}
                            </a>
                            <span className="month">
                              {format(new Date(item.created_at), "MMM")}
                            </span>
                          </time>
                        </div>

                        <div className="post__content-info">
                          <h3 className="post__title entry-title">
                            {parse(item.title)}
                          </h3>

                          <div className="post-additional-info">
                            <span className="post__author author vcard">
                              By
                              <a className="fn"> Admin</a>
                            </span>
                            <span className="category">
                              In
                              <a> {item.cat_name}</a>
                            </span>
                          </div>
                        </div>

                        <p>{parse(item.description)}</p>

                        <div className="post-details-shared">
                          <ul className="tags-inline">
                            <li>Tags:</li>
                            {tag
                              ? tag.map((item, index) => {
                                  const len = tag.length;
                                  return (
                                    <li>
                                      <a>{item.tag}</a>,
                                    </li>
                                  );
                                })
                              : ""}
                          </ul>

                          <div className="widget w-follow">
                            <ul className="socials socials--round">
                              <li>Share:</li>
                              <li>
                                <FacebookShareButton
                                  url={`http://techsgeeks.in/blog-detail/${params.id}`}
                                  title={title + "\n"}
                                >
                                  <FacebookIcon size={32} round={true} />
                                </FacebookShareButton>
                              </li>
                              <li>
                                <TwitterShareButton
                                  url={`http://techsgeeks.in/blog-detail/${params.id}`}
                                  title={title + "\n"}
                                >
                                  <TwitterIcon size={32} round={true} />
                                </TwitterShareButton>
                              </li>

                              <li>
                                <LinkedinShareButton
                                  url={`http://techsgeeks.in/blog-detail/${params.id}`}
                                  title={title + "\n"}
                                >
                                  <LinkedinIcon size={32} round={true} />
                                </LinkedinShareButton>
                              </li>

                              <li>
                                <WhatsappShareButton
                                  url={`http://techsgeeks.in/blog-detail/${params.id}`}
                                  title={title + "\n"}
                                >
                                  <WhatsappIcon size={32} round={true} />
                                </WhatsappShareButton>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <>
                  <div className="entry col-sm-6 col-md-3">
                    <div className="grid-inner">
                      <div className="entry-image-latest">
                        <Skeleton
                          variant="rectangular"
                          width={716}
                          height={450}
                        />
                      </div>
                      <div className="entry-title title-xs nott">
                        <h3>
                          <Skeleton variant="text" width={716} />
                        </h3>
                        <Skeleton variant="text" width={716} />
                        <h3>
                          <Skeleton variant="text" width={716} />
                        </h3>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <Contact />
            </div>

            {/* <!-- Sidebar--> */}

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <aside aria-label="sidebar" className="sidebar sidebar-right">
                <aside className="widget w-tags">
                  <h5 className="widget-title">Categories</h5>
                  <ul className="tags-list">
                    {category
                      ? category.map((item, index) => {
                          return (
                            <li key={index}>
                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  catAct(item.id);
                                }}
                              >
                                {item.cat_name}
                              </a>
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                </aside>

                <aside className="widget w-popular-products crumina-module crumina-module-slider">
                  <h5 className="widget-title">Popular Post</h5>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {popularBlog
                        ? popularBlog.map((item, index) => {
                            return (
                              <div className="swiper-slide product-item">
                                <div
                                  className="product-item-thumb"
                                  onClick={() => action(item.id)}
                                >
                                  <div className="square-colored bg-product-blue-dark"></div>
                                  <img
                                    style={{ cursor: "pointer" }}
                                    src={
                                      item.image
                                        ? blog_image + item.image
                                        : "img/blog1.jpg"
                                    }
                                    alt="post"
                                  />
                                </div>
                                <div
                                  className="product-item-content"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => action(item.id)}
                                >
                                  <h6 className="title">{parse(item.title)}</h6>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                    {/* <!-- If we need pagination --> */}
                    <div className="swiper-pagination"></div>
                  </div>
                </aside>

                <aside className="widget w-contacts">
                  <h5 className="widget-title">Quick Contact</h5>

                  <div className="contact-item display-flex">
                    {/* <svg className="utouch-icon utouch-icon-telephone-keypad-with-ten-keys"><use xlinkHref="#utouch-icon-telephone-keypad-with-ten-keys"></use></svg> */}
                    <span className="info">+91-9319239730</span>
                  </div>

                  <div className="contact-item">
                    {/* <svg className="utouch-icon utouch-icon-message-closed-envelope-1"><use xlinkHref="#utouch-icon-message-closed-envelope-1"></use></svg> */}
                    <span className="info">info@techsgeeks.in</span>
                    <br></br>
                    <span className="info">sales@techsgeeks.in</span>
                  </div>

                  <ul className="socials socials--round socials--colored">
                    {links
                      ? links.map((item, index) => {
                          return (
                            <li>
                              <a
                                title=""
                                key={index}
                                href={item.link}
                                target="blank"
                              >
                                <span>
                                  <i
                                    className={item.icon}
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </a>
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                </aside>
              </aside>
            </div>

            {/* <!-- End Sidebar--> */}
          </div>
        </div>

        {/* <!-- End Blog posts--> */}
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
