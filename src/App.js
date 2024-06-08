const user = {
  name: "Mr.Mirmakhmudov",
  imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  imageSize: 400
};

const product = [
  {
    title: 'IPhone',
    isPhone: true,
    id: 1 
  },
  {
    title: 'Samsung',
    isPhone: true,
    id: 2 
  },
  {
    title: 'Redmi',
    isPhone: true,
    id: 3 
  },
  {
    title: 'Watermelon',
    isPhone: false,
    id: 4 
  },
];

// export default function Profile() {
//   return(
//     <>
//         <h1>{user.name}</h1>
//         <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name} 
//         style={{width: user.imageSize,height: user.imageSize

//         }}
//         />
//     </>
//   );
// }

export default function ShoppingList() {
  const listItems = product.map(product =>

    <li 
    key={product.id}
    style={{
      color: product.isPhone ? 'green' : "red"
    }}
    >
    {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  )
}

