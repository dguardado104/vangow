export default function Button({variant, className , onClick, children}){

  const styleButton = () => {
    
    if(className){
      return className
    }

    switch (variant) {
      case 'primary':
        return "text-white bg-primary py-2 px-4 rounded-lg  transition-all uppercase hover:scale-105 hover:bg-secondary" 
      default:
        return "text-white bg-primary py-2 px-4 rounded-lg  transition-all uppercase hover:scale-105 hover:bg-secondary"
    }
  }

  


  return (
    <button className={styleButton()} onClick={onClick}>
      {children}
    </button>
  )
}