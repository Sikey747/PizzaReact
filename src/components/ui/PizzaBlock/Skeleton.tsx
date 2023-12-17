import ContentLoader from 'react-content-loader';

function PizzaSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={480}
      viewBox="0 0 280 480"
      backgroundColor="#dedede"
      foregroundColor="#ababab"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="275" rx="0" ry="0" width="280" height="53" />
      <rect x="0" y="337" rx="0" ry="0" width="280" height="86" />
      <rect x="0" y="442" rx="0" ry="0" width="88" height="27" />
      <rect x="154" y="435" rx="30" ry="30" width="127" height="43" />
    </ContentLoader>
  );
}

export default PizzaSkeleton;
