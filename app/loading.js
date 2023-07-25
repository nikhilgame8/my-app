
const loading = () => {
  return (
    <div class="loader-container flex items-center justify-center fixed top-0 left-0 w-full h-full bg-white z-50">
        <div class="hourglass-container w-16 h-16 relative">
          <div class="hourglass-square ease-linear w-full h-full border-4 border-gray-200 animate-spin"></div>
          <div class="hourglass-square-mask absolute top-0 left-0 w-full h-full"></div>
        </div>
      </div>
  );
};

export default loading;
