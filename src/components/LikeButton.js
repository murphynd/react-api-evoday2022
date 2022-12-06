import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((current) => !current);
  };

  return (
    <div>
      <button onClick={toggleLike}>
        {!liked && <FavoriteBorderOutlinedIcon style={{ color: "red" }} />}
        {liked && <FavoriteIcon style={{ color: "red" }} />}
      </button>
    </div>
  );
};
