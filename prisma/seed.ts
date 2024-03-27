const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/1.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/2.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/3.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/4.png",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/5.png",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/6.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/7.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/8.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/9.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/10.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/11.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/12.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/13.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/14.jpg",
        price: 299.99 // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        category:"Deals",
        title: "Dyson V11 Torque",
        description: "Dyson V11 Torque Drive + Cordless Vacuum | Blue | Refurbished",
        url: "/images/deals/15.jpg",
        price: 299.99 // EG: 25.00
      },
    });


    await prisma.products.create({
      data: {
        category:"All",
        title: "Samsung galaxy 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/pZHdhK1/samsunggalaxy5.jpg",
        price: 1999
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Apple watch ultra",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/k2GT5xP/apple-watch-ultra-1.jpg",
        price: 9999
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Coros Apex Premium",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/LJJc7Vn/coros-apex-premium-multisport-1.jpg",
        price: 5999
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Apple Watch SE",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/Pjff2JW/apple-watch-se-1.jpg",
        price: 1299
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Apple watch 8",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/4874bqD/apple-watch-series-8-1.jpg",
        price: 6589
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "White tshirt",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/VpLHP6D/pic-tshirt.png",
        price: 22499
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Valve Hat",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/GxPKfj2/pic-hat.png",
        price: 23599
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Big Mug",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/4N3rKPK/pic-mug.png",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Hand Bag",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/mD9Hxc1/pic-bag.png",
        price: 159599
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Picture Canvas",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/DgV906c/pic-canvas.png",
        price: 999599
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "iphone 15",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/p3s01cP/iphone15.jpg",
        price: 9699
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "iphone 14",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/HD4JCrk/iphone2.jpg",
        price: 125
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "iphone New",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/51LfwZ3/iphone3.jpg",
        price: 1599
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "iphone 15 pro",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: 	"https://i.ibb.co/F4VHfPJ/iphone4.jpg",
        price: 259
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "iphone SE",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/hCqWjvQ/iphone5.jpg",
        price: 104959
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Apple light",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/HD4JCrk/iphone2.jpg",
        price: 99999
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Husa Pattern",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/yPj4HCq/husa-pattern-trandafiri-343x463-c.jpg",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: "Artistic",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: 	"https://i.ibb.co/kxKVGRs/artistic-2-343x463-c.jpg",
        price: 256595
      },
    });

    await prisma.products.create({
      data: {
        category:"All",
        title: 	"Husa Pattern Frunze",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "https://i.ibb.co/ZLxHNs0/husa-pattern-frunze-343x463-c.jpg",
        price: 12595
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();






