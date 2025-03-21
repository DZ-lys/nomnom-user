import { FoodWithCategoryType } from "@/types";

const FoodCard = ({ food }: { food: FoodWithCategoryType }) => {
  return (
    <div
      id={food._id}
      className="flex flex-col gap-3 justify-center items-center w-[17rem] h-60 rounded-3xl border border-[#e4e4e7] px-4 py-2 hover:cursor-pointer "
    >
      <div className="w-60 h-32 rounded-xl overflow-hidden ">
        <img src={food.image} alt="" />
      </div>
      <div className="flex justify-between ">
        <h4 className="text-[#ef4444] text-sm font-medium ">{food.foodName}</h4>
        <p>{food.price}</p>
      </div>
      <div>
        <p>{food.ingredients}</p>
      </div>
    </div>
  );
};

export default FoodCard;
