import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function Player({ hash }) {
  let url = `https://ipfs.io/ipfs/${hash}`;
  return (
    <Plyr
      source={{
        type: "video",
        title: "Example title",
        sources: [
          {
            src: url,
            type: "video/mp4",
          },
        ],
      }}
      options={{
        autoplay: true,
      }}
      autoPlay={true}
    />
  );
}
