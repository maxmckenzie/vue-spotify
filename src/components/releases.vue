<template>
  <ul class="releases">
    <li v-for="release in releases">
        {{ release.name }}
        <span v-for="artist in release.artists">
          - {{ artist.name }}
        </span>
        <ul>
          <li v-for="image in release.images">
            <img v-if="image.width === 300" :src="image.url" alt="release artwork">
          </li>
        </ul>
        <ul>
          <li v-for="track in release.tracks.items">
            <button type="button" v-on:click="play( track )" name="play">
              {{ track.name }}
              {{ track.duration_ms }}
              {{ track.preview_url }}
              {{ track.track_number }}
            </button>
          </li>
        </ul>
    </li>
  </ul>
</template>

<script>
import { Howl } from 'howler'
import store from '../store/index'

export default {
  name: 'releases',
  data () {
    return {
      releases: []
    }
  },
  methods: {
    getReleases () {
      console.log('Get Posts from API')
      const catalogue = `1xUwr5TefDXRTloLS1fGsl,1mmmB2gIgybGFYF4nbndPb,1DVkXzQsmuO0TFxsNGxK9Q,5uCglI8PKvW7ojtN5nEiJF`
      this.$http.get(`https://api.spotify.com/v1/albums?ids=${catalogue}`)
        .then((responce) => {
          this.releases = responce.data.albums
        }, (error) => {
          console.log(error.statusText)
        })
    },
    play (track) {
      console.log(`Playing: ${track.name}`)
      const sound = new Howl({
        src: [track.preview_url],
        autoplay: true,
        html5: true
      })
      // Still does not work seems to be using different instances of Howl
      // Which it should be doing, but it seems incabable of stopping the exsiting sound.
      console.log(`Previous track: ${store.state.sound}`)
      sound.stop(store.state.sound)
      sound.play()
      const soundId = sound.play()
      store.state.sound = soundId
      console.log(`New track: ${store.state.sound}`)
    }
  },
  mounted () {
    this.getReleases()
  }
}
</script>

<style lang="less">
  .releases {
    list-style: none;
    > li {
      font-weight: 700
    }
    >li > ul {
      list-style: none;
    }
    > li > ul > li {
      font-weight: 400
    }
  }
</style>
