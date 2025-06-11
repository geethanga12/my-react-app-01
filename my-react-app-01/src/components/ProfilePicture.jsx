export default function ProfilePicture() {

  const imageUrl = './src/assets/profile.jpg';

  const handleClick = (e) => {
    e.target.style.display = "none";
  }

  return(
    <img onClick={(e) => handleClick(e)} className="h-[400px]" src={imageUrl} alt="" />
  )
}