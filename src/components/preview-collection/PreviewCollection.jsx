import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "../collection_item/CollectionItem";
function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem {...otherItemProps} key={id} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
