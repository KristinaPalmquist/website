import {useEffect, useRef} from 'react';
import styles from './HoverGlideGallery.module.css';

const HoverGlideGallery = () => {
  const galleryRef = useRef(null);

  // const backgroundColors = [
  //   '#ff6fff', '#ff784f', '#ae914A', '#6b6b56',
  //   '#a2d729', '#175676', '#79addc',
  //   '#354f52', '#60992d', '#4d5382',
  //   '#d4d6b9', '#e3d26f', '#dbd3ad'
  // ];
  // const getRandomColor = () => {
  //   return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  // }
  //
  // const generateRandomColors = (num) => {
  //   return Array.from({length: num}, () => getRandomColor());
  // }
  //
  // const randomColor = () => {
  //   const [divColors, setDivColors] = useState([]);
  //   useEffect(() => {
  //     setDivColors((generateRandomColors(backgroundColors.length)))
  //   })
  // }

  useEffect(() => {
    const gallery = galleryRef.current;

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth;
      const yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth;
      const maxY = gallery.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1.0;
      const panY = maxY * yDecimal * -1.0;

      gallery.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
        },
        {
          duration: 4000,
          fill: 'forwards',
          easing: 'ease',
        }
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="gallery" ref={galleryRef} className={styles.gallery}>
      {/*{CoursesItems.map((item, index) => {*/}
      {/*  return (  <div className={styles.tile}>*/}
      {/*    <img*/}
      {/*      src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"*/}
      {/*      alt="Random"/>*/}
      {/*  </div>)}*/}

      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"
          alt="Random"/>
      </div>
      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"
          alt="Blue"/>
      </div>
      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70"
          alt="Random"/>
      </div>
      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"
          alt="Green"/>
      </div>
      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70"
          alt="Purple"/>
      </div>
      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70"
          alt="Orange"/>
      </div>
      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1520338258525-606b90f95b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70"
          alt="Dark Blue"/>
      </div>
      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"
          alt="Random"/>
      </div>
      <div className={styles.tile}>
        <img
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70"
          alt="Random"/>
      </div>
    </div>

  );
};

export default HoverGlideGallery;


{/*import styles from './HoverGlideGallery.module.css'*/
}
// const HoverGlideGallery = () => {
//   const gallery = document.getElementById("gallery");
//
//   window.onmousemove = e => {
//     const mouseX = e.clientX,
//       mouseY = e.clientY;
//
//     const xDecimal = mouseX / window.innerWidth,
//       yDecimal = mouseY / window.innerHeight;
//
//     const maxX = gallery.offsetWidth - window.innerWidth,
//       maxY = gallery.offsetHeight - window.innerHeight;
//
//     const panX = maxX * xDecimal * -1.0,
//       panY = maxY * yDecimal * -1.0;
//
//     gallery.animate({
//       transform: `translate(${panX}px, ${panY}px)`
//     }, {
//       duration: 4000,
//       fill: "forwards",
//       easing: "ease"
//     })
//   }
{/*  return (*/
}
{/*    <div className={styles.gallery}>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1520338258525-606b90f95b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*      <div className={styles.tile}>*/
}
{/*        <img*/
}
{/*          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70"/>*/
}
{/*      </div>*/
}
{/*    </div>*/
}

{/*  )*/
}

{/*}*/
}
{/*export default HoverGlideGallery;*/
}