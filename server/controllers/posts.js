import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'
import sendMails from '../sendMail.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find({});

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    console.log(post);
    try {
        await newPost.save();
        sendMails("New post was created!");
        // await PostMessage.insertMany([post]);

        res.status(201).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    //const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    sendMails("One post was updated!");
    res.json(updatePost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);
    sendMails("One post was deleted!");
    res.json({ message: 'Post deleted successfully' });
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    sendMails("One post was recommended!");
    res.json(updatedPost);
};