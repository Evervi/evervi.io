import React from "react";
import {ReactComponent as FacebookIcon} from "../../assets/hollow-cut-facebook.svg";
import {ReactComponent as GitHubIcon} from "../../assets/hollow-cut-github.svg";
import {ReactComponent as TwitterIcon} from "../../assets/hollow-cut-twitter.svg";
import {ReactComponent as YouTubeIcon} from "../../assets/hollow-cut-youtube.svg";

import cx from 'classnames';


type TMedia = "facebook" | "twitter" | "github" | "youtube"; 
type TMediaMap = { [key in TMedia]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> };
const MEDIA_IMG_MAP: TMediaMap = Object.freeze({
    "twitter": TwitterIcon,
    "facebook": FacebookIcon,
    "github": GitHubIcon,
    "youtube": YouTubeIcon,
});

let key = 0;
const MediaIcon = ({ media, url }: { media: TMedia, url: string }) => {
    const Img = MEDIA_IMG_MAP[media];

    // Łączy ze sobą stringi.
    const rootClasses = cx("MediaIcon", `MediaIcon--${media}`);

    return <a href={url}>
            <div className={rootClasses} key={`media_icon_${key++}`}>
             <Img className="MediaIcon__Image" />
            </div>
        </a>
}

export default MediaIcon;