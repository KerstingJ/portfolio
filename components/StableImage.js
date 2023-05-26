import React, { useState, useEffect, useMemo } from "react";

import styled from "styled-components";

/**
 *
 * @param {String} src Source for your image
 * @param {String} alt alt description for your image
 */
export function StableImage({ src, alt, ...rest }) {
  const [imgElement, setImgElement] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded && imgElement?.complete) setIsLoaded(true);
  }, [isLoaded, imgElement]);

  // this probably doesnt need to be hard coded but we'll work with this for now
  const svgSrc = useMemo(() => {
    let fileName = src.split("/").pop();
    return `/svgs/${fileName.split(".")[0]}.svg`;
  }, [src]);

  const srcSets = useMemo(() => {
    return [{ media: `(max-width: 500px)`, src: `${src}-small` }];
  }, [src]);

  return (
    <>
      {!isLoaded && (
        <SvgImg
          style={{ fill: `var(--secondary-color)` }}
          src={svgSrc}
          alt={alt}
          {...rest}
        />
      )}

      {/* Position absolute is to get rid of a weird 20px space from picture even when empty */}
      <picture style={!isLoaded ? { position: "absolute" } : {}}>
        {srcSets.map((rs) => {
          <source key={rs.src + rs.media} srcSet={rs.src} media={rs.media} />;
        })}
        <img
          src={src}
          alt={alt}
          style={!isLoaded ? { visibility: "hidden", height: 0 } : {}}
          ref={setImgElement}
          {...rest}
          onLoad={() => setIsLoaded(true)}
        />
      </picture>
    </>
  );
}

const SvgImg = styled.img`
  filter: invert(100%) sepia() saturate(1100%) hue-rotate(285deg);
`;
