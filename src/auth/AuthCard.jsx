import loadingImg from "../assets/loadin_img.png";
function AuthCard() {
  return (
    <div>
      On progress~
      <img className="w-1/2" src={loadingImg} alt="loading" />
    </div>
  );
}

export default AuthCard;
