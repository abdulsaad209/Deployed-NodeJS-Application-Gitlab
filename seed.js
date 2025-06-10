const mongoose = require('mongoose');
const path = require('path');

// Connect to MongoDB
mongoose.connect("mongodb://superuser:SuperPassword@localhost:27017/solar_system?authSource=solar_system", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define your schema (same as in app.js)
var Schema = mongoose.Schema;
var dataSchema = new Schema({
    name: String,
    id: Number,
    description: String,
    image: String,
    velocity: String,
    distance: String
});
var Planet = mongoose.model('planets', dataSchema);

// Complete planet data to seed
const planetsData = [
    {
        id: 0,
        name: "Sun",
        description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/sun.png",
        velocity: "0 km/s (relative to nearby stars)",
        distance: "0 km (center of Solar System)"
    },
    {
        id: 1,
        name: "Mercury",
        description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/mercury.png",
        velocity: "47.4 km/s",
        distance: "57.9 million km"
    },
    {
        id: 2,
        name: "Venus",
        description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/venus.png",
        velocity: "35.0 km/s",
        distance: "108.2 million km"
    },
    {
        id: 3,
        name: "Earth",
        description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/earth.png",
        velocity: "29.8 km/s",
        distance: "149.6 million km"
    },
    {
        id: 4,
        name: "Mars",
        description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet' due to the iron oxide prevalent on its surface.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/mars.png",
        velocity: "24.1 km/s",
        distance: "227.9 million km"
    },
    {
        id: 5,
        name: "Jupiter",
        description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is named after the Roman god Jupiter, the king of gods.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/jupiter.png",
        velocity: "13.1 km/s",
        distance: "778.3 million km"
    },
    {
        id: 6,
        name: "Saturn",
        description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It is named after the Roman god of wealth and agriculture.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/saturn.png",
        velocity: "9.7 km/s",
        distance: "1.4 billion km"
    },
    {
        id: 7,
        name: "Uranus",
        description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/uranus.png",
        velocity: "6.8 km/s",
        distance: "2.9 billion km"
    },
    {
        id: 8,
        name: "Neptune",
        description: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is named after the Roman god of the sea.",
        image: "https://gitlab.com/sidd-harth/solar-system/-/raw/main/images/neptune.png",
        velocity: "5.4 km/s",
        distance: "4.5 billion km"
    },
];

// Clear existing data and insert new data
async function seedDatabase() {
    try {
        await Planet.deleteMany({}); // Clear existing data
        await Planet.insertMany(planetsData);
        console.log('Database seeded successfully with all planets!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
