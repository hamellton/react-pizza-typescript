import React, { useState } from "react";

const Categories: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [categories] = useState<string[]>([
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);

  const onSelect = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => {
          return (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelect(index)}
              key={`${el}__${index}`}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
