const initItem = {
  id: null,
  name: "",
  imgUrl: "",
  fullItemData: {},
};
class ListItem {
  constructor(item = initItem) {
    this.id = item.id;
    this.name = item.name;
    this.imgUrl = item.imgUrl;
    this.fullItemData = { ...item.fullItemData };
  }
}

class PlantDatabase {
  constructor(dataArray) {
    if (dataArray) {
      this.plantDataArray = this.processData(dataArray);
      this.saveNewData();
    } else if (localStorage.getItem("plantsDatabase")) {
      this.plantDataArray = JSON.parse(localStorage.getItem("plantsDatabase"));
    } else {
      localStorage.setItem("plantsDatabase", JSON.stringify([]));
      this.plantDataArray = [];
    }
  }
  saveNewData = () => {
    localStorage.setItem("plantsDatabase", JSON.stringify(this.plantDataArray));
    return this.plantDataArray;
  };
  setNewData = (newData) => {
    this.plantDataArray = this.processData(newData);
    this.saveNewData();
    return this.plantDataArray;
  };
  processData = (dataArray) => {
    return dataArray.map((item) => {
      return new ListItem({
        id: item.id,
        name: item.common_name,
        imgUrl:
          item.image_url ||
          "https://www.flaticon.com/svg/static/icons/svg/628/628283.svg",
        fullItemData: { ...item },
      });
    });
  };
  getData = () => {
    return this.plantDataArray;
  };
  getLength = () => {
    return this.plantDataArray.length;
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

// const initFullItem = {
//   id: null,
//   name: "Un-named",
//   imgUrl: "https://www.flaticon.com/svg/static/icons/svg/628/628283.svg",
//   family_common_name: "",
//   duration: "",
//   edible: "",
//   flower_images: "",
// };

class FullItem {
  constructor(item) {
    this.id = item.id;
    this.name = item.common_name || "un-known";
    this.imgUrl = item.image_url || "no data";
    this.family_common_name = item.family_common_name || "no data";
    this.duration = item.duration ? item.duration.join() : "no data";
    this.edible = item.edible && item.edible.toString();
    // this.flower_images =
    //   item.images.flower
    //     .map((img) => {
    //       return img.image_url;
    //     })
    //     .toString() || "no data";
    // this.leaf_images =
    //   item.images.leaf
    //     .map((img) => {
    //       return img.image_url;
    //     })
    //     .toString() || "no data";
    // this.fruit_images =
    //   item.images.fruit
    //     .map((img) => {
    //       return img.image_url;
    //     })
    //     .toString() || "no data";
    this.flower_color = item.flower.color
      ? item.flower.color.join()
      : "no data";
    this.ligneous = item.specifications.ligneous_type || "no data";
    this.average_height = item.specifications.average_height.cm || "no data";
    this.bloom_months = item.growth.bloom_months
      ? item.growth.bloom_months.join().toString()
      : "no data";
    this.fullData = item || {};
  }
}

module.exports = {
  ListItem,
  PlantDatabase,
  FullItem,
};
