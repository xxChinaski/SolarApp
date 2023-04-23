import { setCurrentPictureForProduct } from "@/app/store/slices/dataSlice";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";

const PhotoElement = ({
  image,
  index,
  pid,
}: {
  image: any;
  index: number;
  pid: string;
}): ReactElement => {
  const dispatch = useDispatch();
  const data = [index, pid];
  return (
    <li
      key={index}
      id={`${index}`}
      className="relative overflow-hidden w-full pb-[15%] cursor-pointer rounded-md"
      onClick={() => {
        dispatch(setCurrentPictureForProduct(data));
      }}
    >
      <img
        className="absolute left-0 top-0 w-full h-full object-cover"
        src={image}
        alt={`product-${index}`}
      />
    </li>
  );
};

PhotoElement.displayName = "photo element";
export default PhotoElement;
