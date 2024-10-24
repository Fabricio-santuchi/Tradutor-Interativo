/* eslint-disable react/prop-types */

const MsgError = ({ error }) => {
  return (
    <div className="p-4 bg-red-100 border-t border-red-400 text-red-700">
      {error}
    </div>
  );
};

export default MsgError;
