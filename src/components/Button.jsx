const Button = (props) => {
  return (
   <div><a href={props.url}>
      <button className={props.color} >{props.btnText}</button>
    </a></div>
  
  );
};

export default Button;
