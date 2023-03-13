import React from 'react';
import DownloadLink from "react-download-link";
export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
       Download resume here <DownloadLink
    label="Download"
    filename="fileName.txt"
    exportFile={() => "Client side cache data here…"}
/>
      </p>
    </div>
  );
}
