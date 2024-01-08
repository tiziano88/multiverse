import React, { useCallback, useEffect } from "react";
import { FieldEditor, Props } from "../utils/components";
import { multiverse } from "../compiled/schema";

const apiKey = "AIzaSyDvi0p-ecxb8t4FvBZfTghLfrIUaORWh-0";

export const YoutubeVideoComponent: FieldEditor<multiverse.IYouTubeVideo> = ({
  value,
  updateValue,
}) => {
  console.log("creating YoutubeVideo", value);
  const [videoData, setVideoData] = React.useState({} as any);

  useEffect(() => {
    console.log("useEffect");
    if (value.videoId && value.videoId.length > 5) {
      console.log("value.videoId", value.videoId);
      console.log("fetching data from YT");
      // fetch data from OMDB.
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.videoId}&key=${apiKey}`
      ).then((response) => {
        response.json().then((data) => {
          console.log("omdb data", data);
          // Update the state variable.
          setVideoData(data);
        });
      });
    }
  }, [value.videoId]);

  return (
    <div>
      <input
        type="text"
        value={value.videoId || ""}
        onChange={(e) =>
          updateValue(
            multiverse.YouTubeVideo.create({ videoId: e.target.value })
          )
        }
        placeholder="Movie"
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
