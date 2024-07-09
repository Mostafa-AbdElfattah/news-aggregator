"use client";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

import NewsCard from "@/components/NewsCard";
import placeHolderNews from "../assets/images/news-place-holder.jpg";
import "./Home.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const Home = () => {
  const sourceOneNewsList = useSelector((state) => state.news.firstSourceList);

  const sourceTwoNewsList = useSelector((state) => state.news.secondSourceList);

  const container = useRef();
  const textRefOne = useRef(null);
  const textRefTwo = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRefOne.current,
      { text: "" },
      {
        text: "Your Daily",
        duration: 4,
        ease: "power4.out",
        stagger: 0.2,
        repeat: 2,
        yoyo: true,
      }
    );

    gsap.fromTo(
      textRefTwo.current,
      { text: "" },
      {
        text: "News Source",
        duration: 4,
        ease: "power4.out",
        stagger: 0.2,
        repeat: 2,
        yoyo: true,
      }
    );
  }, []);

  return (
    <main className="landing">
      {/* First Section */}
      <section className="top-section" ref={container}>
        <h2 className="header-text" ref={textRefOne}></h2>
        <h2 className="header-text" ref={textRefTwo}></h2>
      </section>
      {/* End First Section */}

      {/* Start Second Section */}

      <section className="main-news-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div
                className="main-news-container"
                style={{
                  backgroundImage: `url(${
                    sourceTwoNewsList &&
                    sourceTwoNewsList[0]?.multimedia[0]?.url
                      ? sourceTwoNewsList[0]?.multimedia[0]?.url
                      : placeHolderNews.src
                  })`,
                }}
                onClick={() =>
                  window.open(
                    sourceTwoNewsList && sourceTwoNewsList[0]?.url,
                    "_blank"
                  )
                }
              >
                <div className="text-container">
                  <h3 className="title">
                    {sourceTwoNewsList && sourceTwoNewsList[0]?.title}
                  </h3>

                  <p className="news-section">
                    {sourceTwoNewsList && sourceTwoNewsList[0]?.subsection}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="main-news-side-container">
                <NewsCard
                  title={sourceTwoNewsList && sourceTwoNewsList[1]?.title}
                  url={sourceTwoNewsList && sourceTwoNewsList[1]?.url}
                  imageSrc={
                    sourceTwoNewsList &&
                    sourceTwoNewsList[1]?.multimedia[0]?.url
                  }
                  tag={sourceTwoNewsList && sourceTwoNewsList[1]?.subsection}
                />

                <NewsCard
                  title={sourceTwoNewsList && sourceTwoNewsList[2]?.title}
                  url={sourceTwoNewsList && sourceTwoNewsList[2]?.url}
                  imageSrc={
                    sourceTwoNewsList &&
                    sourceTwoNewsList[2]?.multimedia[0]?.url
                  }
                  tag={sourceTwoNewsList && sourceTwoNewsList[2]?.subsection}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Second Section */}

      {/* Start Third Section */}

      <section className="hot-news-section">
        <div className="container">
          <h2 className="section-title">Hot News</h2>
          <div className="row">
            {sourceTwoNewsList &&
              sourceTwoNewsList.slice(3, 7).map((element, index) => (
                <div key={`news-hot-${index}`} className="col-md-3">
                  <NewsCard
                    title={element?.title}
                    url={element?.url}
                    imageSrc={element?.multimedia[0]?.url}
                    tag={element?.subsection}
                    hasDescription
                    description={element?.abstract}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* End Third Section */}

      {/* Start Fourth Section */}

      <section className="must-read-section">
        <div className="container">
          <h2 className="section-title">Must Read</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="news-side-container">
                {sourceOneNewsList &&
                  sourceOneNewsList.slice(0, 2).map((element, index) => (
                    <div key={`must-read-${index}`}>
                      <NewsCard
                        title={element?.title}
                        url={element?.url}
                        imageSrc={element?.urlToImage}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-md-6 pb-3 pb-md-0">
              <div
                className="center-news-container"
                style={{
                  backgroundImage: `url(${
                    sourceOneNewsList &&
                    sourceOneNewsList[2]?.urlToImage &&
                    sourceOneNewsList[2].urlToImage
                  })`,
                }}
                onClick={() =>
                  window.open(
                    sourceTwoNewsList && sourceOneNewsList[2]?.url,
                    "_blank"
                  )
                }
              ></div>
            </div>

            <div className="col-md-3">
              <div className="news-side-container">
                {sourceOneNewsList &&
                  sourceOneNewsList.slice(3, 5).map((element, index) => (
                    <div key={`must-read-${index}`}>
                      <NewsCard
                        title={element?.title}
                        url={element?.url}
                        imageSrc={element?.urlToImage}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Fourth Section */}

      {/* Start Fifth Section  */}
      <section className="sports-section">
        <div className="container">
          <h2 className="section-title">Sports</h2>
          <div className="row">
            {sourceOneNewsList &&
              sourceOneNewsList.filter(item => item.author === 'BBC Sport').slice(0, 6).map((element, index) => (
                <div key={`sports-${index}`} className="col-md-4">
                  <NewsCard
                    title={element?.title}
                    url={element?.url}
                    imageSrc={element?.urlToImage}
                    tag="Sport"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* End Fifth Section  */}
    </main>
  );
};

export default Home;
