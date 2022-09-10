import NextImage from "next/future/image";

const customLoader = ({ src }) => {
  return src;
};

export default function Image(props) {
  return <NextImage {...props} loader={customLoader} unoptimized="true" />;
}
