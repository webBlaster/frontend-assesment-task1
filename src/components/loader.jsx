const Loader = ({ loading }) => {
  return (
    <span hidden={!loading}>
      <div className="progress">
        <div className="indeterminate green"></div>
      </div>
    </span>
  );
};

export default Loader;
