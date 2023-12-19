import { category } from '../../../mocap/mocap';

interface CategoriesProps {
  selectTypeUser: number;
  onClick?: (e: number) => void;
}

function Categories({
  selectTypeUser: selectCategory,
  onClick,
}: CategoriesProps) {
  return (
    <div className="categories">
      <ul>
        {category.map((el) => {
          return (
            <li key={el.title}>
              <button
                onClick={() => onClick && onClick(el.number)}
                type="button"
                className={selectCategory === el.number ? 'active' : ''}
              >
                {el.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
