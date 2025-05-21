import "../styles/foryou.css";

interface IFunctionCard {
  icon: string;
  title: string;
  description: string;
}

export default function IFunctionCard(props: IFunctionCard) {
  return (
    <section className="even-columns">
      <div className="card">
          <img src={props.icon} alt={`ícone ${props.title}`} width={280} height={120
        } />
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <hr />
      </div>
    </section>
  );
};

