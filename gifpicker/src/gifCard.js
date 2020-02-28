import React from "react";
import { useState } from "react";

export default function GifCard(props) {
return (
    <div>
      <img src={props.images.downsized.url} alt={props.title} />
    </div>
  );
}

