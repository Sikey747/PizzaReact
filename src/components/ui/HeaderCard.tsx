import Buy from '../../assets/img/buy.svg?react';

interface HeaderCardProps {
  price: number;
  count: number;
}

function HeaderCard({ price, count }: HeaderCardProps) {
  return (
    <div className="header__cart">
      <div className="button button--cart">
        <span>{price} ₴</span>
        <div className="button__delimiter" />
        <Buy />
        <span>{count}</span>
      </div>
    </div>
  );
}

export default HeaderCard;
