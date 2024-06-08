const user = {
  name: "Mr.Mirmakhmudov",
  imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  imageSize: 400
};

export default function Profile() {
  return(
    <>
        <h1>{user.name}</h1>
        <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name} 
        style={{width: user.imageSize,height: user.imageSize

        }}
        />
    </>
  );
}
