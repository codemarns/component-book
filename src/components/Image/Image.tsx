import React, { useEffect, useMemo } from "react";
import cn from "classnames";
import styled from "styled-components";
import { imageStyles } from "../../styles";

type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
  thumbnail: string;
  width?: string;
  aspectRatio?: "16:9" | "8:5" | "4:3" | "3:2" | "1:1";
};

export const Image: React.FC<ImageProps> = (props) => {
  const { className, alt, src, thumbnail, aspectRatio = "4:3", width } = props;

  
  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load");
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");

      function loaded() {
        div.classList.add("loaded");
      }

      if (img?.complete) {
        loaded();
      } else {
        img?.addEventListener("load", loaded);
      }
    });
  }, []);

  const switchAspectRatio = useMemo(() => {
    switch (aspectRatio) {
      case "16:9":
        return "56.25%";
      case "8:5":
        return "62.5%";
      case "4:3":
        return "75%";
      case "3:2":
        return "66.66%";
      case "1:1":
        return "100%";
      default:
        return "75%";
    }
  }, [aspectRatio]);

  const { root, wrapper, overlay, img } = imageStyles;

  return (
    <StyledImage
      className={cn(className, "cm-image", root.base)}
      style={{ maxWidth: width ?? "100%" }}
    >
      <div className={wrapper.base} style={{ paddingTop: switchAspectRatio }}>
        <div
          className={cn("blur-load", overlay.base)}
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <img src={src} alt={alt} className={img.base} loading="lazy" />
        </div>
      </div>
    </StyledImage>
  );
};

const StyledImage = styled.div`
  .blur-load.loaded > img {
    opacity: 1;
  }
  .blur-load > img {
    opacity: 0;
  }
`;
