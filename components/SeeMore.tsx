"use client";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";

const SeeMore = ({ pageNumber, isNext }) => {
  const router = useRouter();
  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 12;

    // Update the "limit" search parameter in the URL with the new value
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set('limit', newLimit);

    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, {scroll : false});
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          customStyles="bg-primary-green rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default SeeMore;