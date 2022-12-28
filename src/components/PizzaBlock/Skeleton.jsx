import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={285}
    height={520}
    viewBox="0 0 285 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="505" y="231" rx="3" ry="3" width="88" height="6" />
    <rect x="553" y="229" rx="3" ry="3" width="52" height="6" />
    <rect x="452" y="225" rx="3" ry="3" width="410" height="6" />
    <rect x="405" y="232" rx="3" ry="3" width="380" height="6" />
    <rect x="452" y="230" rx="3" ry="3" width="178" height="6" />
    <circle cx="584" cy="228" r="20" />
    <circle cx="572" cy="220" r="48" />
    <circle cx="574" cy="239" r="6" />
    <circle cx="589" cy="223" r="17" />
    <circle cx="586" cy="214" r="18" />
    <rect x="0" y="297" rx="10" ry="10" width="280" height="20" />
    <rect x="5" y="342" rx="10" ry="10" width="280" height="88" />
    <rect x="570" y="571" rx="0" ry="0" width="24" height="6" />
    <rect x="0" y="458" rx="11" ry="11" width="95" height="30" />
    <rect x="131" y="450" rx="29" ry="29" width="152" height="45" />
    <circle cx="134" cy="134" r="134" />
  </ContentLoader>
);

export default Skeleton;
