const initItem = {
  id: null,
  name: "",
  imgUrl: "",
  watering: true,
  wateringFrequency: "daily",
  wateringLastTime: "2020-10-01",
  fertilizing: true,
  fertilizingFrequency: "daily",
  fertilizingLastTime: "2020-10-01",
  trimming: true,
  trimmingFrequency: "daily",
  trimmingLastTime: "2020-10-01",
  fullItemData: {},
};
export class ListItem {
  constructor(item = initItem, index) {
    this.id = index;
    this.name = item.name;
    this.imgUrl = item.imgUrl;
    this.watering = item.watering || initItem.watering;
    this.wateringFrequency =
      item.wateringFrequency || initItem.wateringFrequency;
    this.wateringLastTime = item.wateringLastTime || initItem.wateringLastTime;
    this.fertilizing = item.fertilizing || initItem.fertilizing;
    this.fertilizingFrequency =
      item.fertilizingFrequency || initItem.fertilizingFrequency;
    this.fertilizingLastTime =
      item.fertilizingLastTime || initItem.fertilizingLastTime;
    this.trimming = item.trimming || initItem.trimming;
    this.trimmingFrequency =
      item.trimmingFrequency || initItem.trimmingFrequency;
    this.trimmingLastTime = item.trimmingLastTime || initItem.trimmingLastTime;
    this.fullItemData = { ...item.fullItemData } || initItem.fullItemData;
  }
}

export class ManageData {
  constructor(dataArray = JSON.parse(localStorage.getItem("plantsList"))) {
    if (dataArray) {
      this.dataArray = dataArray;
    } else {
      localStorage.setItem("plantsList", JSON.stringify([]));
      this.dataArray = [];
    }
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
    let id = 0;
    if (this.dataArray.length > 0) {
      id = this.dataArray[this.dataArray.length - 1].id + 1;
    }
    if (item.name === "") {
      item.name = "Un-named plant";
    }
    if (item.imgUrl === "" || !item.imgUrl.includes("http")) {
      item.imgUrl =
        "https://www.flaticon.com/svg/static/icons/svg/628/628283.svg";
    }

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
    return this.dataArray.find((item) => {
      return item.id === parseInt(itemId);
    });
  };
  searchByName = (term) => {
    return this.dataArray.filter((item) => item.name.includes(term));
  };
  clearList = () => {
    this.dataArray = [];
    this.saveNewData();
    return this.dataArray;
  };
}
