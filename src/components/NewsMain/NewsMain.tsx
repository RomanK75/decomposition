// Принимает новости в ввиде data,
//  использует состояние для отображения активного заголовка и новостей
import React, { useState } from 'react';

import './NewsMain.css';

type Props = {
  data: {
    arcticles: {
      title: string;
      newsList: {
        newsTitle:string;
        img: string;
        url:string;
    }[];
  }[];
}}

const NewsMain = ({data}: Props ) => {
  const [activeTitle, setActiveTitle] = useState<string>('Сейчас в СМИ');

  const handleTitleClick = (title: string) => {
    setActiveTitle(title);
  };

  const activeArticle = data.arcticles.find(article => article.title === activeTitle);

  return (
    <div>
      <div className="news-headers">
        {data.arcticles.map((article, index) => (
          <h2
            key={index}
            onClick={() => handleTitleClick(article.title)}
            className={`news__header ${activeTitle === article.title ? 'active' : ''}`}
          >
            {article.title}
          </h2>
        ))}
      </div>
      {activeArticle && (
        <div className="news-list">
          <ul>
            {activeArticle.newsList.map((news, newsIndex) => (
              <li key={newsIndex}>
                <a href={news.url}>
                  <img src={news.img} alt='img' />
                  <h3>{news.newsTitle}</h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewsMain;

