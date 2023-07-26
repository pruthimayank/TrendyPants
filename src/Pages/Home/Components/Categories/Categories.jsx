import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../../../Context";
import styles from "./Categories.module.css";

const Categories = () => {
  const { filterDispatch } = useFilter();

  const filterFromHome = (category) => {
    filterDispatch({ type: "CLEAR" });
    filterDispatch({ type: "CATEGORY_FILTER", payload: { type: category } });
  };

  return (
    <div className={styles.categoryList}>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Men")}
      >
        <img
          src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="HeroImg"
        />
        <span>Men</span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Women")}
      >
        <img
          src="https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="HeroImg"
        />
        <span>Women</span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Kids")}
      >
        <img
          src="https://images.unsplash.com/photo-1631044237696-6b38064fbbf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGplYW5zJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="HeroImg"
        />
        <span>Kids</span>
      </Link>
    </div>
  );
};

export { Categories };
