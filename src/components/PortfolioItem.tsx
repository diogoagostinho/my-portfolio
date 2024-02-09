import PortfolioTag from "./PortfolioTag";
import "../styles/portfolioitem.scss";
import { Link } from "react-router-dom";

function PortfolioItem(props: {
  title: string;
  desc: string;
  image: string;
  link: string;
  tags: string[];
}) {
  return (
    <>
      <Link target="_blank" to={props.link}>
        <div className="portfolio-item">
          <div className="pi-left">
            <img src={props.image} />
          </div>
          <div className="pi-right">
            <div className="pi-info">
              <h4>{props.title}</h4>
              <p>{props.desc}</p>
            </div>
            <div className="pi-tags">
              {props.tags.map(function (data) {
                return <PortfolioTag tag={data} />;
              })}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default PortfolioItem;
