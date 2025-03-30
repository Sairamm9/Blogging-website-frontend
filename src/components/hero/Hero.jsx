import "./Hero.css";
import { hero } from "../../assets";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="Hero">
        <div className="HeroTitile">
            <span className="HeroTitleLg">Where are you</span>
            <span className="HeroTitleMd">Come to here for your life</span>
            <span className="HeroTitleSm">Create your own <a>Blog</a> from here</span>
            <Link to="/write"><div className="button">
            <span>Create your Blog</span>
            </div></Link>
        </div>
        <img className="HeroImg" src={hero}/>
    </div>

  )
}
