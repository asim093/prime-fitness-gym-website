// Sample data for product titles and descriptions
const products = [
    {
        title: "Yoga Mat",
        description: "Experience comfort during your yoga sessions with this premium quality yoga mat. Its non-slip surface ensures stability and support, enhancing your practice. Crafted from durable materials, it offers longevity and easy maintenance."
    },
    {
        title: "Jump Rope",
        description: "Elevate your cardio workouts with this versatile jump rope. Designed for efficiency, it provides a smooth rotation and comfortable grip. A great tool for improving coordination and burning calories."
    },
    {
        title: "Red and White Band",
        description: " Add resistance to your workouts with this red and white resistance band. Strengthen and tone various muscle groups with its portable and durable design."
    },
    {
        title: "Dumbbell",
        description: " Build strength and muscle with these sleek dumbbells. Featuring a comfortable grip and adjustable weight, they're perfect for a range of exercises."
    },
    {
        title: "Kettle-Bell",
        description: " Challenge your body with this kettlebell, ideal for dynamic movements that engage multiple muscles. Its sturdy construction and ergonomic handle ensure effective workouts."
    },
    {
        title: "Medicine Ball",
        description: " Enhance your core workouts with this medicine ball. Its textured surface provides a secure grip, allowing you to perform a variety of exercises for better stability and strength."
    }, {
        title: "Foam Roller",
        description: "  Improve flexibility and reduce muscle tension with this foam roller. Its compact size and firm texture make it suitable for self-massage and myofascial release."
    }, {
        title: "Pull-up Bar",
        description: "Transform any doorway into a fitness station with this pull-up bar. Strengthen your upper body using different grip variations for a comprehensive workout."
    }, {
        title: "TreadMill",
        description: "Stay active indoors with this treadmill. Its customizable settings and cushioned surface offer an effective and joint-friendly cardio experience."
    }, {
        title: "Ab Wheel",
        description: "  Sculpt your core muscles with this ab wheel. Its ergonomic design and durable construction make it a reliable tool for effective ab workouts."
    }, {
        title: "Weight Bench",
        description: " Elevate your strength training routine with this weight bench. Featuring adjustable incline settings, it allows you to target various muscle groups for a versatile workout."
    }, {
        title: "Stationary Bike",
        description: "Enjoy a cardio session at home with this stationary bike. Its adjustable resistance levels and comfortable seat provide a convenient and effective way to improve cardiovascular fitness."
    }, {
        title: "Gym Gloves",
        description: "Protect your hands and improve your grip with these gym gloves. Their breathable design and padded palms enhance comfort during weightlifting and other exercises."
    }, {
        title: "Gymnastic Ring",
        description: "Challenge your body's stability and strength with these gymnastic rings. Perfect for bodyweight exercises that enhance flexibility and muscular control."
    }, {
        title: "Weighted Vest",
        description: "  Intensify bodyweight workouts with this weighted vest. Its adjustable weight distribution helps increase resistance for better endurance and calorie burn."
    }, {
        title: "Battle Rope",
        description: " Amp up your cardio routine with this battle rope. Perform waves, slams, and other dynamic movements to engage your muscles and elevate your heart rate."
    }, {
        title: "Resistance Tubes",
        description: " Target specific muscle groups with these resistance tubes. Their versatile design allows for various strength exercises, making them a great addition to your home gym."
    }, {
        title: "Gym Ball",
        description: " Improve core stability and balance with this gym ball. Use it for a wide range of exercises that engage your muscles and enhance flexibility."
    }, {
        title: "Push-Up Bars",
        description: " Take your push-ups to the next level with these push-up bars. Their ergonomic design reduces wrist strain and helps you achieve deeper push-up movements."
    }, {
        title: "Rowing machine",
        description: " Experience a full-body workout with this rowing machine. Its smooth gliding motion and adjustable resistance offer an effective cardiovascular and strength-building exercise."
    },
];

function handleCardClick(imageSrc, title) {
    console.log("Clicked title:", title);

    const modalImage = document.getElementById("modalProductImage");
    const modalDescription = document.getElementById("modalProductDescription");

    const product = products.find(product => {
        console.log("Product title:", product.title);
        return product.title === title;
    });

    modalImage.src = imageSrc;
    modalDescription.innerHTML = product ? product.description : "No description available.";

    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    productModal.show();
}
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const imageSrc = card.querySelector(".product-image").src;
            const title = card.querySelector(".card-title").textContent;
            console.log("Clicked title:", title); // Check the extracted title
            handleCardClick(imageSrc, title);
        });
    });
    
});
