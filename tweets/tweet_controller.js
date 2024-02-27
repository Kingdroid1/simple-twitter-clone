import { Tweet } from './tweet_model.js';

export const PostTweet = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0)
            return false;

        req.body.user = req.user._id;

        const tweet = new Tweet(req.body);
        await tweet.save();
        res.status(200).json({
            status: true,
            message: 'tweet posted successfully'
        });
    } catch (error) {
        console.log(err)
        res.redirect('/?msg=failed to tweet');
    }

}

export const GetSingleTweet = async (req, res) => {
    try {
        const tweet = await Tweet.findOne({ _id: req.params.id }).populate('user');
        res.json({
            status: true,
            result: tweet
        })
    } catch (e) {
        console.log(e);
        res.redirect('/?msg=No tweet found')
    }
}

export const GetAllTweets = async (req, res) => {
    try {
        const tweets = await Tweet.find().sort({ createdAt: -1 });
        res.json({
            status: true,
            result: tweets
        })
    } catch (e) {

    }
}

export const Following = (req, res) => {
    Tweet.find({
        'user.id': { $in: req.user.following }})
        .sort({ createdAt: -1 })
        .then(tweets => res.json(tweets))
        .catch(err => console.log(err))
}