import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, className, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          height: h,
          width: w,
          quality: "auto",
          crop: "lanczos:fill",
        },
      ]}
    />
  );
};
export default Image;
