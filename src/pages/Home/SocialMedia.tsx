import React from "react";
import MediaIcon from "../../components/shared/MediaIcon";

const SocialMedia = () => {

    return <div className="SocialMedia">
        <MediaIcon url="https://github.com/Evervi" media="github" />
        <MediaIcon url="https://twitter.com/evervi_io" media="twitter" />
        <MediaIcon url="https://www.facebook.com/evervi.io" media="facebook" />
        {/* <MediaIcon url="#" media="youtube" /> */}
    </div>
}

export default SocialMedia;