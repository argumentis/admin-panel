import React, { useEffect, useState } from "react";
// material UI
import { makeStyles } from "@material-ui/core/styles";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
// redux
import { connect } from "react-redux";
import { setPageName } from "redux/modules/layout/actionCreators";
// components
import FilterBlock from "./FilterBlock";
import MediaCard from "./Card";
import SimpleButton from "../Button";
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

const mapStateToProps = (store) => {
  const { productsArray } = store.products;
  const { selectedCategory } = store.categories;
  const { username } = store.login.profile;
  return {
    productsArray,
    selectedCategory,
    username,
  };
};

const Products = ({
  productsArray,
  selectedCategory,
  username,
  setPageName,
}) => {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (username === "") {
      router.push("/login");
    }
    setPageName("Products");
  }, []);

  // sort products array from selected category
  const filterResult = productsArray.filter((item) => {
    if (selectedCategory === "0") return true;
    return item.category === selectedCategory;
  });

  // filter sorted array from search result
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
};

export default connect(mapStateToProps, { setPageName })(Products);
