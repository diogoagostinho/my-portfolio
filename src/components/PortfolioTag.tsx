import "../styles/portfoliotags.scss";

function PortfolioTag(props: { tag: string }) {
  return (
    <>
      <div className={"portfolio-tag " + props.tag}>
        <p>{props.tag}</p>
      </div>
    </>
  );
}

export default PortfolioTag;
