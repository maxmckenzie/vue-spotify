<template>
  <ul class="releases">
    <li v-for="release in releases">
        {{ release.name }}
        <span v-for="artist in release.artists">
          {{ artist.name }}
        </span>
        <ul>
          <li v-for="track in release.tracks.items">
            {{ track.name }}
            {{ track.duration_ms }}
            {{ track.preview_url }}
            {{ track.track_number }}
          </li>
        </ul>
    </li>
  </ul>
</template>

<script>
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
          console.log(this.releases)
        }, (error) => {
          console.log(error.statusText)
        })
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
    > li > ul > li {
      font-weight: 400
    }
  }
</style>
