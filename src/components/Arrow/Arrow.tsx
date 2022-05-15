import cn from 'classnames';
import { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

import useScrollY from '../../hooks/useScrollY';
import styles from './Arrow.module.scss';

const Arrow = () => {
  const [isShow, setisShow] = useState(false);
  const [prevPosition, setPrevPosition] = useState(0);
  const scrollY = useScrollY();

  const handleClick = () => {
    let goTo = prevPosition ? prevPosition : window.screenTop;

    window.scrollTo({
      top: goTo,
      behavior: 'smooth',
    });

    setPrevPosition(prevPosition > 0 ? window.screenTop : scrollY);
  };

  useEffect(() => {
    if (scrollY > window.innerHeight * 0.7) {
      setisShow(true);
    } else {
      if (!prevPosition) {
        setisShow(false);
      }
    }

    if (prevPosition > 0 && scrollY > prevPosition) {
      setPrevPosition(window.screenTop);
    }
  }, [scrollY, prevPosition]);

  return (
    <div
      className={cn(styles.arrow, {
        [styles.show]: isShow,
        [styles.down]: prevPosition > 0 && prevPosition > scrollY,
      })}
      onClick={handleClick}
    >
      <BsArrowUp />
    </div>
  );
};
export default Arrow;
