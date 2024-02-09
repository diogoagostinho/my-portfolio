import "../styles/listitem.scss";

function ListItem(props: { title: string; desc: string; image: string }) {
  return (
    <>
      <div className="listitem">
        <div className="listitem-left">
          <img src={props.image} />
        </div>
        <div className="listitem-right">
          <h3>{props.title}</h3>
          <h2>{props.desc}</h2>
        </div>
      </div>
    </>
  );
}
export default ListItem;
