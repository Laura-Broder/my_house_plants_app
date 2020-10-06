// const item = {
//   name,
//   imgUrl,
//   id,
// };

class ListItem {
  constructor({ name, imgUrl }, index) {
    this.name = name === "" ? "Un-named plant" : name;
    this.imgUrl =
      imgUrl === ""
        ? "https://www.flaticon.com/svg/static/icons/svg/628/628283.svg"
        : imgUrl;
    this.id = index;
  }
}

class ManageData {
  constructor(dataArray = JSON.parse(localStorage.getItem("plantsList"))) {
    this.dataArray = dataArray;
  }
  getLength = () => {
    return this.dataArray.length;
  };
  saveNewData = () => {
    localStorage.setItem("plantsList", JSON.stringify(this.dataArray));
    return this.dataArray;
  };
  getData = () => {
    return this.dataArray;
  };

  addNew = (item) => {
    const id = this.dataArray[this.dataArray.length - 1].id + 1;
    this.dataArray.push(new ListItem(item, id));
    this.saveNewData();
    return this.dataArray;
  };

  deleteItem = (itemId) => {
    if (!itemId) {
      throw new Error("invalid item id");
    }
    const itemIndex = this.dataArray.findIndex(
      (item) => item.id === parseInt(itemId),
    );
    console.log(itemIndex);
    this.dataArray.splice(itemIndex, 1);
    this.saveNewData();
    return this.dataArray;
  };
  updateItem = (newItem) => {
    const itemIndex = this.dataArray.findIndex(
      (item) => item.id === parseInt(newItem.id),
    );
    this.dataArray[itemIndex] = newItem;
    this.saveNewData();
    return this.dataArray;
  };
  getItemById = (itemId) => {
    return this.dataArray.find((item) => item.id === parseInt(itemId));
  };
  searchByName = (term) => {
    return this.dataArray.filter((item) => item.name.includes(term));
  };
  clearList = () => {
    this.dataArray = [];
    localStorage.clear();
    return this.dataArray.length;
  };
}

// export default manageData;
module.exports = {
  ListItem,
  ManageData,
};
