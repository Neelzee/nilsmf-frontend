import axios from "axios";
import React from "react";

export function GetMedia(id) {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/media/${id}/`).then(res => {
            setPost(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

 

    if (!post) {
        return null;
    }


    return RenderMedia(post);
}


export function RenderMedia(media) {
    if (media.is_video) {
        return (<video src={media.media} />);
    } else {
        return (<img src={media.media} alt={media.description}/>);
    }
}