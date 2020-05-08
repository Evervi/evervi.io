import React from "react";
import {ReactComponent as FacebookIcon} from "../../assets/hollow-cut-facebook.svg";
import {ReactComponent as GitHubIcon} from "../../assets/hollow-cut-github.svg";
import {ReactComponent as TwitterIcon} from "../../assets/hollow-cut-twitter.svg";
import {ReactComponent as YouTubeIcon} from "../../assets/hollow-cut-youtube.svg";


type TMedia = "facebook" | "twitter" | "github" | "youtube"; 
type TMediaMap = { [key in TMedia]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> };
const MEDIA_IMG_MAP: TMediaMap = Object.freeze({
    "twitter": TwitterIcon,
    "facebook": FacebookIcon,
    "github": GitHubIcon,
    "youtube": YouTubeIcon,
});

const MEDIA_COLOR_MAP: { [key in TMedia]: string } = Object.freeze({
    "twitter": "#1DA1F2",
    "facebook": "#0096F6",
    "github": "#24292E",
    "youtube": "#F13200",
});

let key = 0;
const MediaIcon = ({ media, url }: { media: TMedia, url: string }) => {
    const Img = MEDIA_IMG_MAP[media];

    return <a href={url}>
            <div className="MediaIcon" key={`media_icon_${key++}`}>
             <Img className="MediaIcon__Image" style={{ fill: MEDIA_COLOR_MAP[media] }} />
            </div>
        </a>
}

export default MediaIcon;