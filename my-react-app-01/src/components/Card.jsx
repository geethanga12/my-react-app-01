import profilePic from '../assets/profile.jpg'

function Card() {
  return(
    <div className="card">
      <img src={profilePic} alt="profile-picture" />
      <h2>Geeth Dev</h2>
      <p>I am a software engineer.</p>
    </div>
  );
}

export default Card