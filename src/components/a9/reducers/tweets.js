import posts from './data/tweets.json';

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return({
                tweets: action.tweets
            })
            break;
        case 'like-tweet':
            return state.map(tweet => {
                if (tweet._id === action.tweet._id) {
                    if (tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });

        case 'delete-tweet':
            const d_tweet = state.filter((tweet) => tweet._id !== action.tweet._id);
            return d_tweet;

        case 'create-tweet':
            const tweet = {
                _id: new Date().getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "../../../images/react.png",
                "logo-image": "../../../images/react.png",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return [tweet, ...state];
        default:
            return state;
    }

};

export default tweets;