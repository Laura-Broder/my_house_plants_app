import React from "react";

const FullDataItem = ({ item, fullData }) => {
  const renderValue = (val) => {
    if (Array.isArray(val)) return null;
    return <p className="long-row-wrap">{val}</p>;
  };

  const renderItem = () => {
    if (fullData) {
      const fullDataArray = Object.entries(fullData);
      return (
        <div className="container">
          <h3>{item.name}</h3>
          <img src={item.imgUrl} alt={item.name} />
          {fullDataArray.map(([title, val]) => {
            if (typeof val === "object") return null;
            if (title === "id") return null;
            if (title === "imgUrl") return null;
            return (
              <div key={title}>
                <h4>{title}</h4>
                {renderValue(val)}
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };
  return renderItem();
};

export default FullDataItem;
