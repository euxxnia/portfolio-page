const Line = ({
  width = '100%',
  height = '1px',
  color = '#E7DEDC',
  direction = 'horizontal',
}) => {
  return (
    <div
      style={{
        width: direction === 'horizontal' ? width : height,
        height: direction === 'horizontal' ? height : width,
        backgroundColor: color,
        margin: direction === 'horizontal' ? '30px auto' : undefined,
      }}
    ></div>
  );
};

export default Line;
