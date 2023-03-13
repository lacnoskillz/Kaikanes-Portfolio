import React from 'react';
import DownloadLink from "react-download-link";
export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
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
