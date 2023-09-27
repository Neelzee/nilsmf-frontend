import axios from "axios";
import React from "react";
import { ApiRoot } from "../../utils/Utils";

export function GetMedia(id: number) {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${ApiRoot()}media/${id}/`).then(res => {
            setPost(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

 

    if (!post) {
        return null;
    }


    return RenderMedia(post);
}


export function RenderMedia(media: {media: string, is_video: boolean, description: string}) {
    if (media.is_video) {
        return (<video src={media.media} />);
    } else {
        return (<img src={media.media} alt={media.description}/>);
    }
}