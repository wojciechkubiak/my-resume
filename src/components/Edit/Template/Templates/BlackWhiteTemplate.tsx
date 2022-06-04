import { Personal } from "../../../../context/EditContext";

interface IBlackWhiteTemplate {
  personal?: Personal;
}

const BlackWhiteTemplate: React.FC<IBlackWhiteTemplate> = ({ personal }) => {
  return (
    <>
      <div className="h-1/6 relative flex items-center justify-center bg-templateDark">
        <div className="w-1/2 text-center px-12 py-4 border-2 border-white">
          <h1 className="text-white text-2xl font-bold">
            {personal?.firstName} {personal?.lastName}
          </h1>
          <h1 className="text-white text-lg pt-2">
            {personal?.title}
          </h1>
        </div>
      </div>
      <div className="h-5/6 w-1/4 absolute bg-templateDark"></div>
    </>
  );
};

export default BlackWhiteTemplate;
