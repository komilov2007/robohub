import ReviewCardItem from "./ReviewCardItem";

const ReviewList = ({ reviews, activeItems, handleToggle, t }: any) => {
  return (
    <>
      {reviews.map((item: any) => (
        <ReviewCardItem
          key={item.id}
          item={item}
          t={t}
          isActive={activeItems.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </>
  );
};

export default ReviewList;
