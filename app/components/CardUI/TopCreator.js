import Image from "next/image";

const TopCreator = (props) => {
  return (
    <div>
      <div className="flex items-center lg:gap-x-6 gap-x-4">
        <div className="relative h-16 w-16">
          <Image
            fill
            style={{ objectFit: "cover", borderRadius: "100%" }}
            quality={75}
            src={props.person.imageUrl}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {props.person.name}
          </h3>
          <p className="text-sm font-semibold leading-6 text-red-600">
            {props.person.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCreator;
