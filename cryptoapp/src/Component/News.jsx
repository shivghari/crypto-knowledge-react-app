import React, { useState } from "react";
import { Select, Row, Col, Avatar, Card, Typography } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../Services/CryptoNewsApi";
import { useGetCryptosQuery } from "../Services/CryptoApi";

function News({ simplified }) {
  const { Text, Title } = Typography;
  const { Option } = Select;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data } = useGetCryptosQuery(50);

  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) {
    return <h3>Loading...</h3>;
  }

  return (
    <Row gutter={[24, 24]}>
      {simplified ? null : (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select A Crypto"
            optionFilterProp="children"
            onChange={(value) => {
              setNewsCategory(value);
            }}
            filterOption={(input, option) =>
              option.children
                .toLoweCase()
                .indexOf(input.toLocaleLowerCase() >= 0)
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news, i) => (
        <Col sx={24} sm={12} lg={12} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target=" black" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  //   style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="newsImage"
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.slice(1, 150)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
