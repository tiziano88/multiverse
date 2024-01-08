import React, { useEffect } from "react";
import { FieldEditor } from "../utils/components";
import { multiverse } from "../compiled/schema";

const apiKey = "AIzaSyDvi0p-ecxb8t4FvBZfTghLfrIUaORWh-0";

export const YoutubeVideoComponent: FieldEditor<multiverse.IYouTubeVideo> = ({
  value,
  updateValue,
}) => {
  console.log("creating YoutubeVideo", value);
  const [videoData, setVideoData] = React.useState({} as any);

  // e.g. nRrxt7cVLi8
  const isValidId = (id: string) => {
    return id.length === 11;
  };

  useEffect(() => {
    console.log("useEffect");
    if (isValidId(value.videoId || "")) {
      console.log("value.videoId", value.videoId);
      console.log("fetching data from YT");
      // fetch data from YT API.
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.videoId}&key=${apiKey}`
      ).then((response) => {
        response.json().then((data) => {
          console.log("YT data", data);
          // Update the state variable.
          setVideoData(data);
        });
      });
    }
  }, [value.videoId]);

  return (
    <div>
      YouTube video id:
      <input
        type="text"
        value={value.videoId || ""}
        onChange={(e) =>
          updateValue(
            multiverse.YouTubeVideo.create({ videoId: e.target.value })
          )
        }
        placeholder="YouTube video id"
      />
      <div>
        {videoData &&
          videoData.items &&
          videoData.items[0] &&
          videoData.items[0].snippet &&
          videoData.items[0].snippet.title}
      </div>
    </div>
  );
};
