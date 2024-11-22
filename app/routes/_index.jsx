import Name from "../components/Name";
import Price from "../components/Price";
import Description from "../components/Description";
import Image from "../components/Image";

const profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zo5bcdAiJDEGBbkvbEGsEgKfZIT_PWSYNQ&s";

export const meta = () => {
  return [{ title: "Product Card" }];
};

export default function Index() {
  const firstName = "Fatuma"; // Change to your name or leave blank

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Product Card */}
      <div className="max-w-sm bg-white rounded-lg shadow-lg p-6">
        <Image />
        <div className="mt-4">
          <Name />
          <Price />
          <Description />
        </div>
      </div>

      {/* Greeting Section */}
      <div className="mt-6 text-center">
        {firstName ? (
          <>
            <p className="text-xl font-semibold">Hello, {firstName}!</p>
            <img
              src={profileImage} // Use the provided URL for profile image
              alt="Profile"
              className="w-16 h-16 mt-4 rounded-full object-cover"
            />
          </>
        ) : (
          <p className="text-xl font-semibold">Hello, there!</p>
        )}
      </div>
    </div>
  );
}
