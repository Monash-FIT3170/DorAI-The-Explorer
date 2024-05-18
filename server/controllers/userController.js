const mongoose = require('mongoose')

// controllers/userController.js
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// Create a new user
const createUser = asyncHandler(async (req, res) => {
    const { username } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user with given username and default points
    const user = await User.create({ username });

    res.status(201).json(user);
});

// Update user points
const updatePoints = asyncHandler(async (req, res) => {
    const { username, newCoins } = req.body;
    // Find user and update their points
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.points = newCoins;
    await user.save();

    res.status(200).json({
        message: "Points updated successfully",
        username: user.username,
        points: user.points
    });
});

// Fetch specific user data
const getUserByUsername = asyncHandler(async (req, res) => {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});

const getUserById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById( id );
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});

const updateAvatar = asyncHandler(async (req, res) => {
    const { username, avatar, border, background } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.avatar = avatar;
    user.border = border;
    user.background = background;
    await user.save();
});

const updateUnlocked = asyncHandler(async (req, res) => {
    const { username, unlockedAvatars, unlockedBorders, unlockedBackgrounds } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const avatarSet = new Set([...unlockedAvatars, ...user.unlockedAvatars]);
    user.unlockedAvatars = [...avatarSet];
    const borderSet = new Set([...unlockedBorders, ...user.unlockedBorders]);
    user.unlockedBorders = [...borderSet];
    const backgroundSet = new Set([...unlockedBackgrounds, ...user.unlockedBackgrounds]);
    user.unlockedBackgrounds = [...backgroundSet];
    await user.save();
});


module.exports = {
    createUser,
    updatePoints,
    getUserByUsername,
    getUserById,
    updateAvatar,
    updateUnlocked
};
