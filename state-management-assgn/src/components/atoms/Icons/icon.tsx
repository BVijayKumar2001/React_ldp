interface IconProps {
  url: string;
}
const Icon = (props: IconProps) => {
  return (
    <div>
      <img src={props.url} alt='BT' width='50px' height='50px'/>
      
    </div>
  );
};

export default Icon;