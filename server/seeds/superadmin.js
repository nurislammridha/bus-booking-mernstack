const Owner = require("../models/Owner");

exports.seedSuperAdmin = async () => {
    const email = "sadmin@gmail.com"
    const password = "12345678"
    const role = "superadmin"
    const ownerExists = await Owner.findOne({ email });
    if (ownerExists) return;

    const newowner = new Owner({
        email,
        password,
        role,
        name: 'SAdmin',
        citizenshipNumber: '123',
        phone: 9999999999,
        isVerified: true
    });

    await newowner.save();
    console.warn("Superadmin seeded successfully...")
};