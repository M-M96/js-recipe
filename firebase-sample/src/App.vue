<template>
  <div class="app">
    <button v-on:click="postTweet">ツイート</button>
    <!-- 変更点１ -->
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.text }}
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      /* 変更点１ */
      tweets: [
        // {
        //   id: "0GwoGZuhTNhqHQDBeiVW",
        //   text: "こんにちは、ツイートの本文です。"
        // }
      ],
    };
  },
  methods: {
    postTweet() {
      firebase
        .firestore()
        .collection("tweets")
        .add({
          text: "こんにちは、ツイートの本文です。",
        });
    },
  },
  /* 変更点２ */
  created() {
    firebase
      .firestore()
      .collection("tweets")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.tweets.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
  },
};
</script>
