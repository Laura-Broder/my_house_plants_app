const initItem = {
  id: null,
  name: "",
  imgUrl: "",
};
class ListItem {
  constructor(item = initItem) {
    this.id = item.id;
    this.commonName = item.commonName;
    this.imgUrl = item.imgUrl;
  }
}

class PlantData {
  constructor(dataArray = []) {
    this.plantDataArray = this.processData(dataArray);
  }

  processData = (dataArray) => {
    return dataArray.map((item) => {
      return new ListItem({
        id: item.id,
        commonName: item.common_name,
        imgUrl: item.image_url,
      });
    });
  };
  getData = () => {
    return this.plantDataArray;
  };
  getLength = () => {
    return this.plantDataArray.length;
  };
  saveNewData = () => {
    localStorage.setItem("plantsDatabase", JSON.stringify(this.plantDataArray));
    return this.plantDataArray;
  };

  getItemById = (itemId) => {
    return this.plantDataArray.find((item) => {
      return item.id === parseInt(itemId);
    });
  };

  clearList = () => {
    this.plantDataArray = [];
    this.saveNewData();
    return this.plantDataArray;
  };
}

module.exports = {
  ListItem,
  PlantData,
};
