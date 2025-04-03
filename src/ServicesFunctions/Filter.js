import { IMG } from "../Utils/DummyData";

export const getData = () => {
  return IMG;
};

export const filterData = (cat) => {
  return IMG.filter((item) => item.value === cat);
};
