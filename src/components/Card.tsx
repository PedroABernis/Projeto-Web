import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <section className="even-columns">
      <div className="card">
          <img src={icon} alt={`ícone ${title}`} width={280} height={120
        } />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Card;
