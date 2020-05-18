import React from "react";
import TradingPart from "./TradingPart/TradingPart";
import TradingViewWidget from "react-tradingview-widget";
import styled from "styled-components";

function SectionMiddle() {
  return (
    <div>
      <SectionMiddlePage className="sectionMiddle">
        <GraphChartArticle className="graphChart">
          <TradingViewWidget symbol="NASDAQ:AAPL" autosize />
        </GraphChartArticle>
        <TradingPart />
      </SectionMiddlePage>
    </div>
  );
}

export default SectionMiddle;

const SectionMiddlePage = styled.div`
  margin-left: 8px;
  width: 900px;
`;

const GraphChartArticle = styled.article`
  border: 0px solid #ebeef6;
  //width: 577px;
  height: 556px;
  padding: 0;
  margin-bottom: 8px;
  background-color: #fff;
`;

//  @media (min-width: 1280px) {
//   width: calc(100% - 656px);
//   height: 556px;
//   padding: 0;
//   margin-bottom: 8px;
// }
// @media (min-width: 770px) {
//   float: left;
//   padding-bottom: 0;
//   margin-left: 8px;
// }

//  @media (min-width: 600px) {
//   position: relative;
//   height: 100%;
// }
