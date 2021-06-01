import React, { useEffect, useState } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../store/modules/layoutReducer/index";
// components
import FilterBlock from "./filterBlock";
import MediaCard from "./card";
import SimpleButton from "../../shared/SimpleButton";
// next
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  mainBlock: {
    display: "flex",
  },
  content: {
    width: "100%",
    height: "100%",
    margin: "0px 20px 0px 20px",
    display: "flex",
    flexFlow: "row wrap",
  },
  buttonBlock: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "10px",
    marginRight: "25px",
  },
});

export default function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, setValue] = useState("");
  const { productsArray } = useSelector(({ products }) => products);
  const { selectedCategory } = useSelector(({ categories }) => categories);
  const { username } = useSelector(({ login: { profile } }) => profile);

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    dispatch(setPageName("Products"));
  }, []);

  const filterResult = productsArray.filter((item) => {
    if (selectedCategory === "0") return true;
    return item.category === selectedCategory;
  });

  const searchResult = filterResult.filter((item) => {
    if (!item.reference) return false;
    return item.reference.toLowerCase().indexOf(value.toLowerCase()) > -1;
  });

  return (
    <div className={classes.root}>
      <div className={classes.buttonBlock}>
        <SimpleButton
          name={"Create"}
          icon={<AddOutlinedIcon />}
          link={"/products/create"}
        />
      </div>
      <div className={classes.mainBlock}>
        <FilterBlock value={value} setValue={setValue} />
        <div className={classes.content}>
          {searchResult.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
