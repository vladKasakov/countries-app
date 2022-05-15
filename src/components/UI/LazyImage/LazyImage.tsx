import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

import styles from './LazyImage.module.scss';

type Props = {
  src: string;
  alt: string;
  style?: React.CSSProperties | undefined;
};
const LazyImage = (props: Props) => {
  const { alt, src, style = undefined } = props;
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgBoxRef = useRef<HTMLDivElement | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const imageBox = imgBoxRef.current;

    const cb = ([entry]: IntersectionObserverEntry[]) => {
      setIsIntersecting(entry.isIntersecting);
    };

    const options = {};

    const observer = new IntersectionObserver(cb, options);

    if (imageBox) {
      observer.observe(imageBox);
    }
    return () => {
      if (imageBox) {
        observer.unobserve(imageBox);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting || !isLoaded) {
      if (imgRef.current) {
        imgRef.current.onload = () => setIsLoaded(true);
      }
    }
  }, [isIntersecting, isLoaded]);

  return (
    <div ref={imgBoxRef} className={styles.imgbox} style={style}>
      {(isIntersecting || isLoaded) && (
        <img
          ref={imgRef}
          alt={alt}
          src={src}
          className={cn(styles.image, { [styles.imageloaded]: isLoaded })}
        />
      )}
    </div>
  );
};
export default LazyImage;
