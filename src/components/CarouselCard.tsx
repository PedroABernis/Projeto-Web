import Star from "../assets/icons/StarRate.svg";
import StarOuter from "../assets/icons/Star.svg";
import "../styles/testimonials.css";

interface ICarouselCard{
    testimony: string;
    profileImg: string;
    rating: number;
    name: string;
    position: string;
    opcional?: number;
}

export default function CarouselCard(props: ICarouselCard) {
    return (
        <div className="carousel-card">
              <img src={props.profileImg} alt="Imagem perfil cliente" />
              <span className="testimony">
                <p>{props.testimony}</p>
                </span>
                <span className="rating">
            {Array(props.rating)
                .fill(1)
                .map((index) =>
                    (<img key = {index} src={Star} alt="ícone estrela" width={22} height={20} />

                ))
            }
            {Array( 5 - props.rating)
                .fill(1)
                .map((index) =>
                    (<img key = {index} src={StarOuter} alt="ícone estrela" width={22} height={20} />

                ))
            }
              </span>
              <span className="names">
                <p>{props.name}</p>
                <p>{props.position}</p>
              </span>
            </div>
    )
}